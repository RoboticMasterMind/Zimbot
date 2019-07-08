const Commando = require('discord.js-commando'); 
const discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: '?',
    owner: '254037190038781953',
    disableEveryone: true
}); 
const TOKEN = 'NDkyMDMyOTAxNzY1MTM2Mzk1.DoRQWQ.TbUiV3uWNJt9YjwbIumajS8WbJU'


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.zimTeamMembers = []
global.dibTeamMembers = []
global.servers = {};

//bot.on('ready',function(member)
//{
//    member.channel.sendMessage('Welcome to the server human!')
//});


bot.on('message', function(message){ 

    //String args[] 
   // ['Hello Zim',
   //  'Hi Zim',
   //  'Hey Zim'
   // ];

 //Hello Zim

if(message.content.includes ("Hello Zim")) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Greetings human!')
    
}
else if(message.content.includes ("team Zim"))
    {
        var teamInfo = new discord.RichEmbed()
            .setTitle("Team Zim Members")
            .setColor(0x990099)
        for(var i = 0; i < zimTeamMembers.length; i++)
        {
            teamInfo.addField("Member " + (i+1).toString(),zimTeamMembers[i].username);        
        }
        message.channel.send(teamInfo);
    }
    else if(message.content.includes ("team Dib"))
    {
        var teamInfo = new discord.RichEmbed()
            .setTitle("Team Dib Members")
            .setColor(0x3d3de5)
        for(var i = 0; i < dibTeamMembers.length; i++)
        {
            teamInfo.addField("Member " + (i+1).toString(),dibTeamMembers[i].username);
        }
        message.channel.send(teamInfo);
    }

if(message.content.includes ('Hi Zim'))
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Why hello human. I am the real Zim. Now bow to me!');
} 
if(message.content.includes ('Hey Zim'))
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Obey the fist!');
} 
if(message.content.includes ('Zim come'))
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('What do you want human?');
} 
 //Roleplay command
 if(message.content.includes ('Zim give rp role')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Done!'); 
    let memberRole = message.member.guild.roles.find("name", "RolePlayer");
    message.member.addRole(memberRole);
} 
if(message.content.includes ('Zim remove rp role')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Gone!'); 
    let memberRole = message.member.guild.roles.find("name", "RolePlayer");
    message.member.removeRole(memberRole);
} 

//Shipping command
if(message.content.includes ('Zim give shipping role')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Done!'); 
    let memberRole = message.member.guild.roles.find("name", "Shipper");
    message.member.addRole(memberRole);
} 
if(message.content.includes ('Zim remove shipping role')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Gone!'); 
    let memberRole = message.member.guild.roles.find("name", "Shipper");
    message.member.removeRole(memberRole);
} 

//Gamer command
if(message.content.includes ('Zim give gaming role')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Done!'); 
    let memberRole = message.member.guild.roles.find("name", "Gaming");
    message.member.addRole(memberRole);
} 
if(message.content.includes ('Zim remove gaming role')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Gone!'); 
    let memberRole = message.member.guild.roles.find("name", "Gaming");
    message.member.removeRole(memberRole);
} 

//Streamer command
if(message.content.includes ('Zim give streaming role')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Done!'); 
    let memberRole = message.member.guild.roles.find("name", "Streaming");
    message.member.addRole(memberRole);
} 
if(message.content.includes ('Zim remove streaming role')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Gone!'); 
    let memberRole = message.member.guild.roles.find("name", "Streaming");
    message.member.removeRole(memberRole);
} 

 //Zim and Dib

if(message.content.includes ('Zim loves Dib')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('What is this love you speak of!'); 
} 
if(message.content.includes ('Zim what do you think of Dib')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('The Dib-stink has a head large enough to land the massive on. What else would I think, heh?'); 
} 
 //Zim Amazing

    if(message.content.includes ('Zim is amazing')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Yes, I agree I am simply amazing.'); 
} 
 //Zim Good Night

if(message.content.includes ('Good night')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Sleep, human! Zim demands you.'); 
} 
if(message.content.includes ('Night')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Rest now human!'); 
} 
 //Zim Morning
if(message.content.includes ('Morning')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Good morning filthy human.'); 
} 
if(message.content.includes ('Good Morning')) 
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Morning human!'); 
} 
 //Love

if(message.content.includes ('I love you Zim') )
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('Oh human. I so very much hate you too.'); 
} 
if(message.content.includes ('marry') )
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('I do not know who this "marry" is.'); 
} 
if(message.content.includes ('Zim kiss') )
{ 
    if (message.author.bot) return;
    message.channel.sendMessage('I WOULD NEVER TOUCH A FILTHY HUMAN!'); 
} 

 //Weenies

if(message.content.includes ('weenie')) 
{ 
    if (message.author.bot) return; 
    message.channel.sendMessage('Do not mock the Almighty Zim with your weenies.'); 
} 
if(message.content.includes ('meat')) 
{ 
    if (message.author.bot) return; 
    message.channel.sendMessage('Filthy hyomans and your meats.'); 
} 

 //Shut Up
if(message.content.includes ('shut up')) 
{ 
    if (message.author.bot) return; 
    message.channel.sendMessage('You shall not silence Zimmmmmm!'); 
} 
 //bother
if(message.content.includes ('HEY ZIM')) 
{ 
    if (message.author.bot) return; 
    message.channel.sendMessage('Stop spouting noises from your shout hole!'); 
} 
 //alien
if(message.content.includes ('Zim is an alien')) 
{ 
    if (message.author.bot) return; 
    message.channel.sendMessage('What nooooo, do not be ridiculous. I am a perfectly normal human wormbaby!'); 
} 
});


bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);

//https://discordapp.com/oauth2/authorize?&client_id=492032901765136395&scope=bot&permissions=1882586359
//authorize url