const { EmbedBuilder } = require("discord.js")
const { MatchPairs } = require('discord-gamecord');
const { prefix, color } = require("../../ayarlar.js")
exports.run = async (client, message, args) => {

     const Game = new MatchPairs({
          message: message,
          isSlashGame: false,
          embed: {
               title: 'Emoji Eşleştirme',
               color: '#5865F2',
               description: '**Emojileri çiftleriyle eşleştirmek için düğmelere tıklayın.**'
          },
          timeoutTime: 60000,
          emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
          winMessage: '**Oyunu kazandın! Toplam `{tilesTurned}` döşemeyi çevirdiniz.**',
          loseMessage: '**Oyunu kaybettin! Toplam `{tilesTurned}` döşemeyi çevirdiniz.**',
          playerOnlyMessage: 'Bu düğmeleri yalnızca {player} kullanabilir.'
     });
     Game.startGame();
     Game.on('gameOver', result => {
          return;
     });
}
exports.conf = {
     aliases: ["emojibulmaca", "emoji-eşleştirme", "emojieşleştirme"]
}
exports.help = {
     name: "emoji-bulmaca",
     desc: "Emoji eşleştirme oyunu oynarsın."
}