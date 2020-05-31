const commando = require('discord.js-commando');
const bot = new commando.Client;


class funnySpam extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'spam',
            group: 'random',
            memberName: 'spam',
            description: 'Spams 20 messages at a time. This feature will be improved upon in the future to improve spamming.'
        });
    }

    async run(message, args) {
        {
            var spamcount = 0;
            var funnyspam = 1;
            var funcstop = 0;
            message.channel.send("Okay, thanks to " + message.author + ", it is now spam time! 20 messages will be sent per `!spam` command inputted.");
            spamcount = 0;
        }
            {
                if(funnyspam >= 1)
                {
                    for(funnyspam = 0; funnyspam < 1000; funnyspam++)
                    {
                        if(spamcount >= 20){
                            message.channel.send("Spam cap has been reached!");
                            break;
                        }
                        {
                         message.channel.send("U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM U LIKE SPAM");
                         spamcount = spamcount + 1;
                        }
                    }
                }    
            }
    }
}


module.exports = funnySpam;



