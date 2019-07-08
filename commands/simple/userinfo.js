const commando = require('discord.js-commando');
const discord = require('discord.js');


class UserInfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'creatorinfo',
            group: 'simple',
            memberName: 'creatorinfo',
            description: 'Learn about who made this bot.'
        });
    }

    async run(message, args)
    {
        
        var myinfo = new discord.RichEmbed()
            .setTitle("About the Author")
            .addField("Info", "Hello, my name is XenoMind. I am the creator of this bot.")
            .setColor(0x990099)
            .setThumbnail(message.author.avatarURL)
            .setURL("https://www.deviantart.com/xenomind")
            .setFooter("I hope you enjoy Zim. It is still work in progress!")
            message.channel.sendEmbed(myinfo);
    }
}
module.exports = UserInfoCommand