/* Auto-generated file. Do not edit. */ 


import { PuppetType } from '../types/puppetType';
import { IResource } from '../types/IResource';

const BuiltInResources: IResource[] = [
  {
    name: "augeas",
    description: "Apply a change or an array of changes to the filesystem\nusing the augeas tool.\n\nRequires:\n\n\n  <li><a href=\"http://www.augeas.net\">Augeas</a></li>\n  <li>The ruby-augeas bindings</li>\n\n\nSample usage with a string:\n\n<code>augeas{\"test1\" :\n  context =&gt; \"/files/etc/sysconfig/firstboot\",\n  changes =&gt; \"set RUN_FIRSTBOOT YES\",\n  onlyif  =&gt; \"match other_value size &gt; 0\",\n}\n</code>\n\nSample usage with an array and custom lenses:\n\n<code>augeas{\"jboss_conf\":\n  context   =&gt; \"/files\",\n  changes   =&gt; [\n      \"set etc/jbossas/jbossas.conf/JBOSS_IP $ipaddress\",\n      \"set etc/jbossas/jbossas.conf/JAVA_HOME /usr\",\n    ],\n  load_path =&gt; \"$/usr/share/jbossas/lenses\",\n}\n</code>\n\n",
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
    description: "Computer object management using DirectoryService\non OS X.\n\nNote that these are distinctly different kinds of objects to ‘hosts’,\nas they require a MAC address and can have all sorts of policy attached to\nthem.\n\nThis provider only manages Computer objects in the local directory service\ndomain, not in remote directories.\n\nIf you wish to manage <code>/etc/hosts</code> file on Mac OS X, then simply use the host\ntype as per other platforms.\n\nThis type primarily exists to create localhost Computer objects that MCX\npolicy can then be attached to.\n\n<strong>Autorequires:</strong> If Puppet is managing the plist file representing a\nComputer object (located at <code>/var/db/dslocal/nodes/Default/computers/{name}.plist</code>),\nthe Computer resource will autorequire it.\n\n",
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
    description: "Installs and manages cron jobs.  Every cron resource created by Puppet\nrequires a command and at least one periodic attribute (hour, minute,\nmonth, monthday, weekday, or special).  While the name of the cron job is\nnot part of the actual job, the name is stored in a comment beginning with\n<code># Puppet Name: </code>. These comments are used to match crontab entries created\nby Puppet with cron resources.\n\nIf an existing crontab entry happens to match the scheduling and command of a\ncron resource that has never been synched, Puppet will defer to the existing\ncrontab entry and will not create a new entry tagged with the <code># Puppet Name: </code>\ncomment.\n\nExample:\n\n<code>cron { 'logrotate':\n  command =&gt; '/usr/sbin/logrotate',\n  user    =&gt; 'root',\n  hour    =&gt; 2,\n  minute  =&gt; 0,\n}\n</code>\n\nNote that all periodic attributes can be specified as an array of values:\n\n<code>cron { 'logrotate':\n  command =&gt; '/usr/sbin/logrotate',\n  user    =&gt; 'root',\n  hour    =&gt; [2, 4],\n}\n</code>\n\n…or using ranges or the step syntax <code>*/2</code> (although there’s no guarantee\nthat your <code>cron</code> daemon supports these):\n\n<code>cron { 'logrotate':\n  command =&gt; '/usr/sbin/logrotate',\n  user    =&gt; 'root',\n  hour    =&gt; ['2-4'],\n  minute  =&gt; '*/10',\n}\n</code>\n\nAn important note: <em>the Cron type will not reset parameters that are\nremoved from a manifest</em>. For example, removing a <code>minute =&gt; 10</code> parameter\nwill not reset the minute component of the associated cronjob to <code>*</code>.\nThese changes must be expressed by setting the parameter to\n<code>minute =&gt; absent</code> because Puppet only manages parameters that are out of\nsync with manifest entries.\n\n<strong>Autorequires:</strong> If Puppet is managing the user account specified by the\n<code>user</code> property of a cron resource, then the cron resource will autorequire\nthat user.\n\n",
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
    description: "Executes external commands.\n\nAny command in an <code>exec</code> resource <strong>must</strong> be able to run multiple times\nwithout causing harm — that is, it must be <em>idempotent</em>. There are three\nmain ways for an exec to be idempotent:\n\n\n  <li>The command itself is already idempotent. (For example, <code>apt-get update</code>.)</li>\n  <li>The exec has an <code>onlyif</code>, <code>unless</code>, or <code>creates</code> attribute, which prevents\nPuppet from running the command unless some condition is met.</li>\n  <li>The exec has <code>refreshonly =&gt; true</code>, which only allows Puppet to run the\ncommand when some other resource is changed. (See the notes on refreshing\nbelow.)</li>\n\n\nA caution: There’s a widespread tendency to use collections of execs to\nmanage resources that aren’t covered by an existing resource type. This\nworks fine for simple tasks, but once your exec pile gets complex enough\nthat you really have to think to understand what’s happening, you should\nconsider developing a custom resource type instead, as it will be much\nmore predictable and maintainable.\n\n<strong>Refresh:</strong> <code>exec</code> resources can respond to refresh events (via\n<code>notify</code>, <code>subscribe</code>, or the <code>~&gt;</code> arrow). The refresh behavior of execs\nis non-standard, and can be affected by the <code>refresh</code> and\n<code>refreshonly</code> attributes:\n\n\n  <li>If <code>refreshonly</code> is set to true, the exec will <em>only</em> run when it receives an\nevent. This is the most reliable way to use refresh with execs.</li>\n  <li>If the exec already would have run and receives an event, it will run its\ncommand <strong>up to two times.</strong> (If an <code>onlyif</code>, <code>unless</code>, or <code>creates</code> condition\nis no longer met after the first run, the second run will not occur.)</li>\n  <li>If the exec already would have run, has a <code>refresh</code> command, and receives an\nevent, it will run its normal command, then run its <code>refresh</code> command\n(as long as any <code>onlyif</code>, <code>unless</code>, or <code>creates</code> conditions are still met\nafter the normal command finishes).</li>\n  <li>If the exec would <strong>not</strong> have run (due to an <code>onlyif</code>, <code>unless</code>, or <code>creates</code>\nattribute) and receives an event, it still will not run.</li>\n  <li>If the exec has <code>noop =&gt; true</code>, would otherwise have run, and receives\nan event from a non-noop resource, it will run once (or run its <code>refresh</code>\ncommand instead, if it has one).</li>\n\n\nIn short: If there’s a possibility of your exec receiving refresh events,\nit becomes doubly important to make sure the run conditions are restricted.\n\n<strong>Autorequires:</strong> If Puppet is managing an exec’s cwd or the executable\nfile used in an exec’s command, the exec resource will autorequire those\nfiles. If Puppet is managing the user that an exec should run as, the\nexec resource will autorequire that user.\n\n",
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
    description: "Manages files, including their content, ownership, and permissions.\n\nThe <code>file</code> type can manage normal files, directories, and symlinks; the\ntype should be specified in the <code>ensure</code> attribute.\n\nFile contents can be managed directly with the <code>content</code> attribute, or\ndownloaded from a remote source using the <code>source</code> attribute; the latter\ncan also be used to recursively serve directories (when the <code>recurse</code>\nattribute is set to <code>true</code> or <code>local</code>). On Windows, note that file\ncontents are managed in binary mode; Puppet never automatically translates\nline endings.\n\n<strong>Autorequires:</strong> If Puppet is managing the user or group that owns a\nfile, the file resource will autorequire them. If Puppet is managing any\nparent directories of a file, the file resource will autorequire them.\n\n",
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
    description: "A repository for storing and retrieving file content by MD5 checksum. Can\nbe local to each agent node, or centralized on a puppet master server. All\npuppet masters provide a filebucket service that agent nodes can access\nvia HTTP, but you must declare a filebucket resource before any agents\nwill do so.\n\nFilebuckets are used for the following features:\n\n\n  <li><strong>Content backups.</strong> If the <code>file</code> type’s <code>backup</code> attribute is set to\nthe name of a filebucket, Puppet will back up the <em>old</em> content whenever\nit rewrites a file; see the documentation for the <code>file</code> type for more\ndetails. These backups can be used for manual recovery of content, but\nare more commonly used to display changes and differences in a tool like\nPuppet Dashboard.</li>\n  <li><strong>Content distribution.</strong> The optional static compiler populates the\npuppet master’s filebucket with the <em>desired</em> content for each file,\nthen instructs the agent to retrieve the content for a specific\nchecksum. For more details,\n<a href=\"https://docs.puppetlabs.com/puppet/latest/reference/indirection.html#catalog\">see the <code>static_compiler</code> section in the catalog indirection docs</a>.</li>\n\n\nTo use a central filebucket for backups, you will usually want to declare\na filebucket resource and a resource default for the <code>backup</code> attribute\nin site.pp:\n\n<code># /etc/puppetlabs/puppet/manifests/site.pp\nfilebucket { 'main':\n  path   =&gt; false,                # This is required for remote filebuckets.\n  server =&gt; 'puppet.example.com', # Optional; defaults to the configured puppet master.\n}\n\nFile { backup =&gt; main, }\n</code>\n\nPuppet master servers automatically provide the filebucket service, so\nthis will work in a default configuration. If you have a heavily\nrestricted <code>auth.conf</code> file, you may need to allow access to the\n<code>file_bucket_file</code> endpoint.\n\n",
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
    description: "Manage groups. On most platforms this can only create groups.\nGroup membership must be managed on individual users.\n\nOn some platforms such as OS X, group membership is managed as an\nattribute of the group, not the user record. Providers must have\nthe feature ‘manages_members’ to manage the ‘members’ property of\na group record.\n\n",
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
    description: "Installs and manages host entries.  For most systems, these\nentries will just be in <code>/etc/hosts</code>, but some systems (notably OS X)\nwill have different solutions.\n\n",
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
    description: "This represents a router or switch interface. It is possible to manage\ninterface mode (access or trunking, native vlan and encapsulation) and\nswitchport characteristics (speed, duplex).\n\n",
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
    description: "Manage the <code>.k5login</code> file for a user.  Specify the full path to\nthe <code>.k5login</code> file as the name, and an array of principals as the\n<code>principals</code> attribute.\n\n",
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
    description: "Manage the Mac OS X authorization database. See the\n<a href=\"https://developer.apple.com/documentation/Security/Conceptual/Security_Overview/Security_Services/chapter_4_section_5.html\">Apple developer site</a>\nfor more information.\n\nNote that authorization store directives with hyphens in their names have\nbeen renamed to use underscores, as Puppet does not react well to hyphens\nin identifiers.\n\n<strong>Autorequires:</strong> If Puppet is managing the <code>/etc/authorization</code> file, each\nmacauthorization resource will autorequire it.\n\n",
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
    description: "Manage email lists.  This resource type can only create\nand remove lists; it cannot currently reconfigure them.\n\n",
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
    description: "MCX object management using DirectoryService on OS X.\n\nThe default provider of this type merely manages the XML plist as\nreported by the <code>dscl -mcxexport</code> command.  This is similar to the\ncontent property of the file type in Puppet.\n\nThe recommended method of using this type is to use Work Group Manager\nto manage users and groups on the local computer, record the resulting\npuppet manifest using the command <code>puppet resource mcx</code>, then deploy it\nto other machines.\n\n<strong>Autorequires:</strong> If Puppet is managing the user, group, or computer that these\nMCX settings refer to, the MCX resource will autorequire that user, group, or computer.\n\n",
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
    description: "Manages mounted filesystems, including putting mount\ninformation into the mount table. The actual behavior depends\non the value of the ‘ensure’ parameter.\n\n<strong>Refresh:</strong> <code>mount</code> resources can respond to refresh events (via\n<code>notify</code>, <code>subscribe</code>, or the <code>~&gt;</code> arrow). If a <code>mount</code> receives an event\nfrom another resource <strong>and</strong> its <code>ensure</code> attribute is set to <code>mounted</code>,\nPuppet will try to unmount then remount that filesystem.\n\n<strong>Autorequires:</strong> If Puppet is managing any parents of a mount resource —\nthat is, other mount points higher up in the filesystem — the child\nmount will autorequire them.\n\n<strong>Autobefores:</strong>  If Puppet is managing any child file paths of a mount\npoint, the mount resource will autobefore them.\n\n",
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
    description: "The Nagios type command.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_command.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type contact.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_contact.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type contactgroup.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_contactgroup.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type host.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_host.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type hostdependency.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_hostdependency.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type hostescalation.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_hostescalation.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type hostextinfo.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_hostextinfo.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type hostgroup.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_hostgroup.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type service.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_service.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type servicedependency.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_servicedependency.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type serviceescalation.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_serviceescalation.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type serviceextinfo.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_serviceextinfo.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type servicegroup.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_servicegroup.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "The Nagios type timeperiod.  This resource type is autogenerated using the\nmodel developed in Naginator, and all of the Nagios types are generated using the\nsame code and the same library.\n\nThis type generates Nagios configuration statements in Nagios-parseable configuration\nfiles.  By default, the statements will be added to <code>/etc/nagios/nagios_timeperiod.cfg</code>, but\nyou can send them to a different file by setting their <code>target</code> attribute.\n\nYou can purge Nagios resources using the <code>resources</code> type, but <em>only</em>\nin the default file locations.  This is an architectural limitation.\n\n",
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
    description: "Manage packages.  There is a basic dichotomy in package\nsupport right now:  Some package types (e.g., yum and apt) can\nretrieve their own package files, while others (e.g., rpm and sun)\ncannot.  For those package formats that cannot retrieve their own files,\nyou can use the <code>source</code> parameter to point to the correct file.\n\nPuppet will automatically guess the packaging format that you are\nusing based on the platform you are on, but you can override it\nusing the <code>provider</code> parameter; each provider defines what it\nrequires in order to function, and you must meet those requirements\nto use a given provider.\n\nYou can declare multiple package resources with the same <code>name</code>, as long\nas they specify different providers and have unique titles.\n\nNote that you must use the <em>title</em> to make a reference to a package\nresource; <code>Package[&lt;NAME&gt;]</code> is not a synonym for <code>Package[&lt;TITLE&gt;]</code> like\nit is for many other resource types.\n\n<strong>Autorequires:</strong> If Puppet is managing the files specified as a\npackage’s <code>adminfile</code>, <code>responsefile</code>, or <code>source</code>, the package\nresource will autorequire those files.\n\n",
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
    description: "This is a metatype that can manage other resource types.  Any\nmetaparams specified here will be passed on to any generated resources,\nso you can purge unmanaged resources but set <code>noop</code> to true so the\npurging is only logged and does not actually happen.\n\n",
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
    description: "Define schedules for Puppet. Resources can be limited to a schedule by using the\n<a href=\"https://docs.puppetlabs.com/puppet/latest/reference/metaparameter.html#schedule\"><code>schedule</code></a>\nmetaparameter.\n\nCurrently, <strong>schedules can only be used to stop a resource from being\napplied;</strong> they cannot cause a resource to be applied when it otherwise\nwouldn’t be, and they cannot accurately specify a time when a resource\nshould run.\n\nEvery time Puppet applies its configuration, it will apply the\nset of resources whose schedule does not eliminate them from\nrunning right then, but there is currently no system in place to\nguarantee that a given resource runs at a given time.  If you\nspecify a very  restrictive schedule and Puppet happens to run at a\ntime within that schedule, then the resources will get applied;\notherwise, that work may never get done.\n\nThus, it is advisable to use wider scheduling (e.g., over a couple of\nhours) combined with periods and repetitions.  For instance, if you\nwanted to restrict certain resources to only running once, between\nthe hours of two and 4 AM, then you would use this schedule:\n\n<code>schedule { 'maint':\n  range  =&gt; '2 - 4',\n  period =&gt; daily,\n  repeat =&gt; 1,\n}\n</code>\n\nWith this schedule, the first time that Puppet runs between 2 and 4 AM,\nall resources with this schedule will get applied, but they won’t\nget applied again between 2 and 4 because they will have already\nrun once that day, and they won’t get applied outside that schedule\nbecause they will be outside the scheduled range.\n\nPuppet automatically creates a schedule for each of the valid periods\nwith the same name as that period (e.g., hourly and daily).\nAdditionally, a schedule named <code>puppet</code> is created and used as the\ndefault, with the following attributes:\n\n<code>schedule { 'puppet':\n  period =&gt; hourly,\n  repeat =&gt; 2,\n}\n</code>\n\nThis will cause resources to be applied every 30 minutes by default.\n\n",
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
    description: "Installs and manages Windows Scheduled Tasks.  All attributes\nexcept <code>name</code>, <code>command</code>, and <code>trigger</code> are optional; see the description\nof the <code>trigger</code> attribute for details on setting schedules.\n\n",
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
    description: "Manages SELinux booleans on systems with SELinux support.  The supported booleans\nare any of the ones found in <code>/selinux/booleans/</code>.\n\n",
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
    description: "Manages loading and unloading of SELinux policy modules\non the system.  Requires SELinux support.  See man semodule(8)\nfor more information on SELinux policy modules.\n\n<strong>Autorequires:</strong> If Puppet is managing the file containing this SELinux\npolicy module (which is either explicitly specified in the <code>selmodulepath</code>\nattribute or will be found at {<code>selmoduledir</code>}/{<code>name</code>}.pp), the selmodule\nresource will autorequire that file.\n\n",
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
    description: "Manage running services.  Service support unfortunately varies\nwidely by platform — some platforms have very little if any concept of a\nrunning service, and some have a very codified and powerful concept.\nPuppet’s service support is usually capable of doing the right thing, but\nthe more information you can provide, the better behaviour you will get.\n\nPuppet 2.7 and newer expect init scripts to have a working status command.\nIf this isn’t the case for any of your services’ init scripts, you will\nneed to set <code>hasstatus</code> to false and possibly specify a custom status\ncommand in the <code>status</code> attribute. As a last resort, Puppet will attempt to\nsearch the process table by calling whatever command is listed in the <code>ps</code>\nfact. The default search pattern is the name of the service, but you can\nspecify it with the <code>pattern</code> attribute.\n\n<strong>Refresh:</strong> <code>service</code> resources can respond to refresh events (via\n<code>notify</code>, <code>subscribe</code>, or the <code>~&gt;</code> arrow). If a <code>service</code> receives an\nevent from another resource, Puppet will restart the service it manages.\nThe actual command used to restart the service depends on the platform and\ncan be configured:\n\n\n  <li>If you set <code>hasrestart</code> to true, Puppet will use the init script’s restart command.</li>\n  <li>You can provide an explicit command for restarting with the <code>restart</code> attribute.</li>\n  <li>If you do neither, the service’s stop and start commands will be used.</li>\n\n\n",
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
    description: "Manages SSH authorized keys. Currently only type 2 keys are supported.\n\nIn their native habitat, SSH keys usually appear as a single long line, in\nthe format <code>&lt;TYPE&gt; &lt;KEY&gt; &lt;NAME/COMMENT&gt;</code>. This resource type requires you\nto split that line into several attributes. Thus, a key that appears in\nyour <code>~/.ssh/id_rsa.pub</code> file like this…\n\n<code>ssh-rsa AAAAB3Nza[...]qXfdaQ== nick@magpie.example.com\n</code>\n\n…would translate to the following resource:\n\n<code>ssh_authorized_key { 'nick@magpie.example.com':\n  ensure =&gt; present,\n  user   =&gt; 'nick',\n  type   =&gt; 'ssh-rsa',\n  key    =&gt; 'AAAAB3Nza[...]qXfdaQ==',\n}\n</code>\n\nTo ensure that only the currently approved keys are present, you can purge\nunmanaged SSH keys on a per-user basis. Do this with the <code>user</code> resource\ntype’s <code>purge_ssh_keys</code> attribute:\n\n<code>user { 'nick':\n  ensure         =&gt; present,\n  purge_ssh_keys =&gt; true,\n}\n</code>\n\nThis will remove any keys in <code>~/.ssh/authorized_keys</code> that aren’t being\nmanaged with <code>ssh_authorized_key</code> resources. See the documentation of the\n<code>user</code> type for more details.\n\n<strong>Autorequires:</strong> If Puppet is managing the user account in which this\nSSH key should be installed, the <code>ssh_authorized_key</code> resource will autorequire\nthat user.\n\n",
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
    description: "Installs and manages ssh host keys.  By default, this type will\ninstall keys into <code>/etc/ssh/ssh_known_hosts</code>. To manage ssh keys in a\ndifferent <code>known_hosts</code> file, such as a user’s personal <code>known_hosts</code>,\npass its path to the <code>target</code> parameter. See the <code>ssh_authorized_key</code>\ntype to manage authorized keys.\n\n",
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
    description: "A resource type for creating new run stages.  Once a stage is available,\nclasses can be assigned to it by declaring them with the resource-like syntax\nand using\n<a href=\"https://docs.puppetlabs.com/puppet/latest/reference/metaparameter.html#stage\">the <code>stage</code> metaparameter</a>.\n\nNote that new stages are not useful unless you also declare their order\nin relation to the default <code>main</code> stage.\n\nA complete run stage example:\n\n<code>stage { 'pre':\n  before =&gt; Stage['main'],\n}\n\nclass { 'apt-updates':\n  stage =&gt; 'pre',\n}\n</code>\n\nIndividual resources cannot be assigned to run stages; you can only set stages\nfor classes.\n\n",
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
    description: "Remove unwanted files based on specific criteria.  Multiple\ncriteria are OR’d together, so a file that is too large but is not\nold enough will still get tidied.\n\nIf you don’t specify either <code>age</code> or <code>size</code>, then all files will\nbe removed.\n\nThis resource type works by generating a file resource for every file\nthat should be deleted and then letting that resource perform the\nactual deletion.\n\n",
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
    description: "Manage users.  This type is mostly built to manage system\nusers, so it is lacking some features useful for managing normal\nusers.\n\nThis resource type uses the prescribed native tools for creating\ngroups and generally uses POSIX APIs for retrieving information\nabout them.  It does not directly modify <code>/etc/passwd</code> or anything.\n\n<strong>Autorequires:</strong> If Puppet is managing the user’s primary group (as\nprovided in the <code>gid</code> attribute) or any group listed in the <code>groups</code>\nattribute then the user resource will autorequire that group. If Puppet\nis managing any role accounts corresponding to the user’s roles, the\nuser resource will autorequire those role accounts.\n\n",
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
    description: "The client-side description of a yum repository. Repository\nconfigurations are found by parsing <code>/etc/yum.conf</code> and\nthe files indicated by the <code>reposdir</code> option in that file\n(see <code>yum.conf(5)</code> for details).\n\nMost parameters are identical to the ones documented\nin the <code>yum.conf(5)</code> man page.\n\nContinuation lines that yum supports (for the <code>baseurl</code>, for example)\nare not supported. This type does not attempt to read or verify the\nexistence of files listed in the <code>include</code> attribute.\n\n",
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
    description: "Manage zfs. Create destroy and set properties on zfs instances.\n\n<strong>Autorequires:</strong> If Puppet is managing the zpool at the root of this zfs\ninstance, the zfs resource will autorequire it. If Puppet is managing any\nparent zfs instances, the zfs resource will autorequire them.\n\n",
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
    description: "Manages Solaris zones.\n\n<strong>Autorequires:</strong> If Puppet is managing the directory specified as the root of\nthe zone’s filesystem (with the <code>path</code> attribute), the zone resource will\nautorequire that directory.\n\n",
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