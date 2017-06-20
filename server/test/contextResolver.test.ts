import { resolve } from 'dns';
import {
    ICompletionContext,
    NoOpContext,
    ParameterContext,
    ParameterValueContext,
    ResourceContext
} from '../src/completionContexts/ICompletionContext';
import { ContextResolver } from '../src/types/ContextResolver'

import { assert } from 'chai';
import 'mocha';

describe('Resolving the auto-completion context', () => {

    let sut: ContextResolver;

    beforeEach(() => {
        sut = new ContextResolver();
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
            assertExpectedParameters(result, ['ensure', 'mode', 'content'])
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
    });
});
