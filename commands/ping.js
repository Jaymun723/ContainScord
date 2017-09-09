// Export the command
module.exports = {
  // Name of the command
  name: 'ping',

  // Support: 'all', 'dm', 'text', or a channel name like '#bot_command'
  channel: 'all',

  // Description (optional for external use like info.commands.<name>.desc):
  description: 'A ping command to explain how works ContainScord.',

  // Execution of the command
  run: function (client, message, info) {
    // My code
    message.channel.send('pong!')
  }
}
