const Discord = require("discord.js");
const db = require("quick.db");
var Prefix = new db.table("CustomPrefix")
const fc = require("file-count")

exports.run = (client, message, args, config, dir) => {
  Prefix.fetch(message.guild.id).then(p => {
    let result;
    const em = new Discord.RichEmbed()
   
    //\n ​    36393E
    switch (args[0]) {
      case "info" :
        message.channel.send("**Informational** :book:\n**{} = Required, [] = Optional, | = Or. Do not include {}, [] or | when using command.**```css\nexpose [targetUserName | targetUserMention] - Shows user info\nhelp - Shows help\ninfo - Shows information about dicci\nprefix - Shows the current prefix\nserver - Shows information about server```")
        break
      case "search" :
        message.channel.send("**Online Search** :mag_right:\n**{} = Required, [] = Optional, | = Or. Do not include {}, [] or | when using command.**```css\ngoogle {query} - Searches Google and returns the first 5 results\nimg {query} - Searches GoogleImage and returns the top image\nmal - Returns information about manga/anime from MyAnimeList\nmcserver {serverIP} - Shows information about the Minecraft server\nmcskin {playerName} - Currently Under Maintenance\nnpm {packageName} - Searches npm and shows information about package\nrimg {query} - Searches GoogleImage and returns a random image\nsteam {gameName} - Searches Steam for game\nurban {query} - Searches UrbanDictionary and returns the top result```")
        break
      case "misc" :
        message.channel.send("**Miscellaneous** :gear:\n**{} = Required, [] = Optional, | = Or. Do not include {}, [] or | when using command.**```css\nascii {text} - Turns text into Ascii style\navatar [targetUserName | targetUserMention] - Shows user avatar\nbotinv {botId} {prefix} - Shows bot info and invite link\ncowsay {text} - Makes the cow say something\ncowthink {text} - Makes the cow think about something\nemotes - Shows all custom emotes\ninv [targetUserId] - Shows server invite link or invites user to server [1]\nlol - LOL\nping- Pong!\nshorten {url} - Shortens the URL\nroles - Shows server roles\n\n[1]dicci and the target user must have a mutual server```")
        //ascii avatar botinv cowsay cowthink emotes inv lol ping prefix shorten
        break
      case "owner" :
        message.channel.send("**Server Owner Specific** :bust_in_silhouette:\n**{} = Required, [] = Optional, | = Or. Do not include {}, [] or | when using command.**```css\ndelprefix - Deletes custom prefix\ndisable - Disables specific commands\nenable - Enable disabled commands\nsetnick - Sets members' nicknames\nsetprefix - Sets custom prefix```")
        //delprefix disable enable setnick setprefix
        break  
      default :
        fc(__dirname, (err, res) => {
          em.setTitle(":regional_indicator_h::regional_indicator_e::regional_indicator_l::regional_indicator_p: :books:\n ​")
            .setDescription(`\`${p}\` is the bot prefix. Total Commands: \`${res - 1}\`\nFor more details on commands please head to [DiscordBots](https://discordbots.org/bot/437241012281278485).\n ​`)
            .addField("Informational :book:", "``help info``")
            .addField("Online Search :mag_right:", "``help search``")
            .addField("Miscellaneous :gear:", "``help misc``")
            .addField("Server Owner Specific :bust_in_silhouette:", "``help owner``")
            .setTimestamp()
            .setFooter("dicci.js© 2019", client.user.displayAvatarURL)
            .setColor("#358FDB");
        })
        setTimeout(() => message.channel.send(em), 100)
        break;     
    }
  })
}
//misc
//ascii avatar botinv cowsay cowthink emotes expose inv lol ping prefix shorten
//owner
//delprefix disable enable setnick setprefix