// Basic requirement
const config = require('./../data/config.json')

// Export the event
module.exports = {
  // Name of the event
  name: 'ready',

  // Args if the event
  args: '',

  run: function (client, args) {
    console.log(config.name + ' is ready to work !')
    console.log('Link to invite the bot: https://discordapp.com/oauth2/authorize?client_id=' + client.user.id + '&scope=bot')
  }
}
