const main = require("../bot.js")
const config = require("../settings/config.json")
const catList = require("../settings/catList.json")

/* Credits
Base for the embeds from
https://discordjs.guide/#/popular-topics/miscellaneous-examples?id=richembed-builder
*/

exports.run = (message, args) => {
    message.channel.send(`There are two ways to create embeds, if you check the source code of this then you can see both ways of making them.`)

    // Jojo add more stuff to this embed
    // The "easiest" way to make one
    var embed = new main.dc.RichEmbed() // THe color is the color of the embed, 0xHEXCODE
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addField('Regular field title', 'Some value here')
        .addBlankField() // this is a blank field
        .setDescription('Some description here')
        .addField(`:white_check_mark: This is the "easiest" embed`, `because it doesn't have that much brackets.`, false) // False means that it's not inline
        .addField(`These to are inline`, `the last argument`, true)
        .addField(`Because`, `is true.`, true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter(config.embed_footer_text, 'https://i.imgur.com/wSTFkRM.png');
    // You can also do .setColor([255,255,255]) instead of that one in the first line that starts with var embed if you prefer using RRRGGGBBB (just remeove the color part of the line above)
    message.channel.send(embed).then(message => // You have to remove the .then(message => code if you want to use the top one, it's just here to delay the other message to keep it in the right order.
        // This is the way that I, abcdan, prefer it since it's a lot more clear to me what does what
        message.channel.send({
            embed: {
                color: 0x0099ff,
                title: 'Some title',
                url: 'https://discord.js.org',
                author: {
                    name: 'Some name',
                    icon_url: 'https://i.imgur.com/wSTFkRM.png',
                    url: 'https://discord.js.org',
                },
                description: 'Some description here',
                thumbnail: {
                    url: 'https://i.imgur.com/wSTFkRM.png',
                },
                fields: [{
                        name: "This is another cool embed",
                        value: `If you want to see all the things you can do with it`,
                        inline: true
                    },
                    {
                        name: "then head over to this embed generator",
                        value: `[Click here](https://leovoel.github.io/embed-visualizer/)`,
                        inline: true
                    },
                    {
                        name: 'Regular field title',
                        value: 'Some value here',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        // This is what .addBlankField() does in the other embed type.
                    },
                    {
                        name: 'Inline field title',
                        value: 'Some value here',
                        inline: true,
                    },
                    {
                        name: 'Inline field title',
                        value: 'Some value here',
                        inline: true,
                    },
                    {
                        name: 'Inline field title',
                        value: 'Some value here',
                        inline: true,
                    },
                ],
                image: {
                    url: 'https://i.imgur.com/wSTFkRM.png',
                },
                timestamp: new Date(),
                footer: {
                    text: config.embed_footer_text,
                    icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
            },
        }))


}

exports.help = {
    cat: catList.general,
    perm: 1,
    desc: "Just an embed example"
}

exports.isPublic = true