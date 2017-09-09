var config = require('../data/config.json')

module.exports = function (client, message, info) {
  // Define prefix

  if (config.prefix === 'mention') {
    info.prefix = `<@${client.user.id}>`
  } else {
    info.prefix = config.prefix
  }

  // Test if there is the prefix
  if (!message.content.startsWith(info.prefix)) return

  return require('./ArgsAndCommand.js')(client, message, info)
}
