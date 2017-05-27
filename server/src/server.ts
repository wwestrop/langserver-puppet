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
let workspaceRoot: string;
connection.onInitialize((params): InitializeResult => {
	workspaceRoot = params.rootPath;
	return {
		capabilities: {
			// Tell the client that the server works in FULL text document sync mode
			textDocumentSync: documents.syncKind,
			// Tell the client that the server support code complete
			completionProvider: {
				resolveProvider: true,
				triggerCharacters: [':', '=>', '\t', ',', '\r', '\n', ' ']	// only plain chars appear to actually work
			}
		}
	}
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
	// validateTextDocument(change.document);
	console.log('hello world');
	// change.document.
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

connection.onDidChangeWatchedFiles((change) => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
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

// This handler resolve additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
	if (item.data === 1) {
		item.detail = 'TypeScript details',
		item.documentation = 'TypeScript documentation'
	} else if (item.data === 2) {
		item.detail = 'JavaScript details',
		item.documentation = 'JavaScript documentation'
	}
	return item;
});



function doLookups(): void {

}

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
	private _resource: Resource;

	/** The resource whose parameters we want to enumerate */
	public constructor(resource: Resource) {
	}

	getCompletionItems(): CompletionItem[] {

		// this._resource.properties.map(r => {
		// 	label: r.name,
		// 	kind: r.type == PuppetType.Enum ? CompletionItemKind.Enum : CompletionItemKind.Property,
		// 	detail: r.possibleValues // for enums only
		// });

		throw "Not implemented yet";
	}
}

/** The scope when we've entered a parameter, followed by a hash rocket => and want assistance on the available values */
class ParameterValueScope implements ICompletionScope {
	getCompletionItems(): CompletionItem[] {
		throw "Not implemented yet";
	}
}

interface IProperty {
	name: string;
	type: PuppetType;
	possibleValues: string[] | undefined;
}

interface IResource {
	name: string;
	properties: IProperty[];
}

class Resource {
	private _name: string;
	private _properties: Property[];

	constructor(name: string, properties: Property[]) {
		this._name = name;
		this._properties = properties;
	}

	get name(): string {
		return this._name;
	}

	get properties(): Property[] {
		return this._properties;
	}
}

class Property {
	private _name: string;
	private _type: PuppetType;
	private _possibleValues: string[] | undefined;

	// TODO: not supporting union or parameterised types except for enums (it's all quite loosely typed anyway)
	/** @param possibleValues (For enum types only) - lists the values the property can take */
	constructor(name: string, type: PuppetType, possibleValues?: string[]) {
		this._name = name;
		this._type = type;
		this._possibleValues = possibleValues;
	}

	get name(): string {
		return this._name;
	}

	get type(): PuppetType {
		return this._type;
	}

	get possibleValues(): string[] | undefined {
		return this._possibleValues;
	}
}

enum PuppetType {
	Variant,
	Boolean,
	String,
	Integer,
	Float,
	Numeric,
	Enum,
	Resource,
	Class,
	Array,
	Hash,
	Regexp,
	Undef,
	Scalar,
	Collection,
	Data,
	Pattern,
	Tuple,
	Struct,
	Optional,
	CatalogEntry,
	Type,
	Any,
	Callable
}


function parseModules(): IResource[] {
	// look at the modile path. /etc/puppetlabs/code/environments/$ENV/modules/**/*.pp or whatever
	// plus the built-in types

	let builtInResources: IResource[] = [
		{
			name: 'file',
			properties: [
			{
				name: 'ensure',
				type: PuppetType.Enum,
				possibleValues: ['file', 'directory', 'present', 'absent', 'link']
			},
			{
				name: 'content',
				type: PuppetType.String,
				possibleValues: undefined
			},
			{
				name: 'mode',
				type: PuppetType.String,
				possibleValues: undefined
			},
			{
				name: 'group',
				type: PuppetType.String,
				possibleValues: undefined
			},
			{
				name: 'owner',
				type: PuppetType.String,
				possibleValues: undefined
			},
			{
				name: 'source',	// TODO: add extra docs for this paramter (file:// http:// puppet:// etc etc)
				type: PuppetType.String,
				possibleValues: undefined
			},
			{
				name: 'target',
				type: PuppetType.String,
				possibleValues: undefined
			}]
		},
		{
			name: 'exec',
			properties: [
			{
				name: 'provider',
				type: PuppetType.Enum,
				possibleValues: ['powershell', 'posix', 'shell', 'windows']
			},
			{
				name: 'content',
				type: PuppetType.String,
				possibleValues: undefined
			},
			{
				name: 'mode',
				type: PuppetType.String,
				possibleValues: undefined
			}]
		},
		{
			name: 'package',
			properties: [
			{
				name: 'provider',
				type: PuppetType.Enum,
				possibleValues: ['apple', 'apt', 'dpkg', 'gem', 'rpm', 'windows', 'yum']
			},
			{
				name: 'ensure',
				type: PuppetType.Enum,
				possibleValues: ['present', 'installed', 'absent', 'purged', 'held', 'latest']
			},
			{
				name: 'install',
				type: PuppetType.Array,
				possibleValues: undefined
			},
			{
				name: 'reinstall_on_refresh',		// TODO extra docs about, for example default values
				type: PuppetType.Boolean,
				possibleValues: undefined
			},
			{
				name: 'source',
				type: PuppetType.String,
				possibleValues: undefined
			}]
		}
	];

	//throw "";
	return builtInResources;
}




let t: Thenable<string>;

/*
connection.onDidOpenTextDocument((params) => {
	// A text document got opened in VSCode.
	// params.textDocument.uri uniquely identifies the document. For documents store on disk this is a file URI.
	// params.textDocument.text the initial full content of the document.
	connection.console.log(`${params.textDocument.uri} opened.`);
});

connection.onDidChangeTextDocument((params) => {
	// The content of a text document did change in VSCode.
	// params.textDocument.uri uniquely identifies the document.
	// params.contentChanges describe the content changes to the document.
	connection.console.log(`${params.textDocument.uri} changed: ${JSON.stringify(params.contentChanges)}`);
});

connection.onDidCloseTextDocument((params) => {
	// A text document got closed in VSCode.
	// params.textDocument.uri uniquely identifies the document.
	connection.console.log(`${params.textDocument.uri} closed.`);
});
*/

// Listen on the connection
connection.listen();