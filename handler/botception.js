module.exports = function (client, message, info) {
  // This line prevent from a botception
  if (message.author.bot) return
  // Else go to an another handler file
  return require('./prefix.js')(client, message, info)
}
