import { CompletionItem, CompletionItemKind } from 'vscode-languageserver-types/lib/main';
import Metaparameters from '../consts/metaparameters';
import { IResource } from '../types/IResource';
import { ICompletionContext } from './ICompletionContext';


/** When we're inside a resource declaration, and we want autocompletion on the list of possible parameters */
export class ParameterContext implements ICompletionContext {

	private readonly parameterCompletionItems: CompletionItem[];

	/** @param resource The resource to provide paramter completion for */
	constructor(public readonly resource: IResource) {

		// The resource's real parameters
		var completions = this.resource.properties
			.map(p => { 
				return {
					label: p.name,
					kind: p.type === 'Enum' ? CompletionItemKind.Enum : CompletionItemKind.Property,
					detail: p.possibleValues ? p.possibleValues.join(' | ') : undefined, // TODO for enums only, tidy up
				}
			});

		// Puppet built-in "Metaparameters"
		var metaparamCompletions = Metaparameters
			.map(p => {
				return {
					label: p,
					kind: CompletionItemKind.Reference,
				}
			});

		this.parameterCompletionItems = [ ...metaparamCompletions, ...completions ].sort();
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

		return this.parameterCompletionItems;
	}
}