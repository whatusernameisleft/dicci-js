const Discord = require("discord.js");
const moment = require("moment");
const sm = require("string-similarity");

exports.run = (client, message, args, config, dir) => {

  var em = new Discord.RichEmbed();
  let members = [];
  let indexes = [];
  message.guild.members.forEach(member => {
    members.push(member.user.username)
    indexes.push(member.id)
  })
  
  let match = sm.findBestMatch(args.join(' '), members);
  let username = match.bestMatch.target;
  
  let member = message.guild.members.get(indexes[members.indexOf(username)])
  let definedUser;
  if(!args[0]) {
    definedUser = message.member
  } else {
    definedUser = message.mentions.members.first() || message.guild.members.get(args[0]) || member
  }
  let self = `${definedUser.user.username} has exposed themselves!`
  let other = `${definedUser.user.username} has been exposed!`
  
    em.setAuthor(definedUser.id == message.author.id ? self : other, definedUser.user.displayAvatarURL)
      .setThumbnail(definedUser.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter("dicci.js© 2019", client.user.displayAvatarURL)
      .addField(":bust_in_silhouette: Username", `\`${definedUser.user.username}\``, true)
      .addField(":hash: Discriminator", `\`#${definedUser.user.discriminator}\``, true)
      .addField(":name_badge: Nickname",`\`${definedUser.nickname ? definedUser.nickname : "N/A"}\``,true)
      .addField(":video_game: Currently Playing", `\`${definedUser.presence.game ? definedUser.presence.game.name : "N/A"}\``, true)
      .addField(":satellite: Status", `\`${definedUser.presence.status}\``, true)
      .addField(":robot: Bot Account", `\`${definedUser.user.bot ? "True" : "False"}\``, true)
      .addField(":calendar_spiral: Created At", `\`${moment(definedUser.user.createdAt).format("MMMM Do YYYY")}\``, true)
      .addField(":calendar: Joined At", `\`${moment(definedUser.joinedAt).format("MMMM Do YYYY")}\``, true)
      .addField(":globe_with_meridians: Roles", definedUser.roles.map(role => `${role}`).sort().join(", ").replace(", @everyone", ""))
    
    message.channel.send(em);
}