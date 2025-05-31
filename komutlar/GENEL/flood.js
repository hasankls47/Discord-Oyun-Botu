const { EmbedBuilder } = require("discord.js")
const { Flood } = require('discord-gamecord');
const { prefix, color } = require("../../ayarlar.js")

exports.run = async (client, message, args) => {

     const Game = new Flood({
          message: message,
          isSlashGame: false,
          embed: {
               title: 'Flood',
               color: '#5865F2',
          },
          difficulty: 13,
          timeoutTime: 60000,
          buttonStyle: 'PRIMARY',
          emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
          winMessage: 'Sen kazandın! **{turns}** dönüş yaptınız.',
          loseMessage: 'Kaybettin! **{turns}** dönüş yaptınız.',
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
     name: "flood",
     desc: "Flood oyununu oynarsın."
}