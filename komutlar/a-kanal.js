module.exports = {
    name:"abone-kanal",
    code:`
    $title[İşlem Başarılı]
    $description[Abone Log Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı.]
    $footer[HamsterMert Tarafından Kodlandı.]
    $setGuildVar[kanal;$mentionedChannels[1]]
    $onlyClientPerms[administrator;Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsin]
    $onlyIf[$message[1]!=;<@!$authorID>, Lütfen Bir Kanal Etiketle]

    `
    }
    