module.exports = {
    name:"abone-rol",
    code:`
    $title[İşlem Başarılı]
    $description[Abone Rolü <@&$mentionedRoles[1]> Olarak Ayarlandı.]
    $footer[HamsterMert Tarafından Kodlandı.]
    $setGuildVar[rol;$mentionedRoles[1]]
    $onlyClientPerms[administrator;Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsin]
    $onlyIf[$message[1]!=;<@!$authorID>, Lütfen Bir Rol Etiketle]
    
    `
    }
    