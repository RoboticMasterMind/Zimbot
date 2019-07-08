const commando = require('discord.js-commando')

class NewTeamCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'newteam',
            group: 'team',
            memberName: 'newteam',
            description: 'Creates a new team'
        });
    }

    async run(message, args){
        
        zimTeamMembers = []
        dibTeamMembers = []
        message.channel.sendMessage("Existing Team members have been reset.");

    }
}
module.exports = NewTeamCommand