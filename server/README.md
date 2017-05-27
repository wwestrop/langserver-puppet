# README

This is a language server for the [Puppet language](https://docs.puppet.com/puppet/4.10/lang_visual_index.html). It can be installed in [Visual Studio Code](https://code.visualstudio.com/), or other editors implementing the [Language Server Protocol](http://langserver.org/), such as Atom or Sublime (full list [here](http://langserver.org/#implementations-client)).

# Currently supported
* Class, parameter, and value completion for built-in Puppet types

# TODO
* Completion for include-like statements
* Completion for class pseudo-resource (resource-style class declaration) 
* Completion for searching a module path for forge modules and custom types
* If a module path does not exist, support fetching them from an R10k file
* Ruby types (I will probably never do this)