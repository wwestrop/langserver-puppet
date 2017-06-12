import { PuppetType } from '../types/PuppetType';
import { IProperty } from '../types/IProperty';
import { CompletionItem, CompletionItemKind } from 'vscode-languageserver-types/lib/main';

export interface ICompletionContext {
	getCompletionItems(): CompletionItem[];
}

/** The top level of a file where we enter our resources, we want autocompletion on the available resources */
export class ResourceContext implements ICompletionContext {
	// The same autocompleteable members might apply after an "include " statement or similar

	public getCompletionItems(): CompletionItem[] {
		throw "Not implemented yet";
	}
}

/** When we're inside a resource declaration, and we want autocompletion on the list of possible parameters */
export class ParameterContext implements ICompletionContext {

	/** @param allProperties Every property exposed by this resource
	 */
	constructor(public readonly allProperties: IProperty[]) {
	}

	public getCompletionItems(): CompletionItem[] {
		var completions = this.allProperties.map(p => { 
			return {
				label: p.name,
				kind: p.type === PuppetType.Enum ? CompletionItemKind.Enum : CompletionItemKind.Property,
				detail: p.possibleValues ? p.possibleValues.join(' | ') : undefined, // TODO for enums only, tidy up
			}
		});

		return completions;
	}
}

// /** The Context when we've entered a parameter, followed by a hash rocket => and want assistance on the available values (in the case of an enum) */
// export class ParameterValueContext implements ICompletionContext {

// 	constructor(private readonly alreadyAssignedParams: IProperty[]) {
// 	}

// 	getCompletionItems(): CompletionItem[] {
// 		throw "Not implemented yet";
// 	}
// }

/** Completion context returned when we have no completion options to offer the user */
export class NoOpContext implements ICompletionContext {
	getCompletionItems(): CompletionItem[] {
		return [];
	}
}