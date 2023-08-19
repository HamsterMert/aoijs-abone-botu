module.exports = {
    name:"sil",
    aliases: ["clear","purge","temizle"],
    code:`
    Temizleme İşlemi Tamamlandı
    $clear[$message[1]]
    $onlyIf[$isNumber[$message[1]]!=false;Bu Bir Sayı Değil]
    $onlyIf[$message[1]!=;Ne Kadar Mesaj Sileceğim?]
    $onlyPerms[managemessages;Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsin.]
    `
    }
    