import { CompletionItem } from 'vscode-languageserver-types/lib/main';

export interface ICompletionContext {
	getCompletionItems(): CompletionItem[];
}