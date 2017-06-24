import { CompletionItem, CompletionItemKind } from 'vscode-languageserver-types/lib/main';
import { ICompletionContext } from './ICompletionContext';


/** The Context when we've entered a parameter, followed by a hash rocket => and want assistance 
 *  on the available values (in the case of an enum) */
export class ParameterValueContext implements ICompletionContext {
	
	constructor(private readonly possibleValues: string[]) {
	}

	getCompletionItems(): CompletionItem[] {
		var completions = this.possibleValues
			.map(p => { 
				return {
					label: p,
					kind: CompletionItemKind.Enum
				}
			});

		return completions;
	}
}