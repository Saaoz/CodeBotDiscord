const {Client, GatewayIntentBits} = require('discord.js')
require('dotenv').config()


const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ] 
});


client.on('ready', () => {
    console.log(`Connecté an tant que ${client.user.tag}!`);
})

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});


client.login(process.env.DISCORD_TOKEN);