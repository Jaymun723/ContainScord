const config = require('./config.json')
const messages = require('./messages.json')

/*
	This file provide some tools for the bot
*/



exports.display_mes = (text, arg) => {
	if (text.includes('<bot>')) {
		var responce = text.replace("<bot>", `${config.name}`)
	} else if (text.includes('<error>')) {
		var responce = text.replace("<error>", `${arg}`)
	} else if (text.includes('<server>')) {
    var responce = text.replace("<server>", `${arg}`)
  } else if (text.includes('<prefix>')) {
    var responce = text.replace("<prefix>", `${config.prefix}`)
  } else if (text.includes('<placeholder>')) {
    var responce = text.replace("<placeholder>", `${arg}`)
  } else if (text.includes('<command>')) {
    var responce = text.replace("<command>", `${arg}`)
  } 
	return responce
}

exports.mes = messages