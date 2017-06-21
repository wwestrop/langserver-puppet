export class ParseResult {
    public readonly currentContainer: string | null = null;
	public readonly currentResource: string | null = null;
	public readonly currentProperty: string | null = null;
    public readonly currentProperties: string[] = [];
    public readonly mode: CompletionMode | null = null;
}

export type CompletionMode = 'null' | 'parameter' | 'resource' | 'propertyValue'; //TODO: make null not-a-string (it's just handy for debugging)