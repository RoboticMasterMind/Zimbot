const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the voice channel.'
        });
    }
    async run(message, args)
    {
       
        if(message.guild.voiceConnection)
            {
                message.guild.voiceConnection.disconnect()
                {
                 
                    message.channel.sendMessage("Zim has left the channel human.");
                
                }
            }
        
        else
        {
            message.channel.sendMessage("Try again human. I am not in a voice channel.");
        }
      
    }
}

module.exports = LeaveChannelCommand;