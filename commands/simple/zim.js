const commando = require('discord.js-commando');

class ZimCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'zim',
            group: 'simple',
            memberName: 'zim',
            description: 'Try to gain his approval'
        });
    }
    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 7)
        if (chance == 0)
        {
          message.channel.sendMessage("Of course I approve of you human.");
        }
        else if (chance == 1)
        {
          message.channel.sendMessage("I disapprove of this, smelly human!");
        }
        else if (chance == 2)
        {
          message.channel.sendMessage("Eh, what are you getting at human?");
        }
        else if (chance == 3)
        {
          message.channel.sendMessage("Hahahaha, you amuse Zim.");
        }
        else if (chance == 4)
        {
          message.channel.sendMessage("Hnng, shut your noise tubes. I admit to nothing!");
        }
        else if (chance == 5)
        {
          message.channel.sendMessage("Could you repeat that. I was not listening.");
        }
        else if (chance == 6)
        {
          message.channel.sendMessage("Yes and my tallest will be proud.");
        }
    }
}

module.exports = ZimCommand;