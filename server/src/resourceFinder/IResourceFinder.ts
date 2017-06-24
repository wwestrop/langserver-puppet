import { IResource } from "../types/IResource";


/** This type determines the list of possible types available to be used in a Puppet manifest.
 *  These are displayed to the user as a auto-completable list in the appropriate context.  */
export interface IResourceFinder {
    findAllResources(): IResource[];
    findResource(name: string): IResource | null;
}