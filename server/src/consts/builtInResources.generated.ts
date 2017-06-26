/* Auto-generated file. Do not edit. */ 


import { PuppetType } from '../types/puppetType';
import { IResource } from '../types/IResource';

const BuiltInResources: IResource[] = [
  {
    name: "augeas",
    description: "Apply a change or an array of changes to the filesystem using the augeas tool.\n\nRequires:\n\n    * http://www.augeas.net\n     * The ruby-augeas bindings\n\n\nSample usage with a string:\n\naugeas{\"test1\" :   context => \"/files/etc/sysconfig/firstboot\",   changes => \"set RUN_FIRSTBOOT YES\",   onlyif  => \"match other_value size > 0\", }\n\nSample usage with an array and custom lenses:\n\naugeas{\"jboss_conf\":   context   => \"/files\",   changes   => [       \"set etc/jbossas/jbossas.conf/JBOSS_IP $ipaddress\",       \"set etc/jbossas/jbossas.conf/JAVA_HOME /usr\",     ],   load_path => \"$/usr/share/jbossas/lenses\", }\n\n",
    properties: [
      {
        name: "changes",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "context",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "force",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "incl",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "lens",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "load_path",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "onlyif",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "augeas"
        ]
      },
      {
        name: "returns",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "root",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "show_diff",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "type_check",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      }
    ]
  },
  {
    name: "computer",
    description: "Computer object management using DirectoryService on OS X.\n\nNote that these are distinctly different kinds of objects to ‘hosts’, as they require a MAC address and can have all sorts of policy attached to them.\n\nThis provider only manages Computer objects in the local directory service domain, not in remote directories.\n\nIf you wish to manage `/etc/hosts` file on Mac OS X, then simply use the host type as per other platforms.\n\nThis type primarily exists to create localhost Computer objects that MCX policy can then be attached to.\n\nAutorequires: If Puppet is managing the plist file representing a Computer object (located at `/var/db/dslocal/nodes/Default/computers/{name}.plist`), the Computer resource will autorequire it.\n\n",
    properties: [
      {
        name: "en_address",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "ip_address",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "directoryservice"
        ]
      },
      {
        name: "realname",
        type: "Variant",
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
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "environment",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "hour",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "minute",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "month",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "monthday",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "crontab"
        ]
      },
      {
        name: "special",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "user",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "weekday",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "exec",
    description: "Executes external commands.\n\nAny command in an `exec` resource must be able to run multiple times without causing harm — that is, it must be **idempotent**. There are three main ways for an exec to be idempotent:\n\n    * The command itself is already idempotent. (For example, `apt-get update`.)\n     * The exec has an `onlyif`, `unless`, or `creates` attribute, which prevents Puppet from running the command unless some condition is met.\n     * The exec has `refreshonly => true`, which only allows Puppet to run the command when some other resource is changed. (See the notes on refreshing below.)\n\n\nA caution: There’s a widespread tendency to use collections of execs to manage resources that aren’t covered by an existing resource type. This works fine for simple tasks, but once your exec pile gets complex enough that you really have to think to understand what’s happening, you should consider developing a custom resource type instead, as it will be much more predictable and maintainable.\n\nRefresh: `exec` resources can respond to refresh events (via `notify`, `subscribe`, or the `~>` arrow). The refresh behavior of execs is non-standard, and can be affected by the `refresh` and `refreshonly` attributes:\n\n    * If `refreshonly` is set to true, the exec will **only** run when it receives an event. This is the most reliable way to use refresh with execs.\n     * If the exec already would have run and receives an event, it will run its command up to two times. (If an `onlyif`, `unless`, or `creates` condition is no longer met after the first run, the second run will not occur.)\n     * If the exec already would have run, has a `refresh` command, and receives an event, it will run its normal command, then run its `refresh` command (as long as any `onlyif`, `unless`, or `creates` conditions are still met after the normal command finishes).\n     * If the exec would not have run (due to an `onlyif`, `unless`, or `creates` attribute) and receives an event, it still will not run.\n     * If the exec has `noop => true`, would otherwise have run, and receives an event from a non-noop resource, it will run once (or run its `refresh` command instead, if it has one).\n\n\nIn short: If there’s a possibility of your exec receiving refresh events, it becomes doubly important to make sure the run conditions are restricted.\n\nAutorequires: If Puppet is managing an exec’s cwd or the executable file used in an exec’s command, the exec resource will autorequire those files. If Puppet is managing the user that an exec should run as, the exec resource will autorequire that user.\n\n",
    properties: [
      {
        name: "command",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "creates",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "cwd",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "environment",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "logoutput",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "on_failure"
        ]
      },
      {
        name: "onlyif",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "path",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "posix",
          "shell",
          "windows"
        ]
      },
      {
        name: "refresh",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "refreshonly",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "returns",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "timeout",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "tries",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "try_sleep",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "umask",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "unless",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "user",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "file",
    description: "Manages files, including their content, ownership, and permissions.\n\nThe `file` type can manage normal files, directories, and symlinks; the type should be specified in the `ensure` attribute.\n\nFile contents can be managed directly with the `content` attribute, or downloaded from a remote source using the `source` attribute; the latter can also be used to recursively serve directories (when the `recurse` attribute is set to `true` or `local`). On Windows, note that file contents are managed in binary mode; Puppet never automatically translates line endings.\n\nAutorequires: If Puppet is managing the user or group that owns a file, the file resource will autorequire them. If Puppet is managing any parent directories of a file, the file resource will autorequire them.\n\n",
    properties: [
      {
        name: "backup",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "checksum",
        type: "Enum",
        possibleValues: [
          "md5",
          "md5lite",
          "sha256",
          "sha256lite",
          "mtime",
          "ctime",
          "none"
        ]
      },
      {
        name: "checksum_value",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "content",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ctime",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "absent",
          "false",
          "file",
          "present",
          "directory",
          "link",
          "/./"
        ]
      },
      {
        name: "force",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ignore",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "links",
        type: "Enum",
        possibleValues: [
          "follow",
          "manage"
        ]
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mtime",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "path",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "posix",
          "windows"
        ]
      },
      {
        name: "purge",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "recurse",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "remote"
        ]
      },
      {
        name: "recurselimit",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "replace",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "selinux_ignore_defaults",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "selrange",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "selrole",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "seltype",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "seluser",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "show_diff",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "source",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "source_permissions",
        type: "Enum",
        possibleValues: [
          "source",
          "file",
          "use",
          "use_when_creating",
          "ignore"
        ]
      },
      {
        name: "sourceselect",
        type: "Enum",
        possibleValues: [
          "first",
          "all"
        ]
      },
      {
        name: "target",
        type: "Enum",
        possibleValues: [
          "notlink",
          "/./"
        ]
      },
      {
        name: "type",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "validate_cmd",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "validate_replacement",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "filebucket",
    description: "A repository for storing and retrieving file content by MD5 checksum. Can be local to each agent node, or centralized on a puppet master server. All puppet masters provide a filebucket service that agent nodes can access via HTTP, but you must declare a filebucket resource before any agents will do so.\n\nFilebuckets are used for the following features:\n\n    * Content backups. If the `file` type’s `backup` attribute is set to the name of a filebucket, Puppet will back up the **old** content whenever it rewrites a file; see the documentation for the `file` type for more details. These backups can be used for manual recovery of content, but are more commonly used to display changes and differences in a tool like Puppet Dashboard.\n     * Content distribution. The optional static compiler populates the puppet master’s filebucket with the **desired** content for each file, then instructs the agent to retrieve the content for a specific checksum. For more details, https://docs.puppetlabs.com/puppet/latest/reference/indirection.html#catalog.\n\n\nTo use a central filebucket for backups, you will usually want to declare a filebucket resource and a resource default for the `backup` attribute in site.pp:\n\n# /etc/puppetlabs/puppet/manifests/site.pp filebucket { 'main':   path   => false,                # This is required for remote filebuckets.   server => 'puppet.example.com', # Optional; defaults to the configured puppet master. }\n\nFile { backup => main, } \n\nPuppet master servers automatically provide the filebucket service, so this will work in a default configuration. If you have a heavily restricted `auth.conf` file, you may need to allow access to the `file_bucket_file` endpoint.\n\n",
    properties: [
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "path",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "port",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "server",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "group",
    description: "Manage groups. On most platforms this can only create groups. Group membership must be managed on individual users.\n\nOn some platforms such as OS X, group membership is managed as an attribute of the group, not the user record. Providers must have the feature ‘manages_members’ to manage the ‘members’ property of a group record.\n\n",
    properties: [
      {
        name: "allowdupe",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "attribute_membership",
        type: "Enum",
        possibleValues: [
          "inclusive",
          "minimum"
        ]
      },
      {
        name: "attributes",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "auth_membership",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "forcelocal",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "gid",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ia_load_module",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "members",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "aix",
          "directoryservice",
          "groupadd",
          "ldap",
          "pw",
          "windows_adsi"
        ]
      },
      {
        name: "system",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      }
    ]
  },
  {
    name: "host",
    description: "Installs and manages host entries.  For most systems, these entries will just be in `/etc/hosts`, but some systems (notably OS X) will have different solutions.\n\n",
    properties: [
      {
        name: "comment",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "host_aliases",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ip",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "parsed"
        ]
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "interface",
    description: "This represents a router or switch interface. It is possible to manage interface mode (access or trunking, native vlan and encapsulation) and switchport characteristics (speed, duplex).\n\n",
    properties: [
      {
        name: "access_vlan",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "allowed_trunk_vlans",
        type: "Enum",
        possibleValues: [
          "all",
          "/./"
        ]
      },
      {
        name: "description",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "device_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "duplex",
        type: "Enum",
        possibleValues: [
          "auto",
          "full",
          "half"
        ]
      },
      {
        name: "encapsulation",
        type: "Enum",
        possibleValues: [
          "none",
          "dot1q",
          "isl",
          "negotiate"
        ]
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "no_shutdown",
          "absent",
          "shutdown"
        ]
      },
      {
        name: "etherchannel",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ipaddress",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Enum",
        possibleValues: [
          "access",
          "trunk",
          "dynamic auto",
          "dynamic desirable"
        ]
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "native_vlan",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "cisco"
        ]
      },
      {
        name: "speed",
        type: "Enum",
        possibleValues: [
          "auto",
          "/^\\d+/"
        ]
      }
    ]
  },
  {
    name: "k5login",
    description: "Manage the `.k5login` file for a user.  Specify the full path to the `.k5login` file as the name, and an array of principals as the `principals` attribute.\n\n",
    properties: [
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "path",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "principals",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "k5login"
        ]
      }
    ]
  },
  {
    name: "macauthorization",
    description: "Manage the Mac OS X authorization database. See the https://developer.apple.com/documentation/Security/Conceptual/Security_Overview/Security_Services/chapter_4_section_5.html for more information.\n\nNote that authorization store directives with hyphens in their names have been renamed to use underscores, as Puppet does not react well to hyphens in identifiers.\n\nAutorequires: If Puppet is managing the `/etc/authorization` file, each macauthorization resource will autorequire it.\n\n",
    properties: [
      {
        name: "allow_root",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "auth_class",
        type: "Enum",
        possibleValues: [
          "user",
          "evaluate-mechanisms",
          "allow",
          "deny",
          "rule"
        ]
      },
      {
        name: "auth_type",
        type: "Enum",
        possibleValues: [
          "right",
          "rule"
        ]
      },
      {
        name: "authenticate_user",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "comment",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "k_of_n",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mechanisms",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "macauthorization"
        ]
      },
      {
        name: "rule",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "session_owner",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "shared",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "timeout",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "tries",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "mailalias",
    description: "Creates an email alias in the local alias database.\n\n",
    properties: [
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "file",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "aliases"
        ]
      },
      {
        name: "recipient",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "maillist",
    description: "Manage email lists.  This resource type can only create and remove lists; it cannot currently reconfigure them.\n\n",
    properties: [
      {
        name: "admin",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "description",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent",
          "purged"
        ]
      },
      {
        name: "mailserver",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "password",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "mailman"
        ]
      },
      {
        name: "webserver",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "mcx",
    description: "MCX object management using DirectoryService on OS X.\n\nThe default provider of this type merely manages the XML plist as reported by the `dscl -mcxexport` command.  This is similar to the content property of the file type in Puppet.\n\nThe recommended method of using this type is to use Work Group Manager to manage users and groups on the local computer, record the resulting puppet manifest using the command `puppet resource mcx`, then deploy it to other machines.\n\nAutorequires: If Puppet is managing the user, group, or computer that these MCX settings refer to, the MCX resource will autorequire that user, group, or computer.\n\n",
    properties: [
      {
        name: "content",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ds_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ds_type",
        type: "Enum",
        possibleValues: [
          "user",
          "group",
          "computer",
          "computerlist"
        ]
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "mcxcontent"
        ]
      }
    ]
  },
  {
    name: "mount",
    description: "Manages mounted filesystems, including putting mount information into the mount table. The actual behavior depends on the value of the ‘ensure’ parameter.\n\nRefresh: `mount` resources can respond to refresh events (via `notify`, `subscribe`, or the `~>` arrow). If a `mount` receives an event from another resource and its `ensure` attribute is set to `mounted`, Puppet will try to unmount then remount that filesystem.\n\nAutorequires: If Puppet is managing any parents of a mount resource — that is, other mount points higher up in the filesystem — the child mount will autorequire them.\n\nAutobefores:  If Puppet is managing any child file paths of a mount point, the mount resource will autobefore them.\n\n",
    properties: [
      {
        name: "atboot",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "blockdevice",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "device",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "dump",
        type: "Enum",
        possibleValues: [
          "1",
          "0",
          "2",
          "0"
        ]
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "defined",
          "present",
          "unmounted",
          "absent",
          "mounted"
        ]
      },
      {
        name: "fstype",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "pass",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "parsed"
        ]
      },
      {
        name: "remounts",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_command",
    description: "The Nagios type command.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_command.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "command_line",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "command_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "poller_tag",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_contact",
    description: "The Nagios type contact.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_contact.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "address1",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "address2",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "address3",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "address4",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "address5",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "address6",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "alias",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "can_submit_commands",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contact_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contactgroups",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "email",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_notification_commands",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_notification_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_notification_period",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_notifications_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "pager",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "retain_nonstatus_information",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "retain_status_information",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "service_notification_commands",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "service_notification_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "service_notification_period",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "service_notifications_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_contactgroup",
    description: "The Nagios type contactgroup.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_contactgroup.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "alias",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contactgroup_members",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contactgroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "members",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_host",
    description: "The Nagios type host.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_host.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "action_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "active_checks_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "address",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "alias",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "business_impact",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "check_command",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "check_freshness",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "check_interval",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "check_period",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contact_groups",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contacts",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "display_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "event_handler",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "event_handler_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "failure_prediction_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "first_notification_delay",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "flap_detection_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "flap_detection_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "freshness_threshold",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "high_flap_threshold",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "hostgroups",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "icon_image",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "icon_image_alt",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "initial_state",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "low_flap_threshold",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "max_check_attempts",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notification_interval",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notification_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notification_period",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notifications_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "obsess_over_host",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "parents",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "passive_checks_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "poller_tag",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "process_perf_data",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "realm",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "retain_nonstatus_information",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "retain_status_information",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "retry_interval",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "stalking_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "statusmap_image",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "vrml_image",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_hostdependency",
    description: "The Nagios type hostdependency.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_hostdependency.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "_naginator_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "dependency_period",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "dependent_host_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "dependent_hostgroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "execution_failure_criteria",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "hostgroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "inherits_parent",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notification_failure_criteria",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_hostescalation",
    description: "The Nagios type hostescalation.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_hostescalation.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "_naginator_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contact_groups",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contacts",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "escalation_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "escalation_period",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "first_notification",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "hostgroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "last_notification",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notification_interval",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_hostextinfo",
    description: "The Nagios type hostextinfo.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_hostextinfo.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "icon_image",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "icon_image_alt",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "statusmap_image",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "vrml_image",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_hostgroup",
    description: "The Nagios type hostgroup.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_hostgroup.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "action_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "alias",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "hostgroup_members",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "hostgroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "members",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "realm",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_service",
    description: "The Nagios type service.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_service.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "_naginator_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "action_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "active_checks_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "business_impact",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "check_command",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "check_freshness",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "check_interval",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "check_period",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contact_groups",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contacts",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "display_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "event_handler",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "event_handler_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "failure_prediction_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "first_notification_delay",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "flap_detection_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "flap_detection_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "freshness_threshold",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "high_flap_threshold",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "hostgroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "icon_image",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "icon_image_alt",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "initial_state",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "is_volatile",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "low_flap_threshold",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "max_check_attempts",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "normal_check_interval",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notification_interval",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notification_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notification_period",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notifications_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "obsess_over_service",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "parallelize_check",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "passive_checks_enabled",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "poller_tag",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "process_perf_data",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "retain_nonstatus_information",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "retain_status_information",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "retry_check_interval",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "retry_interval",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "service_description",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "servicegroups",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "stalking_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_servicedependency",
    description: "The Nagios type servicedependency.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_servicedependency.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "_naginator_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "dependency_period",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "dependent_host_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "dependent_hostgroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "dependent_service_description",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "execution_failure_criteria",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "hostgroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "inherits_parent",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notification_failure_criteria",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "service_description",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_serviceescalation",
    description: "The Nagios type serviceescalation.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_serviceescalation.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "_naginator_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contact_groups",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "contacts",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "escalation_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "escalation_period",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "first_notification",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "hostgroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "last_notification",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notification_interval",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "service_description",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "servicegroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_serviceextinfo",
    description: "The Nagios type serviceextinfo.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_serviceextinfo.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "_naginator_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "action_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "host_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "icon_image",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "icon_image_alt",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "service_description",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_servicegroup",
    description: "The Nagios type servicegroup.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_servicegroup.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "action_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "alias",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "members",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "notes_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "servicegroup_members",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "servicegroup_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "nagios_timeperiod",
    description: "The Nagios type timeperiod.  This resource type is autogenerated using the model developed in Naginator, and all of the Nagios types are generated using the same code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration files.  By default, the statements will be added to `/etc/nagios/nagios_timeperiod.cfg`, but you can send them to a different file by setting their `target` attribute.\n\nYou can purge Nagios resources using the `resources` type, but **only** in the default file locations.  This is an architectural limitation.\n\n",
    properties: [
      {
        name: "alias",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "exclude",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "friday",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "group",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mode",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "monday",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "owner",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "naginator"
        ]
      },
      {
        name: "register",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "saturday",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "sunday",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "thursday",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "timeperiod_name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "tuesday",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "use",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "wednesday",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "notify",
    description: "Sends an arbitrary message to the agent run-time log.\n\n",
    properties: [
      {
        name: "message",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "withpath",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      }
    ]
  },
  {
    name: "package",
    description: "Manage packages.  There is a basic dichotomy in package support right now:  Some package types (e.g., yum and apt) can retrieve their own package files, while others (e.g., rpm and sun) cannot.  For those package formats that cannot retrieve their own files, you can use the `source` parameter to point to the correct file.\n\nPuppet will automatically guess the packaging format that you are using based on the platform you are on, but you can override it using the `provider` parameter; each provider defines what it requires in order to function, and you must meet those requirements to use a given provider.\n\nYou can declare multiple package resources with the same `name`, as long as they specify different providers and have unique titles.\n\nNote that you must use the **title** to make a reference to a package resource; `Package[<NAME>]` is not a synonym for `Package[<TITLE>]` like it is for many other resource types.\n\nAutorequires: If Puppet is managing the files specified as a package’s `adminfile`, `responsefile`, or `source`, the package resource will autorequire those files.\n\n",
    properties: [
      {
        name: "adminfile",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "allow_virtual",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "allowcdrom",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "category",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "configfiles",
        type: "Enum",
        possibleValues: [
          "keep",
          "replace"
        ]
      },
      {
        name: "description",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "installed",
          "absent",
          "purged",
          "held",
          "latest",
          "/./"
        ]
      },
      {
        name: "flavor",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "install_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "instance",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "package_settings",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "platform",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "aix",
          "appdmg",
          "apple",
          "apt",
          "aptitude",
          "aptrpm",
          "blastwave",
          "dnf",
          "dpkg",
          "fink",
          "freebsd",
          "gem",
          "hpux",
          "macports",
          "nim",
          "openbsd",
          "opkg",
          "pacman",
          "pip",
          "pip3",
          "pkg",
          "pkgdmg",
          "pkgin",
          "pkgng",
          "pkgutil",
          "portage",
          "ports",
          "portupgrade",
          "puppet_gem",
          "rpm",
          "rug",
          "sun",
          "sunfreeware",
          "tdnf",
          "up2date",
          "urpmi",
          "windows",
          "yum",
          "zypper"
        ]
      },
      {
        name: "reinstall_on_refresh",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "responsefile",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "root",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "source",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "status",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "uninstall_options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "vendor",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "resources",
    description: "This is a metatype that can manage other resource types.  Any metaparams specified here will be passed on to any generated resources, so you can purge unmanaged resources but set `noop` to true so the purging is only logged and does not actually happen.\n\n",
    properties: [
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "purge",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "unless_system_user",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "/^\\d+$/"
        ]
      },
      {
        name: "unless_uid",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "router",
    description: "Manages connected router.\n\n",
    properties: [
      {
        name: "url",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "schedule",
    description: "Define schedules for Puppet. Resources can be limited to a schedule by using the https://docs.puppetlabs.com/puppet/latest/reference/metaparameter.html#schedule metaparameter.\n\nCurrently, schedules can only be used to stop a resource from being applied; they cannot cause a resource to be applied when it otherwise wouldn’t be, and they cannot accurately specify a time when a resource should run.\n\nEvery time Puppet applies its configuration, it will apply the set of resources whose schedule does not eliminate them from running right then, but there is currently no system in place to guarantee that a given resource runs at a given time.  If you specify a very  restrictive schedule and Puppet happens to run at a time within that schedule, then the resources will get applied; otherwise, that work may never get done.\n\nThus, it is advisable to use wider scheduling (e.g., over a couple of hours) combined with periods and repetitions.  For instance, if you wanted to restrict certain resources to only running once, between the hours of two and 4 AM, then you would use this schedule:\n\nschedule { 'maint':   range  => '2 - 4',   period => daily,   repeat => 1, }\n\nWith this schedule, the first time that Puppet runs between 2 and 4 AM, all resources with this schedule will get applied, but they won’t get applied again between 2 and 4 because they will have already run once that day, and they won’t get applied outside that schedule because they will be outside the scheduled range.\n\nPuppet automatically creates a schedule for each of the valid periods with the same name as that period (e.g., hourly and daily). Additionally, a schedule named `puppet` is created and used as the default, with the following attributes:\n\nschedule { 'puppet':   period => hourly,   repeat => 2, }\n\nThis will cause resources to be applied every 30 minutes by default.\n\n",
    properties: [
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "period",
        type: "Enum",
        possibleValues: [
          "hourly",
          "daily",
          "weekly",
          "monthly",
          "never"
        ]
      },
      {
        name: "periodmatch",
        type: "Enum",
        possibleValues: [
          "number",
          "distance"
        ]
      },
      {
        name: "range",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "repeat",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "weekday",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "scheduled_task",
    description: "Installs and manages Windows Scheduled Tasks.  All attributes except `name`, `command`, and `trigger` are optional; see the description of the `trigger` attribute for details on setting schedules.\n\n",
    properties: [
      {
        name: "arguments",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "command",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "enabled",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "password",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "win32_taskscheduler"
        ]
      },
      {
        name: "trigger",
        type: "Enum",
        possibleValues: [
          "schedule",
          "daily",
          "weekly",
          "monthly",
          "once",
          "once",
          "start_time",
          "start_date",
          "Date.parse",
          "minutes_interval",
          "minutes_duration",
          "daily",
          "every",
          "weekly",
          "every",
          "day_of_week",
          "mon",
          "tues",
          "wed",
          "thurs",
          "fri",
          "sat",
          "sun",
          "all",
          "monthly",
          "months",
          "on",
          "last,",
          "monthly",
          "months",
          "day_of_week",
          "mon",
          "tues",
          "wed",
          "thurs",
          "fri",
          "sat",
          "sun",
          "all",
          "which_occurrence",
          "first",
          "second",
          "third",
          "fourth",
          "fifth",
          "last"
        ]
      },
      {
        name: "user",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "working_dir",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "selboolean",
    description: "Manages SELinux booleans on systems with SELinux support.  The supported booleans are any of the ones found in `/selinux/booleans/`.\n\n",
    properties: [
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "persistent",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "getsetsebool"
        ]
      },
      {
        name: "value",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      }
    ]
  },
  {
    name: "selmodule",
    description: "Manages loading and unloading of SELinux policy modules on the system.  Requires SELinux support.  See man semodule(8) for more information on SELinux policy modules.\n\nAutorequires: If Puppet is managing the file containing this SELinux policy module (which is either explicitly specified in the `selmodulepath` attribute or will be found at {`selmoduledir`}/{`name`}.pp), the selmodule resource will autorequire that file.\n\n",
    properties: [
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "semodule"
        ]
      },
      {
        name: "selmoduledir",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "selmodulepath",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "syncversion",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      }
    ]
  },
  {
    name: "service",
    description: "Manage running services.  Service support unfortunately varies widely by platform — some platforms have very little if any concept of a running service, and some have a very codified and powerful concept. Puppet’s service support is usually capable of doing the right thing, but the more information you can provide, the better behaviour you will get.\n\nPuppet 2.7 and newer expect init scripts to have a working status command. If this isn’t the case for any of your services’ init scripts, you will need to set `hasstatus` to false and possibly specify a custom status command in the `status` attribute. As a last resort, Puppet will attempt to search the process table by calling whatever command is listed in the `ps` fact. The default search pattern is the name of the service, but you can specify it with the `pattern` attribute.\n\nRefresh: `service` resources can respond to refresh events (via `notify`, `subscribe`, or the `~>` arrow). If a `service` receives an event from another resource, Puppet will restart the service it manages. The actual command used to restart the service depends on the platform and can be configured:\n\n    * If you set `hasrestart` to true, Puppet will use the init script’s restart command.\n     * You can provide an explicit command for restarting with the `restart` attribute.\n     * If you do neither, the service’s stop and start commands will be used.\n\n\n",
    properties: [
      {
        name: "binary",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "control",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "enable",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "manual",
          "mask"
        ]
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "stopped",
          "false",
          "running",
          "true"
        ]
      },
      {
        name: "flags",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "hasrestart",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "hasstatus",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "manifest",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "path",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "pattern",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "base",
          "bsd",
          "daemontools",
          "debian",
          "freebsd",
          "gentoo",
          "init",
          "launchd",
          "openbsd",
          "openrc",
          "openwrt",
          "rcng",
          "redhat",
          "runit",
          "service",
          "smf",
          "src",
          "systemd",
          "upstart",
          "windows"
        ]
      },
      {
        name: "restart",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "start",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "status",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "stop",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "ssh_authorized_key",
    description: "Manages SSH authorized keys. Currently only type 2 keys are supported.\n\nIn their native habitat, SSH keys usually appear as a single long line, in the format `<TYPE> <KEY> <NAME/COMMENT>`. This resource type requires you to split that line into several attributes. Thus, a key that appears in your `~/.ssh/id_rsa.pub` file like this…\n\n`ssh-rsa AAAAB3Nza[...]qXfdaQ== nick@magpie.example.com `\n\n…would translate to the following resource:\n\nssh_authorized_key { 'nick@magpie.example.com':   ensure => present,   user   => 'nick',   type   => 'ssh-rsa',   key    => 'AAAAB3Nza[...]qXfdaQ==', }\n\nTo ensure that only the currently approved keys are present, you can purge unmanaged SSH keys on a per-user basis. Do this with the `user` resource type’s `purge_ssh_keys` attribute:\n\nuser { 'nick':   ensure         => present,   purge_ssh_keys => true, }\n\nThis will remove any keys in `~/.ssh/authorized_keys` that aren’t being managed with `ssh_authorized_key` resources. See the documentation of the `user` type for more details.\n\nAutorequires: If Puppet is managing the user account in which this SSH key should be installed, the `ssh_authorized_key` resource will autorequire that user.\n\n",
    properties: [
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "key",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "options",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "parsed"
        ]
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "type",
        type: "Enum",
        possibleValues: [
          "ssh-dss",
          "dsa",
          "ssh-rsa",
          "rsa",
          "ecdsa-sha2-nistp256",
          "ecdsa-sha2-nistp384",
          "ecdsa-sha2-nistp521",
          "ssh-ed25519",
          "ed25519"
        ]
      },
      {
        name: "user",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "sshkey",
    description: "Installs and manages ssh host keys.  By default, this type will install keys into `/etc/ssh/ssh_known_hosts`. To manage ssh keys in a different `known_hosts` file, such as a user’s personal `known_hosts`, pass its path to the `target` parameter. See the `ssh_authorized_key` type to manage authorized keys.\n\n",
    properties: [
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "host_aliases",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "key",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "parsed"
        ]
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "type",
        type: "Enum",
        possibleValues: [
          "ssh-dss",
          "dsa",
          "ssh-ed25519",
          "ed25519",
          "ssh-rsa",
          "rsa",
          "ecdsa-sha2-nistp256",
          "ecdsa-sha2-nistp384",
          "ecdsa-sha2-nistp521"
        ]
      }
    ]
  },
  {
    name: "stage",
    description: "A resource type for creating new run stages.  Once a stage is available, classes can be assigned to it by declaring them with the resource-like syntax and using https://docs.puppetlabs.com/puppet/latest/reference/metaparameter.html#stage.\n\nNote that new stages are not useful unless you also declare their order in relation to the default `main` stage.\n\nA complete run stage example:\n\nstage { 'pre':   before => Stage['main'], }\n\nclass { 'apt-updates':   stage => 'pre', }\n\nIndividual resources cannot be assigned to run stages; you can only set stages for classes.\n\n",
    properties: [
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "tidy",
    description: "Remove unwanted files based on specific criteria.  Multiple criteria are OR’d together, so a file that is too large but is not old enough will still get tidied.\n\nIf you don’t specify either `age` or `size`, then all files will be removed.\n\nThis resource type works by generating a file resource for every file that should be deleted and then letting that resource perform the actual deletion.\n\n",
    properties: [
      {
        name: "age",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "backup",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "matches",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "path",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "recurse",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "inf",
          "/^[0-9]+$/"
        ]
      },
      {
        name: "rmdirs",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "size",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "type",
        type: "Enum",
        possibleValues: [
          "atime",
          "mtime",
          "ctime"
        ]
      }
    ]
  },
  {
    name: "user",
    description: "Manage users.  This type is mostly built to manage system users, so it is lacking some features useful for managing normal users.\n\nThis resource type uses the prescribed native tools for creating groups and generally uses POSIX APIs for retrieving information about them.  It does not directly modify `/etc/passwd` or anything.\n\nAutorequires: If Puppet is managing the user’s primary group (as provided in the `gid` attribute) or any group listed in the `groups` attribute then the user resource will autorequire that group. If Puppet is managing any role accounts corresponding to the user’s roles, the user resource will autorequire those role accounts.\n\n",
    properties: [
      {
        name: "allowdupe",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "attribute_membership",
        type: "Enum",
        possibleValues: [
          "inclusive",
          "minimum"
        ]
      },
      {
        name: "attributes",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "auth_membership",
        type: "Enum",
        possibleValues: [
          "inclusive",
          "minimum"
        ]
      },
      {
        name: "auths",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "comment",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent",
          "role"
        ]
      },
      {
        name: "expiry",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^\\d{4}-\\d{2}-\\d{2}$/"
        ]
      },
      {
        name: "forcelocal",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "gid",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "groups",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "home",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ia_load_module",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "iterations",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "key_membership",
        type: "Enum",
        possibleValues: [
          "inclusive",
          "minimum"
        ]
      },
      {
        name: "keys",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "loginclass",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "managehome",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "membership",
        type: "Enum",
        possibleValues: [
          "inclusive",
          "minimum"
        ]
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "password",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "password_max_age",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "password_min_age",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "profile_membership",
        type: "Enum",
        possibleValues: [
          "inclusive",
          "minimum"
        ]
      },
      {
        name: "profiles",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "project",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "aix",
          "directoryservice",
          "hpuxuseradd",
          "ldap",
          "openbsd",
          "pw",
          "user_role_add",
          "useradd",
          "windows_adsi"
        ]
      },
      {
        name: "purge_ssh_keys",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "role_membership",
        type: "Enum",
        possibleValues: [
          "inclusive",
          "minimum"
        ]
      },
      {
        name: "roles",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "salt",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "shell",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "system",
        type: "Enum",
        possibleValues: [
          "true",
          "false",
          "yes",
          "no"
        ]
      },
      {
        name: "uid",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "vlan",
    description: "Manages a VLAN on a router or switch.\n\n",
    properties: [
      {
        name: "description",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "device_url",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "cisco"
        ]
      }
    ]
  },
  {
    name: "yumrepo",
    description: "The client-side description of a yum repository. Repository configurations are found by parsing `/etc/yum.conf` and the files indicated by the `reposdir` option in that file (see `yum.conf(5)` for details).\n\nMost parameters are identical to the ones documented in the `yum.conf(5)` man page.\n\nContinuation lines that yum supports (for the `baseurl`, for example) are not supported. This type does not attempt to read or verify the existence of files listed in the `include` attribute.\n\n",
    properties: [
      {
        name: "assumeyes",
        type: "Enum",
        possibleValues: [
          "absent"
        ]
      },
      {
        name: "bandwidth",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^\\d+[kMG]?$/"
        ]
      },
      {
        name: "baseurl",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "cost",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^\\d+$/"
        ]
      },
      {
        name: "deltarpm_metadata_percentage",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^\\d+$/"
        ]
      },
      {
        name: "deltarpm_percentage",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^\\d+$/"
        ]
      },
      {
        name: "descr",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "enabled",
        type: "Enum",
        possibleValues: [
          "absent"
        ]
      },
      {
        name: "enablegroups",
        type: "Enum",
        possibleValues: [
          "absent"
        ]
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "exclude",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "failovermethod",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^roundrobin|priority$/"
        ]
      },
      {
        name: "gpgcakey",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "gpgcheck",
        type: "Enum",
        possibleValues: [
          "absent"
        ]
      },
      {
        name: "gpgkey",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "http_caching",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^(packages|all|none)$/"
        ]
      },
      {
        name: "include",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "includepkgs",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "keepalive",
        type: "Enum",
        possibleValues: [
          "absent"
        ]
      },
      {
        name: "metadata_expire",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^([0-9]+[dhm]?|never)$/"
        ]
      },
      {
        name: "metalink",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "mirrorlist",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "mirrorlist_expire",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^[0-9]+$/"
        ]
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "priority",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "protect",
        type: "Enum",
        possibleValues: [
          "protectbase",
          "absent"
        ]
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "inifile"
        ]
      },
      {
        name: "proxy",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "proxy_password",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "proxy_username",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "repo_gpgcheck",
        type: "Enum",
        possibleValues: [
          "absent"
        ]
      },
      {
        name: "retries",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^[0-9]+$/"
        ]
      },
      {
        name: "s3_enabled",
        type: "Enum",
        possibleValues: [
          "absent"
        ]
      },
      {
        name: "skip_if_unavailable",
        type: "Enum",
        possibleValues: [
          "absent"
        ]
      },
      {
        name: "sslcacert",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "sslclientcert",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "sslclientkey",
        type: "Enum",
        possibleValues: [
          "absent",
          "/.*/"
        ]
      },
      {
        name: "sslverify",
        type: "Enum",
        possibleValues: [
          "absent"
        ]
      },
      {
        name: "target",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "throttle",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^\\d+[kMG%]?$/"
        ]
      },
      {
        name: "timeout",
        type: "Enum",
        possibleValues: [
          "absent",
          "/^\\d+$/"
        ]
      }
    ]
  },
  {
    name: "zfs",
    description: "Manage zfs. Create destroy and set properties on zfs instances.\n\nAutorequires: If Puppet is managing the zpool at the root of this zfs instance, the zfs resource will autorequire it. If Puppet is managing any parent zfs instances, the zfs resource will autorequire them.\n\n",
    properties: [
      {
        name: "aclinherit",
        type: "Enum",
        possibleValues: [
          "discard",
          "noallow",
          "restricted",
          "passthrough",
          "passthrough-x"
        ]
      },
      {
        name: "aclmode",
        type: "Enum",
        possibleValues: [
          "discard",
          "groupmask",
          "passthrough"
        ]
      },
      {
        name: "atime",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "canmount",
        type: "Enum",
        possibleValues: [
          "on",
          "off",
          "noauto"
        ]
      },
      {
        name: "checksum",
        type: "Enum",
        possibleValues: [
          "on",
          "off",
          "fletcher2",
          "fletcher4",
          "sha256"
        ]
      },
      {
        name: "compression",
        type: "Enum",
        possibleValues: [
          "on",
          "off",
          "lzjb",
          "gzip",
          "gzip-[1-9]",
          "zle"
        ]
      },
      {
        name: "copies",
        type: "Enum",
        possibleValues: [
          "1",
          "2",
          "3"
        ]
      },
      {
        name: "dedup",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "devices",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "exec",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "logbias",
        type: "Enum",
        possibleValues: [
          "latency",
          "throughput"
        ]
      },
      {
        name: "mountpoint",
        type: "Enum",
        possibleValues: [
          "&lt;path&gt;",
          "legacy",
          "none"
        ]
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "nbmand",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "primarycache",
        type: "Enum",
        possibleValues: [
          "all",
          "none",
          "metadata"
        ]
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "zfs"
        ]
      },
      {
        name: "quota",
        type: "Enum",
        possibleValues: [
          "&lt;size&gt;",
          "none"
        ]
      },
      {
        name: "readonly",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "recordsize",
        type: "Enum",
        possibleValues: []
      },
      {
        name: "refquota",
        type: "Enum",
        possibleValues: [
          "&lt;size&gt;",
          "none"
        ]
      },
      {
        name: "refreservation",
        type: "Enum",
        possibleValues: [
          "&lt;size&gt;",
          "none"
        ]
      },
      {
        name: "reservation",
        type: "Enum",
        possibleValues: [
          "&lt;size&gt;",
          "none"
        ]
      },
      {
        name: "secondarycache",
        type: "Enum",
        possibleValues: [
          "all",
          "none",
          "metadata"
        ]
      },
      {
        name: "setuid",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "shareiscsi",
        type: "Enum",
        possibleValues: [
          "on",
          "off",
          "type=&lt;type&gt;"
        ]
      },
      {
        name: "sharenfs",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "sharesmb",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "snapdir",
        type: "Enum",
        possibleValues: [
          "hidden",
          "visible"
        ]
      },
      {
        name: "version",
        type: "Enum",
        possibleValues: [
          "1",
          "2",
          "3",
          "4",
          "current"
        ]
      },
      {
        name: "volsize",
        type: "Enum",
        possibleValues: [
          "&lt;size&gt;"
        ]
      },
      {
        name: "vscan",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "xattr",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      },
      {
        name: "zoned",
        type: "Enum",
        possibleValues: [
          "on",
          "off"
        ]
      }
    ]
  },
  {
    name: "zone",
    description: "Manages Solaris zones.\n\nAutorequires: If Puppet is managing the directory specified as the root of the zone’s filesystem (with the `path` attribute), the zone resource will autorequire that directory.\n\n",
    properties: [
      {
        name: "autoboot",
        type: "Enum",
        possibleValues: [
          "true",
          "false"
        ]
      },
      {
        name: "clone",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "create_args",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "dataset",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "absent",
          "configured",
          "installed",
          "running"
        ]
      },
      {
        name: "id",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "inherit",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "install_args",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ip",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "iptype",
        type: "Enum",
        possibleValues: [
          "shared",
          "exclusive"
        ]
      },
      {
        name: "name",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "path",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "pool",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "solaris"
        ]
      },
      {
        name: "realhostname",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "shares",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "sysidcfg",
        type: "Variant",
        possibleValues: null
      }
    ]
  },
  {
    name: "zpool",
    description: "Manage zpools. Create and delete zpools. The provider WILL NOT SYNC, only report differences.\n\nSupports vdevs with mirrors, raidz, logs and spares.\n\n",
    properties: [
      {
        name: "disk",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "ensure",
        type: "Enum",
        possibleValues: [
          "present",
          "absent"
        ]
      },
      {
        name: "log",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "mirror",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "pool",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "provider",
        type: "Enum",
        possibleValues: [
          "zpool"
        ]
      },
      {
        name: "raid_parity",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "raidz",
        type: "Variant",
        possibleValues: null
      },
      {
        name: "spare",
        type: "Variant",
        possibleValues: null
      }
    ]
  }
];

export default BuiltInResources;