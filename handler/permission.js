var config = require('../data/config.json')
var roles = require('../data/permissions.js')

module.exports = function (client, message, info) {
  // iIf everybody can use the command
  if (info.commands[`${info.command}`].permission.toLowerCase() === 'all') {
    // Execute the command
    info.commands[`${info.command}`].run(client, message, info)
    // And log
    return require('./log.js')(client, message, info)
  } else if (info.commands[`${info.command}`].permission.toLowerCase() === 'owner' && `${message.author.username}#${message.author.discriminator}` === config.owner) {
    // Execute the command
    info.commands[`${info.command}`].run(client, message, info)

    // And log
    return require('./log.js')(client, message, info)
  } else if (roles.includes(info.commands[`${info.command}`].permission) && message.member.hasPermission(info.commands[`${info.command}`].permission)) {
    // Execute the command
    info.commands[`${info.command}`].run(client, message, info)

    // And log
    return require('./log.js')(client, message, info)
  } else if (message.member.roles.has(message.guild.roles.find('name', info.commands[`${info.command}`].permission).id)) {
    // Execute the command
    info.commands[`${info.command}`].run(client, message, info)

    // And log
    return require('./log.js')(client, message, info)
  } else if (config.no_permission_msg) {
    // Use the -error file to handle command like this:
    info.error = 'You don\'t have engouth permission to do this command...'
    require('../commands/-error.js')(client, message, info)

    // And lof the command
    return require('./log.js')(client, message, info)
  }
}
