const commando = require('discord.js-commando')

class JoinTeamZimCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'jointeamzim',
            group: 'team',
            memberName: 'jointeamzim',
            description: 'Joins team Zim'
        });
    }

    async run(message, args){
        
        zimTeamMembers.push(message.author);
        message.channel.sendMessage("Excellent choice! Choose me over the Dib creature. For I am far superior!");
    }
}
module.exports = JoinTeamZimCommand