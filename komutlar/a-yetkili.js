module.exports = {
    name:"abone-yetkili",
    code:`
    $title[İşlem Başarılı]
    $description[Abone Yetkilisi Rolü <@&$mentionedRoles[1]> Olarak Ayarlandı.]
    $footer[HamsterMert Tarafından Kodlandı.]
    $setGuildVar[yetkili;$mentionedRoles[1]]
    $onlyClientPerms[administrator;Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsin] 
    $onlyIf[$message[1]!=;<@!$authorID>, Lütfen Bir Rol Etiketle] 
    `
    }
    