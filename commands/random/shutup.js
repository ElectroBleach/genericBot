const commando = require('discord.js-commando');

class shutupFunction extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shutup',
            group: 'random',
            memberName: 'shutup',
            description: 'Stops all annoying spam-like functions.'
        });

    }

    async run(message, args) {
        {

        }
    }
}

module.exports = shutupFunction;



