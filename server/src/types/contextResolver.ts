import { ICompletionContext } from '../completionContexts/ICompletionContext';
/** Resolves the 'context' in which an autocompletion is being requested.
 *  This means, different options will be surfaced depending what the user is doing at that point. 
 */
export class ContextResolver {

    public resolve(documentText: string, insertionPoint: number): ICompletionContext {

        // Match all the regexes, then pick the shortest result (as that's the one closeset to the cursor/end-of-line/^) ?????
        // If none match, fall back to the "no completion results available" context 



        var documentUpToCaret = documentText.substring(0, insertionPoint);


        const variable = '$[a-zA-Z0-9]';

        const classRegex = /class\s+\{['"][a-z][a-z0-9_]*['"]\s*:\s*/;  // <--- list class parameters (That have not already been entered into the manifest)

        const regex = /([a-z][a-z0-9_]*)\s*{\s*.+:\s*$/;    // TODO linter warning on uppercase (as puppet silently fails)
        var result = regex.exec(documentUpToCaret);
        if(result) {
            // result[0].
        }

        throw "Not implemented";

        // Discard everything after the insertion point. We use the context leading
        // up to it to determine the contextually-useful options to present the user. 
    }

}