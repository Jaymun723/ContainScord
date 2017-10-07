var config = require('../data/config.json')

module.exports = function (client, message, info) {
  // Define prefixes
  info.prefixes = config.prefixes
  if (info.prefixes.includes('mention')) {
    info.prefixes[info.prefixes.indexOf('mention')] = `<@${client.user.id}> `
  }

  info.prefix = false
  for (var thisPrefix of info.prefixes) {
    if (message.content.startsWith(thisPrefix)) {
      info.prefix = thisPrefix
    }
  }

  if (!info.prefix) return

  // // Test if there is the prefix
  // if (!message.content.startsWith(info.prefix)) return

  return require('./ArgsAndCommand.js')(client, message, info)
}
