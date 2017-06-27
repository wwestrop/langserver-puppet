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
    },
    {
        name: "cron",
        description: "Installs and manages cron jobs.  Every cron resource created by Puppet requires a command and at least one periodic attribute (hour, minute, month, monthday, weekday, or special).  While the name of the cron job is not part of the actual job, the name is stored in a comment beginning with `# Puppet Name: `. These comments are used to match crontab entries created by Puppet with cron resources.\n\nIf an existing crontab entry happens to match the scheduling and command of a cron resource that has never been synched, Puppet will defer to the existing crontab entry and will not create a new entry tagged with the `# Puppet Name: ` comment.\n\nExample:\n\ncron { 'logrotate':   command => '/usr/sbin/logrotate',   user    => 'root',   hour    => 2,   minute  => 0, }\n\nNote that all periodic attributes can be specified as an array of values:\n\ncron { 'logrotate':   command => '/usr/sbin/logrotate',   user    => 'root',   hour    => [2, 4], }\n\n…or using ranges or the step syntax `*/2` (although there’s no guarantee that your `cron` daemon supports these):\n\ncron { 'logrotate':   command => '/usr/sbin/logrotate',   user    => 'root',   hour    => ['2-4'],   minute  => '*/10', }\n\nAn important note: **the Cron type will not reset parameters that are removed from a manifest**. For example, removing a `minute => 10` parameter will not reset the minute component of the associated cronjob to `*`. These changes must be expressed by setting the parameter to `minute => absent` because Puppet only manages parameters that are out of sync with manifest entries.\n\nAutorequires: If Puppet is managing the user account specified by the `user` property of a cron resource, then the cron resource will autorequire that user.\n\n",
        properties: [
            {
                name: "command",
                type: "Variant",
                possibleValues: null
            },
            {
                name: "hour",
                type: "Variant",
                possibleValues: null
            }
        ]
    }];