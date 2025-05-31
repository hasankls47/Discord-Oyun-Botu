const { EmbedBuilder } = require("discord.js")
const { prefix, color } = require("../../ayarlar.js")
exports.run = async (client, message, args) => {
     const commands = client.commands.map(h => `**${prefix}${h.help.name}** - ${h.help.desc}`).join("\n")
     const embed = new EmbedBuilder()
          .setAuthor({ name: `${message.guild.name}`, iconURL: message.guild.iconURL() })
          .setDescription(`${commands}`)
          .setColor(color)
          .setTitle("Yardım Menüsü")
          .setThumbnail(message.guild.iconURL())
          .setTimestamp()
          .setFooter({ text: `Oyun Sistemi`, iconURL: message.author.avatarURL() })
     message.channel.send({ embeds: [embed] })
}
exports.conf = {
     aliases: ["yardim"]
}
exports.help = {
     name: "yardım",
     desc: "Botun yardım menüsünü görürsün."
}