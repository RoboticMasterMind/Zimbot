const commando = require('discord.js-commando')

class JoinTeamDibCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'jointeamdib',
            group: 'team',
            memberName: 'jointeamdib',
            description: 'Joins team Dib'
        });
    }

    async run(message, args){
        
        zimMember = zimTeamMembers
        
        if (zimMember.message.author) return;
        dibTeamMembers.push(message.author);
        message.channel.sendMessage("What! Why would you choose the Dib beast? His head is full of...of smell!");
    }
}
module.exports = JoinTeamDibCommand