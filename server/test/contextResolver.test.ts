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
        it('Should switch into resource-completion mode after the preamble is finished', function() {
            // Arrange
            const manifestContent = `declare myresource {`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ResourceContext);
        });
        it('Should switch into the next mode after the opening brace even if followed by a newline/additional whitespace', function() {
            // Arrange
            const manifestContent = `declare myresource {
                \t`;

            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ResourceContext);
        });

        // TODO: DITTO ALL OF THE ABOVE FOR CLASS DEFINITIONS (also goes for parameterised classes)

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
        it('After defining a parameterised class\'s parameters, then we switch into resource-declaration-mode', function() {
            // Arrange
            const manifestContent = `class myclass (
                myParam1,
                myParam2,
            ){`;
            
            // Act
            const result = act(manifestContent);

            // Assert
            assert.instanceOf(result, ResourceContext);
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
        it('Should list the parameters available for that resource (for a user-written class)', () => {
            throw "Test not implemented";
        });
        it('Should list the parameters available for that resource (for a user-written resource)', () => {
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
        it('Should not list parameters that have already been set within this resource declaration', function() {
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
            throw "Not implemented";
            
        });
        it('Should provide no help for parameters where we cannot know their value in advance, other than their type', function() {
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

    describe('When inside a nested block scope (e.g. `if` or `unless`)', () => {
        it('TEST 2', function() {
            // BASICALLY, ALL THE ABOVE TESTS SHOULD STILL WORK
            
            throw "Test not implemented";
        });
    });
});


/*
1] When starting an empty manifest
    Initial completionContext = none available
    Within the declaration of the class/resource (the preamble/naming (can't call "declaration""), before the opening brace)

2] After completing the resource preamble, within the top level braces
    ...
    ...
    ...
    ...
    ...
    Refer to paper, this isn't completely copied/fleshed-out

3] With the bracebrackets of a declared resource (or `class` pseudo-resource)
    Completion context = parameter-completion-mode
    The context is parameterised with the resource type (not strictly required for completion, but it tells us if we've got it right for testing)
    The context is parameterised with the params already set, so they can be excluded from the autocomplete list (TODO MAY REQUIRE SEARCHING **FORWARD** IN THE FILE, IN CONTRAST TO EVERYTHING ELSE WHICH ONLY CONSIDERS BEFORE THE INSERTION POINT)


7] Isn't confused by additional levels of block scope (if, unless)
    While declaring an if block -> completionContext = no-help-available
    After declaring an if block -> ctxt = resource-declaration-mode
    While setting a resource's params inside an if block -> ctxt = 
    While setting value of a resource's params inside an if block -> ctxt =
    Ditto the last two for the *second* resource in an if block
    After terminating an if block with } -> ctxt = top-level-resource-declaration-mode
    Nested ifs
    elsif, and else blocks are similarly unfased

 */