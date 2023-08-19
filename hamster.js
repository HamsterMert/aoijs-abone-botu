const { AoiClient, LoadCommands } = require("aoi.js"); 

const bot = new AoiClient({
    token: "", 
    prefix: ["$getGuildVar[prefix]", "<@$clientID>"],
    intents: ["Guilds", "GuildMessages", "MessageContent"], 
    events: ["onMessage", "onInteractionCreate"], 
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/") 



bot.variables ({
  rol:"",
  yetkili: "",
  kanal: "",
  sayaç: "0",
  prefix: "!" //prefixi buraya yaz
})


bot.status({
    text: `Abone Botu - HamsterMert`, 
    type: "STREAMİNG", 
    status: "dnd", 
    time: 12
})


bot.readyCommand({ 
    channel: "1142153413128355920",
    code: `
    $author[🟢 Bot başlatıldı.]
    $color[03b400]
$wait[3s]
   $channelSendMessage[1142153413128355920;{newEmbed:{author:➕ Bot başlatılıyor...}{color:FFF700}};false]
    $log[✅ | $userTag[$clientID] Aktif!]
    `
})