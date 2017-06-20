import { IResource } from './IResource';
import { PuppetType } from './PuppetType';
import {
    ICompletionContext,
    NoOpContext,
    ParameterContext,
    ResourceContext
} from '../completionContexts/ICompletionContext';
import * as Parser from '../parser/parser';

/** Resolves the 'context' in which an autocompletion is being requested.
 *  This means, different options will be surfaced depending what the user is doing at that point. 
 */
export class ContextResolver {

    private readonly _builtInResources: IResource[];

    constructor() {
        // TODO store this somewhere else, and make it static or something. It's fixed, I don't want to be initialising it all the time
        this._builtInResources = [
            {
                name: 'package',
                properties: [
                    {
                        name: 'ensure', 
                        type: PuppetType.Enum,
                        possibleValues:  ['present', 'absent', 'purged', 'held', 'latest']
                    }, 
                    {
                        name: 'provider', 
                        type: PuppetType.Enum,
                        possibleValues: ['apple', 'yum', 'rpm', 'apt', 'windows']
                    },
                    {
                        name: 'install_options', 
                        type: PuppetType.Array,
                        possibleValues: undefined
                    },
                    {
                        name: 'source', 
                        type: PuppetType.String,
                        possibleValues: undefined
                    }
                ]
            },
            {
                name: 'service',
                properties: [
                    {
                        name: 'ensure', 
                        type: PuppetType.Enum,
                        possibleValues: ['stopped', 'running']
                    }, 
                    {
                        name: 'enable', 
                        type: PuppetType.Enum,
                        possibleValues: ['true', 'false', 'manual', 'mask']
                    }
                ]
            },
            {
                name: 'file',
                properties: [
                    {
                        name: 'ensure', 
                        type: PuppetType.Enum,
                        possibleValues: ['present', 'absent', 'file', 'directory']
                    }, 
                    {
                        name: 'content', 
                        type: PuppetType.String,
                        possibleValues: undefined,
                    },
                    {
                        name: 'mode', 
                        type: PuppetType.String,
                        possibleValues: undefined
                    }
                ]
            }
        ];
    }

    public resolve(documentText: string, insertionPoint: number): ICompletionContext {

        const documentUpToCaret = documentText.substring(0, insertionPoint);

        const parseOutput: any = {};
        try {
            Parser.parse(documentUpToCaret, parseOutput);
        }
        catch (SyntaxError) {
            // Don't care. While the user is in the middle of making modifications, 
            // it's entirely likely that the file will not be in a fully parseable state.
            // However, as the file is being parsed, it still outputs useful bits of context.
        }

        // Most specific "context mode" first
        if (parseOutput.currentProperty) {
            // Look up the type information about the parameter being entered
            const resInfo = this._builtInResources
                .find(r => r.name == Parser.currentResource);
            if(!resInfo) throw "oh noes";
            const parmInfo = resInfo.properties.find(p => p.name == Parser.currentProperty);
            if(!parmInfo) throw "oh noes";

            if (parmInfo.type === PuppetType.Enum) {
                // Provide assistance
                throw "Not implemented";
            }
            else {
                return new NoOpContext();
            }
        }
        else if (parseOutput.currentResource) {
            // Look up the type information about the parameters available on this resource
            const resInfo = this._builtInResources
                .find(r => r.name == parseOutput.currentResource);
            if(!resInfo) throw "oh noes";

            return new ParameterContext(resInfo);
        }
        else if (parseOutput.currentContainer) {
            return new ResourceContext();
        }
        else {
            return new NoOpContext();
        }
    }
}