import { IResourceFinder } from '../../src/resourceFinder/IResourceFinder';
import { IResource } from '../../src/types/IResource';


export class FakeResourceFinder implements IResourceFinder {

    findAllResources(): IResource[] {
        return fakeResources;
    }
    findResource(name: string): IResource | null {
        return fakeResources.find(r => r.name === name) || null;
    }

}

const fakeResources: IResource[] = [
    {
        name: 'package',
        description: undefined,
        properties: [
            {
                name: 'ensure', 
                type: 'Enum',
                possibleValues:  ['present', 'absent', 'purged', 'held', 'latest']
            }, 
            {
                name: 'provider', 
                type: 'Enum',
                possibleValues: ['apple', 'yum', 'rpm', 'apt', 'windows']
            },
            {
                name: 'install_options', 
                type: 'Array',
                possibleValues: null
            },
            {
                name: 'source', 
                type: 'String',
                possibleValues: null
            }
        ]
    },
    {
        name: 'service',
        description: undefined,
        properties: [
            {
                name: 'ensure', 
                type: 'Enum',
                possibleValues: ['stopped', 'running']
            }, 
            {
                name: 'enable', 
                type: 'Enum',
                possibleValues: ['true', 'false', 'manual', 'mask']
            }
        ]
    },
    {
        name: 'file',
        description: undefined,
        properties: [
            {
                name: 'ensure', 
                type: 'Enum',
                possibleValues: ['present', 'absent', 'file', 'directory']
            }, 
            {
                name: 'content', 
                type: 'String',
                possibleValues: null,
            },
            {
                name: 'mode', 
                type: 'String',
                possibleValues: null
            }
        ]
    }];