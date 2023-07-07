const Discord = require("discord.js");
const moment = require("moment");

exports.run = (client, message, args, config, dir) => {
  
  var embed = new Discord.RichEmbed()
  
  //AFK Channel Checker
    var rafk;
    try {
      rafk = message.guild.afkChannel.name;
    } catch (e) {
      rafk = "N/A";
    }
  try{
    message.channel.send(embed.setTitle("⸻⸻⸻=[ Server Info ]=⸻⸻⸻")
                          .addField(":name_badge: Server Name", "``" + message.guild.name + "``", true)
                          .addField(":crown: Server Owner", "``" + message.guild.owner.user.username + " #" + message.guild.owner.user.discriminator + "``", true)
                          .addField(`:file_cabinet: Total Channels: 「${message.guild.channels.size}」`, 
                                    `Text: **「${message.guild.channels.filter(c => c.type === "text").size}」**\nVoice: **「${message.guild.channels.filter(c => c.type === "voice").size}」**\nCategories: **「${message.guild.channels.filter(c => c.type === "category").size}」**`, true)
                          .addField(`:busts_in_silhouette: Total Members: ⟨${message.guild.members.size}⟩`,
                                    `Users: **⟨${message.guild.members.filter(u => !u.user.bot).size}⟩**
Bots: **⟨${message.guild.members.filter(b => b.user.bot).size}⟩**`, true)
                          .addField(":clipboard: About Server", `**Verification Level:** ${message.guild.verificationLevel}
**AFK Channel:** ${rafk}
**Region:** ${message.guild.region}
**Created At:** ${moment(message.guild.createdAt).format('MMMM Do YYYY')}`, true)
                          .addField(":book: Additional Information", `**Current User:** <@${message.author.id}>
**Current Channel:** <#${message.channel.id}>
**Joined At:** ${moment(message.member.joinedAt).format('MMMM Do YYYY')}`, true)
                          .addField(`:globe_with_meridians: Server Roles: ❮${message.guild.roles.size}❯`, "Use the `roles` command to display roles.")
                          .setTimestamp()
                          .setThumbnail(message.guild.iconURL)
                          .setColor("#9CA0A3")
                          .setFooter("dicci.js© 2019", client.user.displayAvatarURL)
  
                     );
  } catch(e) {
    message.channel.send("Your server has too many roles.")
  }
}