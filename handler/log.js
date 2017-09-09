var config = require('../data/config.json')

module.exports = function (client, message, info) {
  if (config.console_on_command === true) {
    console.log(message.author.username + ' in ' + info.loc + ' -> ' + message.content)
  }
}
