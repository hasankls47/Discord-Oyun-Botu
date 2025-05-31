const { EmbedBuilder } = require("discord.js")
const { Minesweeper } = require('discord-gamecord');
const { prefix, color } = require("../../ayarlar.js")

exports.run = async (client, message, args) => {

     const Game = new Minesweeper({
          message: message,
          isSlashGame: false,
          embed: {
               title: 'Mayın Tarlası',
               color: '#5865F2',
               description: 'Mayınlar dışındaki blokları ortaya çıkarmak için butonlara tıklayın.'
          },
          emojis: { flag: '🚩', mine: '💣' },
          mines: 5,
          timeoutTime: 60000,
          winMessage: 'Oyunu kazandın! Tüm mayınlardan başarıyla kaçındınız.',
          loseMessage: 'Oyunu kaybettin! Bir dahaki sefere mayınlara dikkat edin.',
          playerOnlyMessage: 'Bu düğmeleri yalnızca {player} kullanabilir.'
     });

     Game.startGame();
     Game.on('gameOver', result => {
          return;
     });

}
exports.conf = {
     aliases: ["mayıntarlası"]
}
exports.help = {
     name: "mayın-tarlası",
     desc: "Mayın tarlası oyununu oynarsın."
}