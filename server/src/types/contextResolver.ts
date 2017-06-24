import { ParseResult } from '../parser/parseResult';
import { IResource } from './IResource';
import { PuppetType } from './puppetType';
import { ICompletionContext } from '../completionContexts/ICompletionContext';
import * as Parser from '../parser/parser';
import BuiltInResources from '../consts/builtInResources'
import { ParameterContext } from "../completionContexts/ParameterContext";
import { ParameterValueContext } from "../completionContexts/ParameterValueContext";
import { ResourceContext } from "../completionContexts/ResouceContext";
import { NoOpContext } from "../completionContexts/NoOpContext";


/** Resolves the 'context' in which an autocompletion is being requested.
 *  This means, different options will be surfaced depending what the user is doing at that point. 
 */
export class ContextResolver {

    public resolve(documentText: string, insertionPoint: number): ICompletionContext {

        const documentUpToCaret = documentText.substring(0, insertionPoint);

        const parseOutput = new ParseResult();
        try {
            Parser.parse(documentUpToCaret, parseOutput);
        }
        catch (e) {
            if (e instanceof Parser.SyntaxError) {
                // Don't care. While the user is in the middle of making modifications, 
                // it's entirely likely that the file will not be in a fully parseable state.
                // However, as the file is being parsed, it still outputs useful bits of context.
            }
            else {
                // Parser error
                throw e;
            }
        }

        // Most specific "context mode" first
        if (parseOutput.mode === 'propertyValue') {
            // Look up the type information about the parameter being entered

            if(!parseOutput.currentResource) throw "This scenario shouldn't arise";
            const resInfo = this.findTypeInfo(parseOutput.currentResource);

            if (resInfo) {
                const parmInfo = resInfo.properties.find(p => p.name == parseOutput.currentProperty);
                if (parmInfo && parmInfo.type === 'Enum') {
                    // Provide assistance
                    if (!parmInfo.possibleValues) throw "This scenario should not arise";
                    return new ParameterValueContext(parmInfo.possibleValues);
                }
            }
        }
        else if (parseOutput.mode === 'parameter') {
            // Look up the type information about the parameters available on this resource
            if(!parseOutput.currentResource) throw "This scenario shouldn't arise";
            const resInfo = this.findTypeInfo(parseOutput.currentResource);

            if(resInfo) {
                return new ParameterContext(resInfo);
            }
        }
        else if (parseOutput.mode === 'resource') {
            return new ResourceContext();
        }

        return new NoOpContext();
    }

    private findTypeInfo(resourceName: string): IResource | null {

        // Search the Puppet built-in types
        const typeInfo = BuiltInResources.find(r => r.name === resourceName);
        if(typeInfo) {
            return typeInfo;
        }

        // TODO: Search....
        //         The current directory/tree?
        //         Some user-configured module path?
        //         An R10K file?
        //         Puppet Forge?
        //         Some other module repository?

        // No matching resource found
        return null;
    }
}