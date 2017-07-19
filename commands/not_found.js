exports.run = (client, message, args, config, u, err) => {
  // u.display_mes is for corect display of the message
  // use 'u.mes' like it's obtain by 'const u.mes = require('messages.json')'
  message.reply('Can\'t find the command: \n```'+err+'```')
}