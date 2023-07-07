const Discord = require("discord.js");
const footer = "dicci.js© 2018 || Powered by discord.js || Hosted on Glitch.com";
const desc = "**dicci.js** is a Discord bot made with the library ``discord.js`` in ``Javascript`` by **Galaxy Crusher** with **Respire**. **dicci.js** was modeled after **DICCI**, it's predecessor, but better. You can also vote for **dicci.js** [here](https://discordbots.org/bot/437241012281278485/vote).";

exports.run = (client, message, args, config, dir) => {
const me = client.fetchUser("189652275499761665")
me.then(user => {message.channel.send({embed: new Discord.RichEmbed()  
                                            .setAuthor(user.username, user.displayAvatarURL, "https://glitch.com/@galaxycrusher")
                                            .setTitle("dicci.js Information")
                                            .setDescription(desc)
                                            .setThumbnail(client.user.displayAvatarURL)
                                            .setURL("https://discordbots.org/bot/437241012281278485")
                                            .setFooter(footer, client.user.displayAvatarURL)
                                            .setColor("#7283ff")
                                      })});
}