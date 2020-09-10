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
Step 3: Add a new file, named package.json containing the following:
{

  "name": "Example",

  "description": "Example",

  "version": "0.0.0",

  "main": "bot.js",

  "scripts": {

    "start": "node bot.js"

  },

  "dependencies": {

    "discord.js": "11.1.0",

    "request": "2.81.0"

  }

}
Step 4: Create a new file, named procfile containing the follo
