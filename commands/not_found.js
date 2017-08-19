exports.run = function (client, message, args, config, err, command) {
  message.reply('Can\'t find the command: `' + command + '` \nError:```' + err + '```')
}
