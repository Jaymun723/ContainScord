// File to handle error
// Put error in the info object like this:
// info.error = 'Error message'
// Then use like this: require('-error.js')(client, message, info)
module.exports = function (client, message, info) {
  // My code
  message.channel.send('An error as ocured: **' + info.error + '**.')
}
