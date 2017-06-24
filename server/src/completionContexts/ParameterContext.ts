import { CompletionItem, CompletionItemKind } from 'vscode-languageserver-types/lib/main';
import { IResource } from '../types/IResource';
import { ICompletionContext } from './ICompletionContext';


/** When we're inside a resource declaration, and we want autocompletion on the list of possible parameters */
export class ParameterContext implements ICompletionContext {

	/** @param allProperties Every property exposed by this resource
	 */
	constructor(public readonly resource: IResource) {

	}

	public getCompletionItems(): CompletionItem[] {
		var completions = this.resource.properties
			.map(p => { 
				return {
					label: p.name,
					kind: p.type === 'Enum' ? CompletionItemKind.Enum : CompletionItemKind.Property,
					detail: p.possibleValues ? p.possibleValues.join(' | ') : undefined, // TODO for enums only, tidy up
				}
			});

		return completions;
	}
}