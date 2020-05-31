const commando = require('discord.js-commando');
const bot = new commando.Client;
const client = new commando.Client;
const token = 'NTM0ODk5OTc1MzY1MDY2NzUy.DyAT-Q.Jw6YhfoTLLfxHONo97jWgo-Zu_U'

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

var repeat = 0;


bot.on('message', function(message) {
    if(message.content == "poopy")
    {
        message.channel.send("I farted");
    }
});

bot.on('ready', function() {
    console.log('Reload Complete.');
    functionmessage = 1;
})



bot.on('message', function(message){
    if(message.content == '!imaspookyghost')
    {
        message.reply("you are now a Spooky Ghost, just as I am! Don't think you're cooler than me just yet, though. I'm still the one with the red name, since I'm a bot. Hahah!");
    }
    if(message.content == '!leave')
    {
        message.reply("I'm _very_ proud of you! You typed `!leave`! Way to go! This server sucks, so I don't blame you for leaving. Go ahead! Bye-bye!");
    }
    if(message.content == 'cape')
    {
        message.reply("haven't you seen the Incredibles? NO CAPES!");
    }
    if(message.content == 'server')
    {
        message.reply("you said server, right? I think you did. In fact, I'm sure of it. I'm a part of this server, you know... since I'm a bot. I'm the one who really makes this server cool!");
    }
    if(message.content == 'fuck you')
    {
        message.reply("hey, no swar or u get smash with car");
    }
    if(message.content == 'Jullian is bad')
    {
        message.reply("you're correct. Jullian is bad.");
    }
    if(message.content == 'ElectroBleach is bad')
    {
        message.reply("be nice or ban.");
    }
    if(message.content == 'ElectroBleach is good')
    {
        message.reply("you couldn't be more correct!");
    }
    if(message.content == 'Jullian is good')
    {
        message.reply("you're being banned for hate speech.");
    }
    if(message.content == 'Minecraft')
    {
        message.reply("like, seriously? Minecraft is like, 10 years old now. The cool kids are playing fornite now! smh.");
    }
    if(message.content == 'GenericallyNamed is bad')
    {
        message.reply("yeah he's okay I guess.");
    }
    if(message.content == 'GenericallyNamed is good')
    {
        message.reply("yeah pretty much.");
    }
    if(message.content == 'spooky ghost is bad')
    {
        message.reply("ban.");
    }
    if(message.content == 'poop')
    {
        message.reply("fart");
    }
    if(message.content == 'tseries')
    {
        message.reply("SUBSCRIBE TO PEWDIEPIE.");
    }
    if(message.content == 'subscribe to tseries')
    {
        message.reply("i'll ban u.");
    }
    if(message.content == 'yarp')
    {
        message.channel.send("hbjkjihofseojiposiegfpoigsdhphoisgdaihopegwpiogespoihyweasgipowegpiohohipsdgeihoweagdioupwseofiahwefihefoihseoifhesoiphpofhaweoispghpsdgosiehgoweshgpsheioghaahsdiofjipoepioawphhwegopiwgfopijhwegfoihwegfopihwegpoiwfgoijapwefpoihweiopfaewfpiofehpoiewhoijkohwseroiughoipojkhoiursohiuthuijl khoiushjklfdjkxfglhjdslk;ajlikdhfspohiupfhuiofpdfghjikoulpdhapioudsghouipfddhsiguolpfsehtgiouphuipohrouieguaisodfgihjodtlyhigjkhjtikofhouish iujhs gdiouehuoiehuiogyuioegyouisgouiergsuiodfghuiosgeruioguoiuioiuseiuhrhgeiofgiodfea");
    }
    if(functionmessage == 1)
    {
        message.channel.send("I'm back baby!");
        functionmessage = 0;
    }
})


bot.on('error', err => {
    console.log(err)
});


bot.on('message', function(message){
    if(message.content == '!repeatme')
    {
        repeat = 1
        message.channel.send('I will now repeat everything! Type `!shutup` to make me stop!');
    }
})


bot.on('message', function(message){
    if(message.content == '!shutup')
    {
        message.channel.send('All annoying messages have been stopped.');
        repeat = 0;
    }
})

bot.on('message', (message) => {
    if (message.author.id !== bot.user.id && message.content && repeat == 1) { 
       message.channel.sendMessage("Repeating " + message.author + " : " + message.content);
   }
})

bot.on('ready', () => {
    bot.user.setGame('the bongos')
  })

bot.login(token);