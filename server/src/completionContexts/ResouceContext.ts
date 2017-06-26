import { CompletionItem, CompletionItemKind } from 'vscode-languageserver-types/lib/main';
import { IResource } from '../types/IResource';
import { ICompletionContext } from './ICompletionContext';


/** The top level of a file where we enter our resources, we want autocompletion on the available resources */
export class ResourceContext implements ICompletionContext {
	// TODO The same autocompleteable members might apply after an "include " statement or similar

	/** @param resources All resources that should be listed for auto-completion */
	public constructor(private readonly allResources: IResource[]) {
	}

	public getCompletionItems(): CompletionItem[] {

		var completions = this.allResources
			.map(p => { 
				return {
					label: p.name,
					kind: CompletionItemKind.Class,
					documentation: p.description,
				}
			});

		return completions;
	}
}