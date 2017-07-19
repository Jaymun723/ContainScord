// Theses three exports add required
exports.name = "guildMemberAdd" 
exports.args = "member"

// Send a message to new member
exports.run = function (client, member) {
	member.send('Hi welcome to '+member.guild.name)
}