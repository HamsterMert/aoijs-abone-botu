module.exports = { 
    name:"prefix",
    code:`
    $title[İşlem Başarılı]
    $description[Sunucunun Prefixi $message[1] Olarak Değiştirildi!]
    $setGuildVar[prefix;$message[1]]
    $onlyIf[$message[1]!=;Prefixim Ne Olmalı?]
    $onlyPerms[administrator;Bu Komutu Kullanmak İçin Yönetici Yetkisine Sahip Olmalısın.]
    `
    }
