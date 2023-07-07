const Discord = require("discord.js")

exports.run = (client, message, args, config, dir) => {
  if (!args[0]) {return message.guild.fetchInvites().then(inv => {message.channel.send(`Here you go: https://discord.gg/${inv.first(1)[0].code}`)});}
  
  const em = new Discord.RichEmbed()
  const user = client.fetchUser(args[0])
  
  user.then(u => {
    if (u.bot) return message.channel.send("That's a bot, stop trying to make friends.");
    if (message.guild.members.has(args[0])) return message.channel.send("That boi is already in the server!");
    message.guild.fetchInvites().then(inv => {u.send(`<@${message.author.id}> has sent you an invite to join https://discord.gg/${inv.first(1)[0].code}`)});
    message.channel.send(`<@${message.author.id}> has sent an invite to <@${u.id}>.`);
  })
}