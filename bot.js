const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzUxOTM3MTEzMDI4Njg5OTUw.X1QWAg.YZp8DqTtiKI5IVeIG8yT01HHAkQ);//BOT_TOKEN is the Client Secret
