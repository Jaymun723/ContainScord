// Export the event
module.exports = {
  // Name of the event
  name: 'guildMemberAdd',

  // This code of the event
  run: function (client, member) {
    member.send('Hi welcome to ' + member.guild.name)
  }
}
