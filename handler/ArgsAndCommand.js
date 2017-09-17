module.exports = function (client, message, info) {
  // Define the command and put him in the info object
  info.command = message.content.toLowerCase().slice(info.prefix.length).split(/\s+/g)[0]
  // Define the args and put them in the info object
  info.args = message.content.toLowerCase().slice(info.prefix.length + info.command.length).split(/\s+/g)

  return require('./textchannel.js')(client, message, info)
}
