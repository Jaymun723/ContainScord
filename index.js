const Discord = require('discord.js')
const fs = require('fs')

const client = new Discord.Client()
const config = require('./data/config.json')

client.login(config.token)

// fs.readdir read the /event/folder and return 'files'
fs.readdir('./events/', function (err, files) {
  if (err) return console.error(err)
  // For each file of 'files' this loop require 'file'.js
  files.forEach(function (file) {
  // If the file start with '-' stop
    if (file.charAt(0) === '-') return
    try {
      var eventFile = require(`./events/${file}`)
      var eventName = eventFile.name
      var eventArgs = eventFile.args
      client.on(eventName, function (eventArgs) { eventFile.run(client, eventArgs) })
    } catch (err) {
      console.error(err)
    }
  })
})
