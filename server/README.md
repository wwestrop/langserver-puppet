# README

This is a language server for the [Puppet language](https://docs.puppet.com/puppet/4.10/lang_visual_index.html). It can be installed in [Visual Studio Code](https://code.visualstudio.com/), or other editors implementing the [Language Server Protocol](http://langserver.org/), such as Atom or Sublime (full list [here](http://langserver.org/#implementations-client)).

# Currently supported
* Class, parameter, and value completion for built-in Puppet types.
  * These are manually entered into the code. For custom types, parsing of the module will need to be implemented

# TODO
* Completion for include-like statements
* Completion for class pseudo-resource (resource-style class declaration) 
* Completion for searching a module path for forge modules and custom types
* If a module path does not exist, support fetching them from an R10k file
* Completion for Ruby types (I will probably never do this)
* Argument tips for functions such as `each`, `epp`, `versioncmp`, [and so forth](https://docs.puppet.com/puppet/4.10/function.html)
* Parsing the variables used in template files, and  autocompleting these in the appropriate context
* When declaring a reference to a resource in the format `ResourceType['name']`, autocompletion could provide the appropriate list of names