// Export the event
module.exports = {
  // Name of the event
  name: 'guildMemberAdd',

  // Args if the event
  args: 'member',

  // This code of the event
  run: function (client, member) {
    member.send('Hi welcome to ' + member.guild.name)
  }
}
