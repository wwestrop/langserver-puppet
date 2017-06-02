import { parse } from 'path';
import { PuppetType } from './PuppetType';
import { IProperty } from './IProperty';
import { ICompletionContext, NoOpContext, ParameterContext } from '../completionContexts/ICompletionContext';
/** Resolves the 'context' in which an autocompletion is being requested.
 *  This means, different options will be surfaced depending what the user is doing at that point. 
 */
export class ContextResolver {

    private readonly _builtInResourceProperties: Map<string, IProperty[]>;

    constructor() {
        // TODO store this somewhere else, and make it static or something. It's fixed, I don't want to be initialising it all the time
        this._builtInResourceProperties = new Map<string, IProperty[]>();
        this._builtInResourceProperties.set('file', [
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
        ]);
        this._builtInResourceProperties.set('service', [
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
        ]);
        this._builtInResourceProperties.set('package', [
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
        ]);
    }

    public resolve(documentText: string, insertionPoint: number): ICompletionContext {

        // Match all the regexes, then pick the shortest result (as that's the one closeset to the cursor/end-of-line/^) ?????
        // If none match, fall back to the "no completion results available" context 

        var documentUpToCaret = documentText.substring(0, insertionPoint);


        const variable = /\$[a-zA-Z0-9]/;

        // TODO even the simplest regex is already getting a bit hairy. Maybe a full-blown parser
        // is overkill, perhaps consider a primitive tokeniser, we can inspect the last few tokens to determine the context?
        const classRegex = /class\s+\{\s+['"][a-z][a-z0-9_]*['"]\s*:\s*/;  // <--- list class parameters (That have not already been entered into the manifest)

        const resourceParameterContext = /\b([a-z][a-z0-9_]*)\s*\{\s*.+?:\s*?$/;    // TODO linter warning on uppercase (as puppet silently fails)
        var result = resourceParameterContext.exec(documentUpToCaret);
        if(result) {
            const resourceName = result[1];

            // Look up if it's a built-in type
            const resourcePropertyInfo = this._builtInResourceProperties.get(resourceName);
            if(resourcePropertyInfo) {
                return new ParameterContext(resourcePropertyInfo);
            }

            // If not...... Do something to figure out the auto-complete data for that resource (look up and parse the file, e.g.)
        }

        return new NoOpContext();

        // Discard everything after the insertion point. We use the context leading
        // up to it to determine the contextually-useful options to present the user. 
    }

}