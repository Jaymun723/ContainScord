# ContainScord

[![Known Vulnerabilities](https://snyk.io/test/github/jaymun723/containscord/badge.svg)](https://snyk.io/test/github/jaymun723/containscord) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://choosealicense.com/licenses/mit/) [![Node version](https://img.shields.io/badge/node-v8.4.0%2B-14ace8.svg)](https://nodejs.org/) [![Build](https://api.travis-ci.org/Jaymun723/ContainScord.svg?branch=master)](https://travis-ci.org/Jaymun723/ContainScord)


> **A container to easily make discord bot!**

For beginners in discord.js, just focus on command, not on the login, the prefix, args etc ... ContainScord do the rest ! For people how knows more about discord.js you don't have to write an endless if/else statement and you will clearly see all commands and events.

## Why use ContainScord ?

ConatinScord is fully customisable, fast, simple, clear. Feathuring:
 * Customisable command hanlder
 * Easy prefix: support mention, single chart, words (like 'pls ') and much more !
 * Clear event code
 * [CLI](https://github.com/Jaymun723/ContainScord-CLI)
 * Symply create commands

## Installation without the cli _(for windows)_ 

To install the bot you need node.js 8.4.0 or newer. Clone or download this repository then open a cmd with shift+rightclick -> open command windows here. In the cmd type `npm install` to install dependencies. Configure config.json (add yout token put your prefix etc...). When your okay type `node index.js` use the link to invite the bot to your server and...
The bot is launched !!! Now you need to code the commands and the event or grab them...

## Installation with the cli

Refere to this: https://github.com/Jaymun723/ContainScord-CLI#readme

## Creating a command

Go to the `commands` directory and create a new file with extension `.js`.
Paste in the basic requirement:
```javascript
module.exports = {
  name: '',
  channel: '',
  permission: '',
  run: function (client, message, info) {

  }
}
```
The `name` field is what people must type to invoke the command. The `channel` field is where the command can be invoked. Support: all, dm, text, and a channel name like #botcommand. The `permission` field restrict a command to specific role / permission. Support: all, owner, a permission name like KICK_MEMBERS or a role name like admin. The `run` field is where the magic happends ! In the function put your code ! **Important** ContainScord use [Discord.js](https://discord.js.org/#/) so in the function refere to [discord.js documentation](https://discord.js.org/#/docs/main/stable/general/welcome).

## Example command

```javascript
// Export the command
module.exports = {
  // Name of the command
  name: 'example',

  // Support: 'all', 'dm', 'text', or a channel name like '#bot_command'
  channel: 'all',

  // Description (optional for external use like info.commands.<name>.desc):
  description: 'Example description...',

  // Support: 'all' (for all people)
  //          'owner' (only the owner)
  //          'KICK_MEMBERS' (discord permission, link to see all of them: https://goo.gl/Zcxwko or chec the role.js file in the data directory)
  //           /!\ Case sensitive
  //          'admin' (Discord Role)
  //           /!\ Case sensitive
  permission: 'all',

  // Execution of the command
  run: function (client, message, info) {
    message.reply('Here is an exemple !')
  }
}
```
This code create a command named 'example' how works everywhere and when it's use __(like '<prefix>example')__ it reply to you 'Here is an exemple'.

## Creating events

Look at event that already writed to learn how they works.

## Handler

To learn how the command handler work look first at handler event then follow the code. Normally you will pass by the file in the handler directory...

## Suggestion & bugs

For bugs please use github issues and for suggestion use pull request or contact me at jaymun723@yahoo.com.

## Other stuff

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

If you found English error I'm sorry (I'm french)
ContainScord isn't an API it's container to make simplify the creation of command / events. 
ContainScord use discord.js.
* [Discord.js Website](https://discord.js.org/#/)
* [Discord.js Discord server](https://discord.gg/bRCvFy9)

## License

Read LICENSE for more informations.
And if you don't want to read all the license here is a website how explain the license clearly: https://choosealicense.com/licenses/mit/
