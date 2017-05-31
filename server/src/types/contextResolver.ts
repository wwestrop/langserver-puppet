/** Resolves the 'context' in which an autocompletion is being requested.
 *  This means, different options will be surfaced depending what the user is doing at that point. 
 */
export class ContextResolver {

    public resolve(documentText: string, insertionPoint: number): void {
        throw "Not implemented";

        // Discard everything after the insertion point. We use the context leading
        // up to it to determine the contextually-useful options to present the user. 
    }

}