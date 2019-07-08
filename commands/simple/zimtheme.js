const commando = require('discord.js-commando')

class zimthemeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'zimtheme',
            group: 'simple',
            memberName: 'zimtheme',
            description: 'Returns a youtube link to the invader zim theme opening song.'
        });
    }

    async run(message, args){
        
        message.channel.sendMessage("https://www.youtube.com/watch?v=WgX2cu9N6_8");

    }
}
module.exports = zimthemeCommand