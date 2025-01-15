nexuscraft-cli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nexuscraft-cli.svg)](https://npmjs.org/package/nexuscraft-cli)
[![Downloads/week](https://img.shields.io/npm/dw/nexuscraft-cli.svg)](https://npmjs.org/package/nexuscraft-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g nexuscraft-cli
$ nexus COMMAND
running command...
$ nexus (--version)
nexuscraft-cli/1.2.0 darwin-arm64 node-v22.1.0
$ nexus --help [COMMAND]
USAGE
  $ nexus COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nexus connect`](#nexus-connect)
* [`nexus group create`](#nexus-group-create)
* [`nexus group delete`](#nexus-group-delete)
* [`nexus group start [GROUPNAME]`](#nexus-group-start-groupname)
* [`nexus group stop [FILE]`](#nexus-group-stop-file)
* [`nexus groups`](#nexus-groups)
* [`nexus help [COMMAND]`](#nexus-help-command)
* [`nexus plugins`](#nexus-plugins)
* [`nexus plugins add PLUGIN`](#nexus-plugins-add-plugin)
* [`nexus plugins:inspect PLUGIN...`](#nexus-pluginsinspect-plugin)
* [`nexus plugins install PLUGIN`](#nexus-plugins-install-plugin)
* [`nexus plugins link PATH`](#nexus-plugins-link-path)
* [`nexus plugins remove [PLUGIN]`](#nexus-plugins-remove-plugin)
* [`nexus plugins reset`](#nexus-plugins-reset)
* [`nexus plugins uninstall [PLUGIN]`](#nexus-plugins-uninstall-plugin)
* [`nexus plugins unlink [PLUGIN]`](#nexus-plugins-unlink-plugin)
* [`nexus plugins update`](#nexus-plugins-update)
* [`nexus server start [FILE]`](#nexus-server-start-file)
* [`nexus server stop [FILE]`](#nexus-server-stop-file)
* [`nexus servers`](#nexus-servers)
* [`nexus setup`](#nexus-setup)

## `nexus connect`

connect to the cloud

```
USAGE
  $ nexus connect [-s <value>] [-u <value>]

FLAGS
  -s, --secret=<value>    the secret to connect to the cloud
  -u, --username=<value>  the username to connect to the cloud

DESCRIPTION
  connect to the cloud

EXAMPLES
  $ nexus connect --u my-username --s my-secret
```

_See code: [src/commands/connect.ts](https://github.com/nexuscraft-app/cli/blob/v1.2.0/src/commands/connect.ts)_

## `nexus group create`

Create a new group on your cloud

```
USAGE
  $ nexus group create

DESCRIPTION
  Create a new group on your cloud

EXAMPLES
  $ nexus group create
```

_See code: [src/commands/group/create.ts](https://github.com/nexuscraft-app/cli/blob/v1.2.0/src/commands/group/create.ts)_

## `nexus group delete`

delete a group

```
USAGE
  $ nexus group delete

DESCRIPTION
  delete a group

EXAMPLES
  $ nexus group delete
```

_See code: [src/commands/group/delete.ts](https://github.com/nexuscraft-app/cli/blob/v1.2.0/src/commands/group/delete.ts)_

## `nexus group start [GROUPNAME]`

describe the command here

```
USAGE
  $ nexus group start [GROUPNAME]

DESCRIPTION
  describe the command here

EXAMPLES
  $ nexus group start
```

_See code: [src/commands/group/start.ts](https://github.com/nexuscraft-app/cli/blob/v1.2.0/src/commands/group/start.ts)_

## `nexus group stop [FILE]`

describe the command here

```
USAGE
  $ nexus group stop [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ nexus group stop
```

_See code: [src/commands/group/stop.ts](https://github.com/nexuscraft-app/cli/blob/v1.2.0/src/commands/group/stop.ts)_

## `nexus groups`

list all groups

```
USAGE
  $ nexus groups

DESCRIPTION
  list all groups

EXAMPLES
  $ nexus groups
```

_See code: [src/commands/groups.ts](https://github.com/nexuscraft-app/cli/blob/v1.2.0/src/commands/groups.ts)_

## `nexus help [COMMAND]`

Display help for nexus.

```
USAGE
  $ nexus help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for nexus.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.21/src/commands/help.ts)_

## `nexus plugins`

List installed plugins.

```
USAGE
  $ nexus plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ nexus plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/index.ts)_

## `nexus plugins add PLUGIN`

Installs a plugin into nexus.

```
USAGE
  $ nexus plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into nexus.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the NEXUS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NEXUS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ nexus plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ nexus plugins add myplugin

  Install a plugin from a github url.

    $ nexus plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ nexus plugins add someuser/someplugin
```

## `nexus plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ nexus plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ nexus plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/inspect.ts)_

## `nexus plugins install PLUGIN`

Installs a plugin into nexus.

```
USAGE
  $ nexus plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into nexus.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the NEXUS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NEXUS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ nexus plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ nexus plugins install myplugin

  Install a plugin from a github url.

    $ nexus plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ nexus plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/install.ts)_

## `nexus plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ nexus plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ nexus plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/link.ts)_

## `nexus plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ nexus plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nexus plugins unlink
  $ nexus plugins remove

EXAMPLES
  $ nexus plugins remove myplugin
```

## `nexus plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ nexus plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/reset.ts)_

## `nexus plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ nexus plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nexus plugins unlink
  $ nexus plugins remove

EXAMPLES
  $ nexus plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/uninstall.ts)_

## `nexus plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ nexus plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nexus plugins unlink
  $ nexus plugins remove

EXAMPLES
  $ nexus plugins unlink myplugin
```

## `nexus plugins update`

Update installed plugins.

```
USAGE
  $ nexus plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/update.ts)_

## `nexus server start [FILE]`

describe the command here

```
USAGE
  $ nexus server start [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ nexus server start
```

_See code: [src/commands/server/start.ts](https://github.com/nexuscraft-app/cli/blob/v1.2.0/src/commands/server/start.ts)_

## `nexus server stop [FILE]`

describe the command here

```
USAGE
  $ nexus server stop [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ nexus server stop
```

_See code: [src/commands/server/stop.ts](https://github.com/nexuscraft-app/cli/blob/v1.2.0/src/commands/server/stop.ts)_

## `nexus servers`

list all servers

```
USAGE
  $ nexus servers

DESCRIPTION
  list all servers

EXAMPLES
  $ nexus servers
```

_See code: [src/commands/servers.ts](https://github.com/nexuscraft-app/cli/blob/v1.2.0/src/commands/servers.ts)_

## `nexus setup`

setup a new network

```
USAGE
  $ nexus setup [-a] [-l <value>] [-n <value>] [--ram <value>] [-t <value>]

FLAGS
  -a, --autoUpdate    auto update the cli
  -l, --lang=<value>  language for the cli
  -n, --name=<value>  name of the network
  -t, --type=<value>  type of the network
      --ram=<value>   ram for the network

DESCRIPTION
  setup a new network

EXAMPLES
  $ nexus setup
```

_See code: [src/commands/setup.ts](https://github.com/nexuscraft-app/cli/blob/v1.2.0/src/commands/setup.ts)_
<!-- commandsstop -->
