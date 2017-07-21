# ContainScord

[![Known Vulnerabilities](https://snyk.io/test/github/jaymun723/containscord/badge.svg)](https://snyk.io/test/github/jaymun723/containscord) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://choosealicense.com/licenses/mit/) [![Node version](https://img.shields.io/badge/node-v6.0.0%2B-14ace8.svg)](https://nodejs.org/) [![Build](https://api.travis-ci.org/Jaymun723/ContainScord.svg?branch=master)](https://travis-ci.org/Jaymun723/ContainScord)


>**A container to easily make discord bot!**

For beginners in discord.js, just focus on command, not on the login, the prefix, args etc ... ContainScord do the rest ! For people how knows more about discord.js you don't have to write an endless if/else statement and you will clearly see all commands and events.

## Why?

Because... No, seriously at the beginning I made this container for me because I don't want to recod everything for each bot that I create. That really helps me and I think someone can also find this helpful... so I share this!

## Installation _(for windows)_

To install the bot you need node.js 6.0.0 or newer. Clone or download this repository then open a cmd with shift+rightclick -> open command windows here. In the cmd type `npm install` to install dependencies. Configure config.json (add yout token put your prefix etc...). When your okay type `npm start` use the link to invite the bot to your server and...
The bot is launched !!! Now you need to code the commands and the event or grab them...

## Creating a command

Create your commands in the command directory. 
> Example: I want a ping command
So I create a file named ping.js in the commands directory. In the file I write the basic requirement:
```javascript
exports.run = function (client, message, args, config, messages, utils) {}
```
In the two {} I write my code for example:
```javascript
message.channel.send('pong!')
```
So in my file named ping.js I write:
```javascript
//Requirement
exports.run = function (client, message, args, config, messages, utils) {
	//My code
	message.channel.send('pong!')
}
```
And if I write <prefix>ping in discord the bot reply me 'pong!'
Magic ! (and I think simple)

## Creating an event 

Want to use an event ? Write it in the events directory
> Example: I want that my bot message new user
So I create a file named <what you want>.js in the events directory. In the file I write the basic requirement: 
```javascript
exports.name = "guildMemberAdd" 
// 'guildMemberAdd' is the name of the event file all events here: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channelCreate
exports.args = "member"
// 'member' is the argument how we want to use in the event
exports.run = function (client, member) {}
// remember 'member' is the argument how we define just before
```
In the two {} I write my code for example:
member.send('Hi welcome to '+member.guild.name)
So in my file named <what you want>.js I write:
```javascript
//Requirement
exports.name = "guildMemberAdd" 
exports.args = "member"
exports.run = function (client, member) {
	//My code
	member.send('Hi, welcome to '+member.guild.name)
}
```
And if a new user connected to the server he receives 'Hi, welcome to <name of the server>'
That's all! (for the event)

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
