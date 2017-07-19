/*
  If you remove this file commands will not work !
  Caution while modifing this !
*/

const config = require('./../data/config.json')

exports.name = "message"
exports.args = "message"

exports.run = (client, message) => {
  // Preventing a infinite loop with other bot
  if (message.author.bot) return
  
  // Define var args and command
  var args
  var command

  if (config.prefix === "mention") {
    // Define the prefix 
    const prefix = `<@${client.user.id}>`

    // Is there isn't the prefix stop 
    if (!message.content.startsWith(prefix)) return

    // Define args
    // Ex: @Bot#1234 commands true @badGuy#1234 No swag
    // args[0] = true, args[1] = @badGuy#1234, args[2] = No, args[3] = swag ... etc
    args = message.content.split(/\s+/g).slice(2)

    // Define command
    // Ex: @Bot#1234 ping
    // command = ping 
    command = message.content.split(/\s+/g).slice(1)[0].toLowerCase()

  } else {
    // Is there isn't the prefix stop
    if(!message.content.startsWith(config.prefix)) return

    // Define args
    // Ex: !commands true @badGuy#1234 No swag
    // args[0] = true, args[1] = @badGuy#1234, args[2] = No, args[3] = swag ... etc
    args = message.content.split(/\s+/g).slice(1)

    // Define command
    // Ex: !ping
    // command = ping 
    command = message.content.split(/\s+/g)[0].slice(config.prefix.length).toLowerCase()
  }


  // This code is for the console_on_command (in config.json)
  if (config.console_on_command === "true") {
    if (args) {
      console.log(message.author.username+' in '+message.guild.name+' -> '+command+' '+args.join(' '))
    } else {
      console.log(message.author.username+' in '+message.guild.name+' -> '+command)
    }
  }

  // This code 'handle' the commands
  // Ex: write a file named ping.js in the commands directory to make a ping command
  try {
    var commandFile = require(`./../commands/${command}.js`)
    commandFile.run(client, message, args, config)
  } catch (err) {
    var notfoundFile = require('./../commands/error.js')
    notfoundFile.run(client, message, args, config, err)
  }
}