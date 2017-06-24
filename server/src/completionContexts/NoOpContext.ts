import { CompletionItem } from 'vscode-languageserver-types/lib/main';
import { ICompletionContext } from './ICompletionContext';

/** Completion context returned when we have no completion options to offer the user */
export class NoOpContext implements ICompletionContext {
	getCompletionItems(): CompletionItem[] {
		return [];
	}
}