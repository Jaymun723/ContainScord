// Basic requirement
const config = require('./../data/config.json')

// Export the event
module.exports = {
  // Name of the event
  name: 'ready',

  // Code of the event
  run: function (client, args) {
    // Set the name
    client.user.setUsername(config.name)

    // Inform the console
    console.log(config.name + ' is ready to work !')
    console.log('Link to invite the bot: https://discordapp.com/oauth2/authorize?client_id=' + client.user.id + '&scope=bot')

    // set the play_msg
    if (config.play_msg !== '') {
      client.user.setGame(config.play_msg)
    }
  }
}
