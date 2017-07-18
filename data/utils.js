const config = require('./config.json')
const messages = require('./messages.json')

/*
	This file provide some tools for the bot
*/



exports.display_mes = (text, args) => {
	if (text.includes('<bot>')) {
		var responce = text.replace("<bot>", `${config.name}`)
	} else if (text.includes('<error>')) {
		var responce = text.replace("<error>", `${args}`)
	} else if (text.includes('<server>')) {
    var responce = text.replace("<server>", `${args}`)
  } else if (text.includes('<prefix>')) {
    var responce = text.replace("<prefix>", `${config.prefix}`)
  } else if (text.includes('<placeholder>')) {
    var responce = text.replace("<placeholder>", `${args}`)
  } else if (text.includes('<command>')) {
    var responce = text.replace("<command>", `${args}`)
  } 
	return responce
}

exports.mes = messages