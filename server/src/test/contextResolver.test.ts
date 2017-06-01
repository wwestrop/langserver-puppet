import { ParameterContext } from '../completionContexts/ICompletionContext';

import { ContextResolver } from '../types/ContextResolver'
// const should = require('should');

describe('Resolving the auto-completion context', () => {

    let sut: ContextResolver;

    beforeEach(() => {
        sut = new ContextResolver();
    });

    describe('When beginning a new manifest', () => {
        it('Should work with an empty file', () => {
            const manifestContent = ``;
            throw "Test not implemented";
        });
        it('Should work with a partially-written resource-definition preamble', () => {
            const manifestContent = `declare myresource`;
            throw "Test not implemented";
        });
        it('Should switch into the next mode after the opening brace', function() {
            const manifestContent = `declare myresource {`;
            throw "Test not implemented";
        });
        it('Should switch into the next mode after the opening brace even if followed by a newline/additional whitespace', function() {
            const manifestContent = `declare myresource {
                \t`;
            throw "Test not implemented";
        });

        // TODO: DITTO ALL OF THE ABOVE FOR CLASS DEFINITIONS (also goes for parameterised classes)

        it('When partway through defining a class\'s (typed) parameters, no autocompletion assistance is available', function() {
            const manifestContent = `class myclass (
                String myParam1,`;
            throw "Test not implemented";
        });
        it('When partway through defining a class\'s (untyped) parameters, no autocompletion assistance is available', function() {
            const manifestContent = `class myclass (
                myParam1,`;
            throw "Test not implemented";
        });
        it('After defining a parameterised class\'s parameters, then we switch into resource-declaration-mode', function() {
            const manifestContent = `class myclass (
                myParam1,
                myParam2,
            ){`;
            throw "Test not implemented";
        });
    });

    // covered by the above
    // describe('When inside the top-level of a manifest, after the initial definition', () => {
    //     it('Should be in resource declaration mode', function() {
    //         const manifestContent = ``;
    //         throw "Test not implemented";
    //     });
    // });

    describe('When inside a resource declaration', () => {
        it('WHEN WE HAVEN\'T FINISHED THE RESOURCE PREABMLE SO TECHNICALLY ARE NOT IN THE RESOURCE DECLARATION - RE-WORD THE DESCRIBE BLOCK', function() {
            const manifestContent = `declare myresource {
                file { '/var/log/nginx`;
            throw "Test not implemented";
        });
        it('Should list the parameters available for that resource', function() {
            const manifestContent = `declare myresource {
                file { '/var/log/nginx.log': `;
            
            const result = sut.resolve(manifestContent, 12);
            const w5 = <any>result instanceof ParameterContext;

            throw "Test not implemented";
        });
        it('Should not list parameters that have already been set within this resource declaration', function() {
            // TODO this is the one that may require searching forwards from the insertion point
            const manifestContent = `declare myresource {
                file { '/var/log/nginx.log': 
                    ensure => absent,`;
            throw "Test not implemented";
        });
        it('EVEN WITH WHITESPACE!!!!!!!!!!!!!! TODO *********** Should not list parameters that have already been set within this resource declaration', function() {
            // TODO this is the one that may require searching forwards from the insertion point
            const manifestContent = `declare myresource {
                file { '/var/log/nginx.log': 
                    ensure => absent,
                    `;
            throw "Test not implemented";
        });
    });

    describe('When assigning a value to a resource paramter (i.e. after the hash rocket =>)', () => {
        it('Should list the available values for an enum-typed param', function() {
            const manifestContent = `declare myresource {
                file { '/var/log/nginx.log': 
                    ensure => `;
            throw "Test not implemented";
        });
        it('Should provide no help for parameters where we cannot know their value in advance, other than their type', function() {
            const manifestContent = `declare myresource {
                file { '/var/log/nginx.log': 
                    mode => `;
            throw "Test not implemented";
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