const Discord = require("discord.js");
module.exports = { task(client, message, suffix) { message.delete(1000);

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}


let mention = message.mentions.users.first();
if (!mention) return message.reply(`mencione alguém para se divorciar.`);

database.Users.findOne({"_id": message.author.id}, function(erra, documento) {
      if (documento) {

documento.casou = 'Ninguém';
documento.save();
message.channel.send(`${message.author} se divorciou com ${mention}`);

} else {
      var pessoa = new database.Users({
                        _id: message.author.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "sy!bio su bio",
                        rpup: 0,
                        adv: 0,
                        coins: 0,
                        rubys: 0,
                        containers: 0,
                        emerald: 0,
                        goldbox: 0,
                        casou: 'Ninguém',
                        profile_background: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                      
                    })
                    pessoa.save()
        message.reply("<:LikeSysop3:476062023629799424> **Perfil criado!** Use novamente este comando!");
}
});
});
}};
