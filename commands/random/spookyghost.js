const commando = require('discord.js-commando');

class imaspookyghost extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'imaspookyghost',
            group: 'random',
            memberName: 'imaspookyghost',
            description: 'Server login command.'
        });

    }

    async run(message, args) {
        {

        }
    }
}

module.exports = imaspookyghost;



