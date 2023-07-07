const Discord = require("discord.js");

exports.run = (client, message, args, config, dir) => {
    message.channel.send({embed: new Discord.RichEmbed()
                          .setAuthor("LegameMC Information", "https://tinyurl.com/legame-mc", "https://legamemc.weebly.com/")
                          .addField("__About__", "A **24/7 cracked** Malaysia based Minecraft server hosted by LeangHosting that was created by a small development team. **Active and friendly owners and staffs.** Head to our **Discord** server for other enquiries. We hope you enjoy your stay!")
                          .addField("__Links__", "[Discord](https://discord.gg/GvVHfRd)\n[Facebook Page](https://www.facebook.com/LegameMc/)\n[Facebook Group](https://www.facebook.com/groups/552565445086256/)\n[Official Website](https://legamemc.weebly.com/)\n[Store](https://legamemc.buycraft.net/)", true)
                          .addField("__Vote Links__", "[TopG](http://topg.org/Minecraft/in-480451)\n[MinecraftServers.org](http://minecraftservers.org/vote/474382)\n[Minecraft-Index](https://www.minecraft-index.com/61133-legamemc/vote)\n[Minecraft-MP](http://minecraft-mp.com/server/187181/vote/)\n[MinecraftServers.biz](https://minecraftservers.biz/servers/106753/vote/)", true)
                          .addField("__Current Gamemodes__", "**Factions\nSkyblock\nMinigames\nMore Coming Soon...**", true)
                          .setFooter("dicci.js© 2019 || play.legamemc.tk", client.user.avatarURL)
                          .setColor("#FCD285")
                     });
}