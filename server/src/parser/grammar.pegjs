{
	let currentResource = null;
	let currentProperty = null;
    let currentProperties = [];
}

TopLevelContainer =
	TopLevelContainerType Whitespace Identifier Whitespace OptionalTopLevelArgumentList Whitespace '{' Whitespace ManifestContent Whitespace '}' Whitespace

TopLevelContainerType =
	'class'
    / 'resource'
   
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

DeclarationPreamble =
	type:Identifier Whitespace '{' Whitespace title:Title Whitespace
    {
    	currentResource = {type: type, title: title};
        console.log('saw declaration for ' + currentResource.type + ' / ' + currentResource.title);
        return currentResource;
    }
    
DeclarationBody =
	PropertyAssignmentList

PropertyAssignmentList =
	PropertyAssignment Whitespace ',' Whitespace PropertyAssignmentList /
    PropertyAssignment Whitespace ','? /
    Whitespace

PropertyAssignment = 
	parameter:PropertyAssignmentPreamble Whitespace value:PropertyAssignmentValue
    {
        let assignment = { parameter: parameter, value: value };
		console.log('returned assignement ' + parameter + ' <- ' + value);
        currentProperties.push(assignment);
        return assignment;
    }
    
PropertyAssignmentPreamble =
	parameter:Identifier Whitespace '=>'
    {
    	currentProperty = parameter;
    	console.log('in context of parameter ' + parameter);
        return parameter;
    }

PropertyAssignmentValue =
	value:Expr
    {
    	console.log('assigning value of ' + value + ' (ends parameter context of ' + currentProperty + ')');
        currentProperty = null;
    	return value;
    }
    
DeclarationEnd = 
	'}'
    {
    	console.log('ending declaration for ' + currentResource.type + ' / ' + currentResource.title);
    	currentResource = null;
        currentProperties = [];
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
    // Hash expression

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
    '\"' value:[^']* '\"'
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