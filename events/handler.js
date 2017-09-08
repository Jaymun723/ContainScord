/*
  If you remove this file commands will not work !
  Caution while modifing this !
*/

// Basic requirement
var fs = require('fs')
var path = require('path')

var commands = {}

// Read the commands directory
fs.readdir('./commands', function (err, files) {
  if (err) return console.error(err)
  console.log('Commands loaded:')
  files.forEach(function (file) {
    // Tip: disable command to be loaded by puting a '-' as first char
    if (!`${file}`.startsWith('-')) {
      // Create properties for the var commands
      commands[`${require(path.join(__dirname, '../commands/', file)).name}`.toLowerCase()] = require(path.join(__dirname, '../commands/', file))
      console.log(require(path.join(__dirname, '../commands/', file)).name)
    }
  })
})

// Requirement to reconize this file as a event file
module.exports = {
  name: 'message',
  args: 'message',
  run: function (client, message) {
    // Basic info object
    var info = {
      commands: commands,
      error: 'No error...'
    }
    // Fire-up the handler
    require('../handler/botception.js')(client, message, info)
  }
}
