module.exports = {
  name: 'test',
  channel: 'all',
  permission: 'all',
  run: function (client, message, info) {
    message.channel.send(info.args)
  }
}
