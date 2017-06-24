import { PuppetType } from '../types/puppetType';
import { IResource } from '../types/IResource';

const BuiltInResources: IResource[] = [
  {
      name: 'package',
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
  }
];

export default BuiltInResources;