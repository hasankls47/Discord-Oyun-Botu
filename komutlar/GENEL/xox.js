const { EmbedBuilder } = require("discord.js")
const { prefix, color } = require("../../ayarlar.js")
const { TicTacToe } = require('discord-gamecord');

exports.run = async (client, message, args) => {
     let user = message.mentions.users.first()
     if (!user) return message.reply({ content: `**Taş Kağıt Makas** oyununu oynayabilmek için birini etiketlemen gerekli.` })
     const Game = new TicTacToe({
          message: message,
          isSlashGame: false,
          opponent: message.mentions.users.first(),
          embed: {
               title: 'XoX',
               color: '#5865F2',
               statusTitle: 'Status',
               overTitle: 'Game Over'
          },
          emojis: {
               xButton: '❌',
               oButton: '🔵',
               blankButton: '➖'
          },
          mentionUser: true,
          timeoutTime: 60000,
          xButtonStyle: 'DANGER',
          oButtonStyle: 'PRIMARY',
          turnMessage: '{emoji} | Oyuncu sırası **{player}**.',
          winMessage: '{emoji} | **{player}** XoX Oyununu kazandı.',
          tieMessage: 'Oyun berabere kaldı! Oyunu Kazanan Kimse Yok!',
          timeoutMessage: 'Oyun yarım kaldı! Oyunu Kazanan Kimse Yok!',
          playerOnlyMessage: 'Bu butonları yalnızca {player} ve {opponent} kullanabilir.'
     });

     Game.startGame();
     Game.on('gameOver', result => {
          return;
     });

}
exports.conf = {
     aliases: []
}
exports.help = {
     name: "xox",
     desc: "İstediğin biriyle XoX oynarsın."
}