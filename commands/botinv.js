const Discord = require("discord.js");

exports.run = (client, message, args, config, dir) => {
  
  const em = new Discord.RichEmbed();
  const bot = client.fetchUser(args[0])
  
  bot.then(b => {
    if (!b.bot) return message.channel.send("That user ain't a bot!");
    if (message.guild.members.has(args[0])) return message.channel.send("Bot is already in this server!");
    
    message.delete()
    
    em.setTitle("Bot Invitation")
      .setDescription(`Thank you for submitting your bot, <@${message.author.id}>. Your bot will be invited [here](https://discordapp.com/oauth2/authorize?client_id=${args[0]}&scope=bot&permissions=1).`)
      .setColor("#00a7e9")
      .setFooter("dicci.js© 2019", client.user.displayAvatarURL)
      .setTimestamp()
      .setThumbnail(b.displayAvatarURL)
      .addField("Name", `<@${b.id}>`, true)
      .addField("Bot ID", `\`${b.id}\``, true)
      .addField("Bot Prefix", `\`${args[1]}\``, true)
      .addField("Requester", `<@${message.author.id}>`, true)
    
      message.channel.send(em);
  })
}