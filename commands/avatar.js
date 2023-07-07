const Discord = require("discord.js");
const sm = require("string-similarity");

exports.run = (client, message, args, config, dir) => {
  
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
    definedUser = message.author
  } else {
    definedUser = message.mentions.users.first() || member.user
  }
  
  message.channel.send({embed: new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setTitle(`${definedUser.username}'s avatar`)
                        .setImage(definedUser.displayAvatarURL)
                        .setURL(definedUser.displayAvatarURL)
                        .setFooter("dicci.js© 2019", client.user.displayAvatarURL)
                       });
}