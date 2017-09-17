var config = require('../data/config.json')

module.exports = function (client, message, info) {
  // If the command exist
  if (info.commands[`${info.command}`] !== undefined) {
    // If all location are compatible:
    if (info.commands[`${info.command}`].channel.toLowerCase() === 'all') {
      // Set the location the command...
      message.channel.type === 'dm' ? info.loc = 'dm' : info.loc = `${message.guild.name} #${message.channel.name}`

      // And fire up the next file
      return require('./permission.js')(client, message, info)

    // Tip: restrict a command to dm by set 'dm' in the command the file or 'text' to restrict to guild textchannel
    // If just dm or textchannel are compatible:
    } else if (info.commands[`${info.command}`].channel.toLowerCase() === message.channel.type) {
      // Set the location of the command
      message.channel.type === 'dm' ? info.loc = 'dm' : info.loc = `${message.guild.name} #${message.channel.name}`

      // And fire up the next file
      return require('./permission.js')(client, message, info)

    // If just a specific textchannel name is allowed
    } else if (info.commands[`${info.command}`].channel.startsWith('#') && info.commands[`${info.command}`].channel.toLowerCase().replace('#', '') === message.channel.name.toLowerCase()) {
      // Set the location of the command
      info.loc = `${message.guild.name} #${message.channel.name}`

      // And fire up the next file
      return require('./permission.js')(client, message, info)
    } else if (config.not_correct_channel_msg) {
      // Use the -error file to handle command like this:
      info.error = 'Wrong place to use the command...'
      require('../commands/-error.js')(client, message, info)

      // Log the command
      message.channel.type === 'dm' ? info.loc = 'dm' : info.loc = `${message.guild.name} #${message.channel.name}`
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
