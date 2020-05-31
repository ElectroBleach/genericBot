const commando = require('discord.js-commando');
const bot = new commando.Client;

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'solve',
            group: 'random',
            memberName: 'solve',
            description: 'Solves a math problem for you! For usage: `!solve (equation here)`'
        });

    }

    async run(message, args) {
        {
            pos = 0;
            var messagetype = Math.floor(Math.random() * 3) + 1;
            var pos = Math.floor(Math.random() * 2) + 1;
        }

         var generated = Math.floor(Math.random() * -600) + 1;

         if(pos >= 2) 
         {
             var generated = Math.floor(Math.abs(generated));
         }

         if(messagetype == 1)
        {
            var id = Number(args[0]);
            if(isNaN(id)) return message.channel.send("Supply a valid equation, please!");
         message.channel.send("Lol this one's easy, it's " + generated + "! Simples!");
         messagetype = 0;
         generated = 0;
        }

        if(messagetype == 2)
        {
            var id = Number(args[0]);
            if(isNaN(id)) return message.channel.send("Supply a valid equation, please!");
         message.channel.send("Really? Are you dumb? I can't believe how easy this is. You must be really dumb. Did you think I didn't know that it is just " + generated + "? I can't believe how dumb you are, seriously.");
        messagetype = 0;
        generated = 0;
        }
        
        if(messagetype == 3)
        {
            var id = Number(args[0]);
            if(isNaN(id)) return message.channel.send("Supply a valid equation, please!");
            message.channel.send("Hmmm... " + id + "... what was it again? That one's a bit tough. Actually, I'm a bit tired. Why don't you just do it yourself, " + message.author + "?");
        messagetype = 0;
        generated = 0;
        }
       

    }
}


module.exports = DiceRollCommand;