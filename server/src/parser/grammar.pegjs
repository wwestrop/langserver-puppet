{
    options.currentContainer = null;
	options.currentResource = null;
	options.currentProperty = null;
    options.currentProperties = [];
    options.mode = 'null';

    const debugMode = false;
    const debug = {
        log: function(message) {
            "use strict";

            if (console && debugMode) {
                console.log(message);
            }
        },
        logMode: function() {
            "use strict";
            debug.log(options.mode);
        }
    };
}

TopLevelContainer =
	TopLevelContainerStart Whitespace ManifestContent Whitespace TopLevelContainerEnd Whitespace

TopLevelContainerType =
	'class'
    / 'resource'

TopLevelContainerStart = 
	containerType:TopLevelContainerType Whitespace id:Identifier Whitespace OptionalTopLevelArgumentList Whitespace '{'
	{
        options.mode = 'resource';
        debug.logMode();
        options.currentContainer = id;
    	// console.debug('>> Begin top level container (' + containerType + ' : ' + id + ')');
    }
TopLevelContainerEnd =
	'}'
    {
        options.mode = 'null';
        debug.logMode();
        options.currentContainer = null;
        options.currentResource = null;
        options.currentProperty = null;
    	// console.debug('<< End top level container');
    }
   
OptionalTopLevelArgumentList =
    '(' TopLevelArgumentList ')'
    / ''
    
TopLevelArgumentList =
    TopLevelArgument Whitespace ',' Whitespace TopLevelArgumentList
    / TopLevelArgument

TopLevelArgument =
	Identifier Whitespace Identifier
    / Identifier

ManifestContent = 
	Declaration Whitespace DeclarationConnector Whitespace ManifestContent
    / Declaration

DeclarationConnector =
	'->'
    / '~>'
    / '<-'
    / '<~'
    / ''

Declaration =
	DeclarationPreamble Whitespace DeclarationBody Whitespace DeclarationEnd
    {
        options.mode = 'resource';
        debug.logMode();
    }

DeclarationPreamble =
	type:Identifier DelcarationNameEnd Whitespace title:Title
    {
    	options.currentResource = type === 'class' ? title : type;
        // console.debug('saw declaration for ' + options.currentResource);

        options.mode = 'parameter';
        debug.logMode();

        return options.currentResource;
    }

DelcarationNameEnd = 
    Whitespace '{' // TODO: I would *like* for resource-completion mode to end as soon as the whitespace is typed, but that can be zero length. I've tried making a mandatory variant, but am having no luck. A tokenizer wouldn't help in this scenario either.
    {
        options.mode = 'null';
        options.currentProperty = null;
        debug.logMode();
    }
    
DeclarationBody =
	PropertyAssignmentList

PropertyAssignmentList =
	PropertyAssignment Whitespace PropertyAssignmentEnd Whitespace PropertyAssignmentList /
    PropertyAssignment Whitespace ','? /
    Whitespace

PropertyAssignment = 
	parameter:PropertyAssignmentPreamble Whitespace value:Expr
    {
        let assignment = { parameter: parameter, value: value };
        options.currentProperties.push(assignment);
        return assignment;
    }

PropertyAssignmentEnd = 
    ','
    {
        options.currentProperty = null;
        options.mode = 'parameter';
        debug.logMode();
    }
    
PropertyAssignmentPreamble =
	parameter:Identifier Whitespace '=>'
    {
    	options.currentProperty = parameter;
        options.mode = 'propertyValue';
        debug.logMode();
    	// console.debug('in context of parameter ' + parameter);
        return parameter;
    }
    
DeclarationEnd = 
	'}'
    {
    	// console.debug('ending declaration for ' + options.currentResource);
    	options.currentResource = null;
        options.currentProperties = [];
        options.currentProperty = null;
    }

Identifier =
	([a-z][a-zA-Z0-9_]*)
    {
    	return text();
    }

Title =
	value:StringExpr Whitespace ':'
    {
    	return value;
    }

Expr = 
	FuncExpr /
	StringExpr /
    Identifier
    // TODO: Hash expression

FuncExpr =
	Identifier Whitespace '(' Whitespace FuncParamList Whitespace ')'
    {
    	return text();
    }

FuncParamList =
	Expr Whitespace ',' Whitespace FuncParamList /
    Expr /
    Whitespace // TODO allows for trailing comma, does Puppet allow that in a func call?

UnquotedStringExpression =	// Used for enum values, strictly they are strings to Puppet and could be quoted  
    value:[a-zA-Z0-9_]+
    {
    	return value.join('');
    }

DblQuotStringExpression = 
    '\"' value:[^"]* '\"'
    {
    	return value.join('');
    }
    
SngQuotStringExpression = 
    '\'' value:[^']* '\''
    {
    	return value.join('');
    }
    
StringExpr = 
	SngQuotStringExpression /
    DblQuotStringExpression /
    Variable /
    UnquotedStringExpression
    
Variable = 
	'$' name:Identifier
    {
    	return name;
    }

Whitespace =
	[ \t\n\r]*
    {
    	return null;
    }