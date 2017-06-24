import { CompletionItem, CompletionItemKind } from 'vscode-languageserver-types/lib/main';
import BuiltInResources from '../consts/builtInResources';
import { ICompletionContext } from './ICompletionContext';


/** The top level of a file where we enter our resources, we want autocompletion on the available resources */
export class ResourceContext implements ICompletionContext {
	// The same autocompleteable members might apply after an "include " statement or similar

	public getCompletionItems(): CompletionItem[] {

		var completions = BuiltInResources
			.map(p => { 
				return {
					label: p.name,
					kind: CompletionItemKind.Class,
				}
			});

		return completions;
	}
}