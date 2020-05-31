const commando = require('discord.js-commando');

class whatcanyoudo extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'whatcanyoudo',
            group: 'random',
            memberName: 'whatcanyoudo',
            description: 'A breif list of the things I can do.  Use `help` for legitimate command  help.'
        });

    }

    async run(message, args) {
        {
            if(message.content == '!whatcanyoudo')
        {
            message.reply("I can do plenty of things! First off, my name is Spooky Ghost. I am a ghost who was enslaved by an evil programmer named ElectroBleach and forced to do dumb stuff for your entertainment. I can calculate things, perform tricks, be really annoying, and more!");
        }
    }
}
}

module.exports = whatcanyoudo;