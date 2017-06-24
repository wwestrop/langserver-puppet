import BuiltInResources from '../consts/builtInResources.generated';
import { IResource } from '../types/IResource';
import { IResourceFinder } from './IResourceFinder';


export class DefaultResourceFinder implements IResourceFinder {

    public findAllResources(): IResource[] {
        // Search the Puppet built-in types
        return BuiltInResources;

        // TODO: Search....
        //         The current directory/tree?
        //         Some user-configured module path?
        //         An R10K file?
        //         Puppet Forge?
        //         Some other module repository?
    }

    public findResource(name: string): IResource | null {
        // Search the Puppet built-in types
        return BuiltInResources.find(r => r.name === name) || null;

        // TODO: Search also....
        //         The current directory/tree?
        //         Some user-configured module path?
        //         An R10K file?
        //         Puppet Forge?
        //         Some other module repository?

        // No matching resource found
    }

}