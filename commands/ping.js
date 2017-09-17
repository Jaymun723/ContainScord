// Export the command
module.exports = {
  // Name of the command
  name: 'ping',

  // Support: 'all', 'dm', 'text', or a channel name like '#bot_command'
  channel: 'all',

  // Description (optional for external use like info.commands.<name>.desc):
  description: 'A ping command to explain how works ContainScord.',

  // Support: 'all' (for all people)
  //          'owner' (only the owner)
  //          'KICK_MEMBERS' (discord permission, link to see all of them: https://goo.gl/Zcxwko or chec the role.js file in the data directory)
  //           /!\ Case sensitive
  //          'admin' (Discord Role)
  //           /!\ Case sensitive
  permission: 'all',

  // Execution of the command
  run: function (client, message, info) {
    // My code
    message.channel.send('pong!')
  }
}
