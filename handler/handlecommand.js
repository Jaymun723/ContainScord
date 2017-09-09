var config = require('../data/config.json')

module.exports = function (client, message, info) {
  // If the command exist
  if (info.commands[`${info.command}`] !== undefined) {
    // If all textchannel are compatible:
    if (info.commands[`${info.command}`].channel.toLowerCase() === 'all') {
      // Run the command
      info.commands[`${info.command}`].run(client, message, info)
      // Set the loc of the command...
      message.channel.type === 'dm' ? info.loc = 'dm' : info.loc = `${message.guild.name} #${message.channel.name}`
      // ... and log
      return require('./log.js')(client, message, info)
    // Tip: restrict a command to dm by set 'dm' in the command the file or 'text' to restrict to guild textchannel
    // If just dm or textchannel are compatible:
    } else if (info.commands[`${info.command}`].channel.toLowerCase() === message.channel.type) {
      // Run the command
      info.commands[`${info.command}`].run(client, message, info)
      // And log
      message.channel.type === 'dm' ? info.loc = 'dm' : info.loc = `${message.guild.name} #${message.channel.name}`
      return require('./log.js')(client, message, info)
    // If jsust a specific textchannel name is allowed
    } else if (info.commands[`${info.command}`].channel.startsWith('#') && info.commands[`${info.command}`].channel.toLowerCase().replace('#', '') === message.channel.name.toLowerCase()) {
      // Run the command
      info.commands[`${info.command}`].run(client, message, info)
      // And log
      info.loc = `${message.guild.name} #${message.channel.name}`
      return require('./log.js')(client, message, info)
    }
  // else if not found messge is activated
  } else if (config.not_found_msg) {
    // Use the -error file to handle command like this:
    info.error = 'Command not found...'
    require('../commands/-error.js')(client, message, info)

    // Log the command
    message.channel.type === 'dm' ? info.loc = 'dm' : info.loc = `${message.guild.name} #${message.channel.name}`
    return require('./log.js')(client, message, info)
  }
}
