const { EmbedBuilder } = require("discord.js")
const { Snake } = require('discord-gamecord');
const { prefix, color } = require("../../ayarlar.js")
exports.run = async (client, message, args) => {

     const Game = new Snake({
          message: message,
          isSlashGame: false,
          embed: {
               title: 'Yılan Oyunu',
               overTitle: 'Game Over',
               color: '#5865F2'
          },
          emojis: {
               board: '⬛',
               food: '🍎',
               up: '⬆️',
               down: '⬇️',
               left: '⬅️',
               right: '➡️',
          },
          snake: { head: '🟢', body: '🟩', tail: '🟢', skull: '💀' },
          foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
          stopButton: 'Durdur',
          timeoutTime: 60000,
          playerOnlyMessage: 'Bu düğmeleri yalnızca {player} kullanabilir.'
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
     name: "snake",
     desc: "Yılan oyununu oynarsın."
}