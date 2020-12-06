const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async () => { 

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("GGBot | +help", {type: "LISTENING"});

}); 

client.on("message", async message =>{

    if(message.author.bot) return; 

    if(message.channel.type == "dm") return;
 
    var prefix = botConfig.prefix;

    var messageArrey = message.content.split(" ");
    
    var command = messageArrey[0];

    if(command === `${prefix}help`) {
            
        var botEmbet = new discord.MessageEmbed()
            .setTitle("This is the help menu!")
            .setDescription("``")
            .setColor("003cff")
            .addFields(
                {name:"Commands:", value:"#COMMING SOON"},
            )
            .setFooter("GGBot","https://cdn.pixabay.com/photo/2014/09/18/22/42/letters-451497_1280.jpg")    
            
            return message.channel.send(botEmbet);
        }
            
});