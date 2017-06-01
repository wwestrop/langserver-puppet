import { CompletionItem } from 'vscode-languageserver-types/lib/main';

export interface ICompletionContext {
	getCompletionItems(): CompletionItem[];
}

/** The top level of a file where we enter our resources, we want autocompletion on the available resources */
export class ResourceContext implements ICompletionContext {
	// The same autocompleteable members might apply after an "include " statement or similar

	getCompletionItems(): CompletionItem[] {
		throw "Not implemented yet";
	}
}

/** When we're inside a resource declaration, and we want autocompletion on the list of possible parameters */
export class ParameterContext implements ICompletionContext {

	getCompletionItems(): CompletionItem[] {

		// this._resource.properties.map(r => {
		// 	label: r.name,
		// 	kind: r.type == PuppetType.Enum ? CompletionItemKind.Enum : CompletionItemKind.Property,
		// 	detail: r.possibleValues // for enums only
		// });

		throw "Not implemented yet";
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