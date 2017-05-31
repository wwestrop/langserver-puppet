/* --------------------------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License. See License.txt in the project root for license information.
* ------------------------------------------------------------------------------------------ */
'use strict';

import {
	IPCMessageReader, IPCMessageWriter,
	createConnection, IConnection, TextDocumentSyncKind,
	TextDocuments, TextDocument, Diagnostic, DiagnosticSeverity,
	InitializeParams, InitializeResult, TextDocumentPositionParams,
	CompletionItem, CompletionItemKind
} from 'vscode-languageserver';

import { IResource } from './types/IResource'
import { IProperty } from './types/IProperty'
import { PuppetType } from './types/PuppetType'


// Create a connection for the server. The connection uses Node's IPC as a transport
let connection: IConnection = createConnection(new IPCMessageReader(process), new IPCMessageWriter(process));

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// After the server has started the client sends an initialize request. The server receives
// in the passed params the rootPath of the workspace plus the client capabilities. 
// let workspaceRoot: string;
connection.onInitialize((params): InitializeResult => {
	// workspaceRoot = params.rootPath;
	return {
		capabilities: {
			// Tell the client that the server works in FULL text document sync mode
			textDocumentSync: documents.syncKind,
			// Tell the client that the server support code complete
			completionProvider: {
				resolveProvider: false,
				triggerCharacters: [':', '=>', '\t', ',', '\r', '\n', ' ']	// only plain chars appear to actually work
			}
		}
	}
});

// The settings interface describe the server relevant settings part
interface Settings {
	languageServerExample: ExampleSettings;
}

// These are the example settings we defined in the client's package.json
// file
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// hold the maxNumberOfProblems setting
let maxNumberOfProblems: number;
// The settings have changed. Is send on server activation
// as well.
connection.onDidChangeConfiguration((change) => {
	let settings = <Settings>change.settings;
	maxNumberOfProblems = settings.languageServerExample.maxNumberOfProblems || 100;
	// Revalidate any open text documents
	// documents.all().forEach(this.document = textDocument.getText(););
});

// This handler provides the initial list of the completion items.
connection.onCompletion((textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {

	// This is a naive parser, rather than re-parsing on every change, the way it works is basically this:
	// From the current text entry point, walk back until we see what looks like:
	// 		An include statement (autoprovide the list of available modules/classes)
	// 		A closing brace } or the delcaration of the type - which indicates autocomplete list of types
	//
	// For parameter completion:
	//		A resource declaration. Then we look up in $modulesDir for that type, presumably we must parse the whole lot
	//		Presumably, some built-in types don't have source available
	//
	// Since the document being edited isn't necessarily in a compilable state, we can't just write a regular parser for it
	// It's not complete. This is an enterprise product. If they can't develop tools for it, why should I

	// The pass parameter contains the position of the text document in 
	// which code complete got requested. For the example we ignore this
	// info and always provide the same completion items.
	return [
		{
			label: 'ensure',
			kind: CompletionItemKind.Enum,
			documentation: 'present | absent | purged | file | directory | stopped | started',
			data: null
		},
		{
			label: 'provider',
			kind: CompletionItemKind.Enum,
			documentation: 'cmd | powershell | bash | yum | rpm | apt',
			data: null
		},
		{
			label: 'TypeScript',
			kind: CompletionItemKind.Text,
			data: 1
		},
		{
			label: 'JavaScript',
			kind: CompletionItemKind.Text,
			data: 2
		}
	]
});


/** Reads backwards from the current insertion point to determine what "scope" the editor is in,
 *  and hence what information the user will want available for autocompleting. 
 */
function getScope(): ICompletionScope {
	throw "Not implemented";
}

interface ICompletionScope {
	getCompletionItems(): CompletionItem[];
}

/** The top level of a file where we enter our resources, we want autocompletion on the available resources */
class ResourceScope implements ICompletionScope {
	// The same autocompleteable members might apply after an "include " statement or similar

	getCompletionItems(): CompletionItem[] {
		throw "Not implemented yet";
	}
}

/** When we're inside a resource declaration, and we want autocompletion on the list of possible parameters */
class ParameterScope implements ICompletionScope {

	getCompletionItems(): CompletionItem[] {

		// this._resource.properties.map(r => {
		// 	label: r.name,
		// 	kind: r.type == PuppetType.Enum ? CompletionItemKind.Enum : CompletionItemKind.Property,
		// 	detail: r.possibleValues // for enums only
		// });

		throw "Not implemented yet";
	}
}

/** The scope when we've entered a parameter, followed by a hash rocket => and want assistance on the available values (in the case of an enum) */
class ParameterValueScope implements ICompletionScope {

	constructor(private readonly alreadyAssignedParams: IProperty[]) {
	}

	getCompletionItems(): CompletionItem[] {
		throw "Not implemented yet";
	}
}



// Listen on the connection
connection.listen();