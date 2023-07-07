const Discord = require("discord.js");
var i = 0;

exports.run = (client, message, args, config, dir) => {
  i++;
  
  if (i != "100") {
  message.channel.send(`:ping_pong: Pong! #${i} :satellite:: \`${Math.floor(client.ping)}ms\``)
  }
  else {
  message.channel.send(`:ping_pong: Pong! #${i} :satellite:: \`${Math.floor(client.ping)}ms\``)
  message.channel.send(":confetti_ball: You are the 100th person to use this command! :confetti_ball:")
  i = 0;
  }
}