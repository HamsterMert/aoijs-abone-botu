module.exports = {
    name:"abone",
    aliases: ["a"],
    code:`
    $useChannel[$getGuildVar[kanal]]
    $author[BlueBerry]
    $title[Abone Rolü Sistemi]
    $addField[Yetkili;<@$authorID>;true]
    $addField[Kullanıcı;<@$mentioned[1]>;true]
    $addField[Sayaç;$getGuildVar[sayaç];true]
    $footer[HamsterMert Tarafından Kodlandı.]
    $channelSendMessage[$channelID;Başarıyla Abone Rolünü Verdim.]
    $giveRole[$guildID;$mentioned[1];$getGuildVar[rol];Abone Rolü]
    $setGuildVar[sayaç;$sum[$getGuildVar[sayaç];1]]
    $onlyForRoles[$getGuildVar[yetkili];Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsin.]
    $onlyIf[$message[1]!=;<@!$authorID>, Lütfen Bir Üye Etiketle]
    `
    }
    