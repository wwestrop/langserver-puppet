import { ICompletionContext } from '../src/completionContexts/ICompletionContext';
import { ContextResolver } from '../src/types/ContextResolver'

import { assert } from 'chai';
import 'mocha';
import { ParameterContext } from "../src/completionContexts/ParameterContext";
import { NoOpContext } from "../src/completionContexts/NoOpContext";
import { ResourceContext } from "../src/completionContexts/ResouceContext";
import { ParameterValueContext } from "../src/completionContexts/ParameterValueContext";
import { FakeResourceFinder } from "./fakes/fakeResourceFinder";

describe('Resolving the auto-completion context', () => {

    let sut: ContextResolver;

    beforeEach(() => {
        sut = new ContextResolver(new FakeResourceFinder());
    });

    /** The pipe character, '|' in the input is used to denote the caret position */
    function act(manifestContent: string): ICompletionContext {
        let caretPosition = manifestContent.lastIndexOf('|');
        if (caretPosition === -1) {
            caretPosition = manifestContent.length;
        }
        manifestContent = manifestContent.replace(/\|/g, '');

        return sut.resolve(manifestContent, caretPosition)
    }

    function assertExpectedParameters(actual: ICompletionContext, expectedParams: string[]): void {
        expectedParams = expectedParams.sort();
        const actualParams = actual.getCompletionItems()
            .map(i => i.label)
            .sort();

        assert.deepEqual(actualParams, expectedParams);
    }

    describe('When beginning a new manifest', () => {
        it('No completion suggestions available on a completely empty file', () => {
            // Arrange
            const manifestContent = ``;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, NoOpContext);
        });
        it('No completion suggestions available in a partially-written resource-definition preamble', () => {
            // Arrange
            const manifestContent = `declare myresource`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, NoOpContext);
        });
        it('When partway through defining a class\'s (typed) parameters, no autocompletion assistance is available', function() {
            // Arrange
            const manifestContent = `class myclass (
                String myParam1,`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, NoOpContext);
        });
        it('When partway through defining a class\'s (untyped) parameters, no autocompletion assistance is available', function() {
            // Arrange
            const manifestContent = `class myclass (
                myParam1,`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, NoOpContext);
        });
        it('After completing the outer block\'s preamble, completion is available for resources', function() {
            // Arrange
            const manifestContent = `class myclass {`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ResourceContext);
        });
        it('After completing the outer block\'s preamble, completion is available for resources, even if followed by whitespace', function() {
            // Arrange
            const manifestContent = `class myclass { 
                \t`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ResourceContext);
        });
        it.skip('Should narrow the suggested resources based upon what has already been typed', () => {
            // Arrange
            const manifestContent = `class myclass { 
                \t service {'sshd':
                    \t en|`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ResourceContext);
            assertExpectedParameters(result, ['enabled', 'ensure']);
        });
        it.skip('Immediately after the resource type is finalised, should stop providing this assistance', () => {
            // Arrange
            const manifestContent = `class myclass { 
                \t service {`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, NoOpContext);
        });
    });

    describe('When inside a resource declaration', () => {
        it('Should not provide any autocomplete while still editing the resource preamble', function() {
            // Arrange
            const manifestContent = `class myClass {
                file { '/var/log/nginx|`;

            // Act
            const result = act(manifestContent);
            
            // Assert
             assert.instanceOf(result, NoOpContext);
        });

        it('Should list the parameters available for that resource (for a built-in Puppet type)', function() {
            // Arrange
            const manifestContent = `class myClass {
                file { '/var/log/nginx.log': |`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ParameterContext);
            assertExpectedParameters(result, ['ensure', 'mode', 'content', 'before', 'require', 'notify', 'subscribe'])
        });
        it.skip('Should list the parameters available for that resource (for a user-written class)', () => {
            throw "Test not implemented";
        });
        it.skip('Should list the parameters available for that resource (for a user-written resource)', () => {
            throw "Test not implemented";
        });
        it('Is not affected by other parameters that are assigned before or after', () => {
            // Arrange
            const manifestContent = `class myClass {
                file { '/var/log/nginx.log': 
                    ensure => absent,
                    conten|
                    force => true',`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ParameterContext);
        });
        it('Should list parameters when inserting into a closed-off declaration', () => {
            // Arrange
            const manifestContent = `class myClass {
                file { '/var/log/nginx.log': 
                    ensure => absent,
                    conten|
                }`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ParameterContext);
        });
        it.skip('Should not list parameters that have already been set within this resource declaration', function() {
            // TODO this is the one that may require searching forwards from the insertion point
            // Arrange
            const manifestContent = `class myClass {
                file { '/var/log/nginx.log': 
                    ensure => absent,|`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ParameterContext);
            const alreadyAssignedParameterInCompletionList = result.getCompletionItems().some(i => i.label == 'ensure');
            assert.isFalse(alreadyAssignedParameterInCompletionList);
        });
        it('Should suggest no completions within an unknown resource', () => {
            // Arrange
            const manifestContent = `class myClass {
                gobblydegookResource { '/var/log/nginx.log': 
                    ensure => absent,|`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, NoOpContext);
        });
    });

    describe('When assigning a value to a resource parameter (i.e. after the hash rocket =>)', () => {
        it('Should list the available values for an enum-typed param', function() {
            const manifestContent = `class myClass {
                file { '/var/log/nginx.log': 
                    ensure => |`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ParameterValueContext);
            assertExpectedParameters(result, ['present', 'absent', 'file', 'directory']);            
        });
        it('Should not attempt to provide completion for parameters that can take any value', function() {
            // Arrange
            const manifestContent = `class myClass {
                file { '/var/log/nginx.log': 
                    mode => |`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, NoOpContext);
        });
        
        describe('Should revert to parameter-completion mode once we\'ve assigned a value', function() {
            it('When that value is single-quoted', function() {
                // Arrange
                const manifestContent = `class myClass {
                    file { '/var/log/nginx.log': 
                        mode => '0777',|`;
                
                // Act
                const result = act(manifestContent);

                // Assert
                assert.instanceOf(result, ParameterContext);
                // TODO - should probably test here that the ParmeterContext is for the proper resource,
                // but that detail is not exposed by the method we're using here, would have to adapt it. 
            });

            it('When that value is double-quoted', function() {
                // Arrange
                const manifestContent = `class myClass {
                    file { '/varlog/nginx.log': 
                        mode => "0777",|`;
                
                // Act
                const result = act(manifestContent);

                // Assert
                assert.instanceOf(result, ParameterContext);
                // TODO - should probably test here that the ParmeterContext is for the proper resource,
                // but that detail is not exposed by the method we're using here, would have to adapt it. 
            });

            it('When that value is not quoted', function() {
                // Arrange
                const manifestContent = `class myClass {
                    file { '/var/log/nginx.log': 
                        ensure => file,|`;
                
                // Act
                const result = act(manifestContent);

                // Assert
                assert.instanceOf(result, ParameterContext);
                // TODO - should probably test here that the ParmeterContext is for the proper resource,
                // but that detail is not exposed by the method we're using here, would have to adapt it. 
            });

            it('When that value is a variable expression', function() {
                // Arrange
                const manifestContent = `class myClass {
                    file { '/var/log/nginx.log': 
                        content => $myFileContent,|`;
                
                // Act
                const result = act(manifestContent);

                // Assert
                assert.instanceOf(result, ParameterContext);
                // TODO - should probably test here that the ParmeterContext is for the proper resource,
                // but that detail is not exposed by the method we're using here, would have to adapt it. 
            });

            it('When that value is a variable-interpolated string', function() {
                // Arrange
                const manifestContent = `class myClass {
                    file { '/var/log/nginx.log': 
                        content => "abc $myvariable blah\${anotherVariable}",|`;
                
                // Act
                const result = act(manifestContent);

                // Assert
                assert.instanceOf(result, ParameterContext);
                // TODO - should probably test here that the ParmeterContext is for the proper resource,
                // but that detail is not exposed by the method we're using here, would have to adapt it. 
            });

            it('When that value is a function expression', function() {
                // Arrange
                const manifestContent = `class myClass {
                    file { '/var/log/nginx.log': 
                        content => epp('foo.conf.epp, $vals),|`;
                
                // Act
                const result = act(manifestContent);

                // Assert
                assert.instanceOf(result, ParameterContext);
                // TODO - should probably test here that the ParmeterContext is for the proper resource,
                // but that detail is not exposed by the method we're using here, would have to adapt it. 
            });

            it('When that value is a hash expression', function() {
                // Arrange
                const manifestContent = `class myClass {
                    acl { '/var/log/nginx.log': 
                        content => epp('foo.conf.epp, $vals),|`;
                
                // Act
                const result = act(manifestContent);

                // Assert
                assert.instanceOf(result, ParameterContext);
                // TODO - should probably test here that the ParmeterContext is for the proper resource,
                // but that detail is not exposed by the method we're using here, would have to adapt it. 
                throw "notimplemented";
            });

            it('When that value is an array expression', function() {
                // Arrange
                const manifestContent = `class myClass {
                    cron { 'cleanupTempFiles': 
                        hour => [1, 5, 10],|`;
                
                // Act
                const result = act(manifestContent);

                // Assert
                assert.instanceOf(result, ParameterContext);
                // TODO - should probably test here that the ParmeterContext is for the proper resource,
                // but that detail is not exposed by the method we're using here, would have to adapt it. 
            });

            it('When that value is a hash-array expression', function() {
                // Arrange
                const manifestContent = `class myClass {
                    acl { 'c:/iislogs/': 
                        permissions => [
                            { 'identity' => 'BUILTIN\SYSTEM', 'permissions' => ['read'', 'execute'] },
                            { 'identity' => 'BUILTIN\ADMINISTRATORS', 'permissions' => ['read', 'write'] }
                        ], `
                
                // Act
                const result = act(manifestContent);

                // Assert
                assert.instanceOf(result, ParameterContext);
                // TODO - should probably test here that the ParmeterContext is for the proper resource,
                // but that detail is not exposed by the method we're using here, would have to adapt it. 

                throw "not implemented - is there an actual example of assigning a plain hash to a parameter?";
            });
        });
    });

    describe('When in a manifest with more than one declaration', function() {
        it('Immediately after the first resource, switches into resource-completion mode to assist with the second', () => {
            // Arrange
            const manifestContent = `class m {
                file {'gg': 
                    content => 'ff', 
                    ensure => directory }
                -> |`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ResourceContext);
        });

        it('No completion suggestions available for the second resource\'s preamble', () => {
            // Arrange
            const manifestContent = `class m {
                file {'gg': 
                    content => 'ff', 
                    ensure => directory }
                ->
                service { |`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, NoOpContext);
        });

        it('Switches into parameter-completion mode when inside the second resource declaration', function () {
            // Arrange
            const manifestContent = `class m {
                file {'gg': 
                    content => 'ff', 
                    ensure => directory }
                ->
                service {'sshd': |`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ParameterContext);
        });

        it('Switches into parameter-value-completion mode after selecting a parameter in the second resource declaration', function () {
            // Arrange
            const manifestContent = `class m {
                file {'gg': 
                    content => 'ff', 
                    ensure => directory }
                ->
                service {'sshd': 
                    ensure => |`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ParameterValueContext);
        });

        it('Switches back into parameter-completion mode after assigning the parameter value in the second resource declaration', function () {
            // Arrange
            const manifestContent = `class m {
                file {'gg': 
                    content => 'ff', 
                    ensure => directory }
                ->
                service {'sshd': 
                    ensure => running, |`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ParameterContext);
        });

        it('Switches back into resource-completion mode after closing-off the second declaration', function () {
            // Arrange
            const manifestContent = `class m {
                file {'gg': 
                    content => 'ff', 
                    ensure => directory }
                ->
                service {'sshd': 
                    ensure => running, 
                }|`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ResourceContext);
        });
    });
});
