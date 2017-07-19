// Basic requirement
const u = require('./../data/utils.js')
const config = require('./../data/config.json')

// Theses two line replace the client.on('', () => {})
// Name correspond to client.on('name', ... etc)
// Args correspond to client.on('', (args) ... etc)
exports.name = "ready"
exports.args = ""

// In the exports put the things you normaly put in client.on('', () => {things})
exports.run = (client, args) => {
	// utils.display_mes is for corect display of the message
	console.log(config.name+' is ready to work !')
  console.log('Link to invite the bot: https://discordapp.com/oauth2/authorize?client_id='+client.user.id+'&scope=bot')
}