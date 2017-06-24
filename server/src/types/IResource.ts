import {IProperty} from './IProperty'

export interface IResource {
    name: string;
    description: string | undefined;
    properties: IProperty[];
}