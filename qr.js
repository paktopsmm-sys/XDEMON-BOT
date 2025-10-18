const { makeid } = require('./gen-id');
const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser
} = require("@whiskeysockets/baileys");
const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
 //   let num = req.query.number;
    async function XEEMON_XD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                	
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});
            
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect,
                    qr
                } = s;
              if (qr) await res.end(await QRCode.toBuffer(qr));
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "NIMA~MD&" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `𝗛𝗘𝗬 𝗧𝗛𝗘𝗥𝗘 𝐗𝐃𝐄𝐌𝐎𝐍 𝗨𝗦𝗘𝗥 👋🏻

𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 𝗡𝗜𝗠𝗔 𝗠𝗗 𝗬𝗢𝗨𝗥 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗛𝗔𝗦 𝗕𝗘𝗘𝗡 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 𝗖𝗥𝗘𝗔𝗧𝗘𝗗 !

🔐 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗗: 𝗦𝗘𝗡𝗧 𝗔𝗕𝗢𝗩𝗘
⚠️ 𝗞𝗘𝗘𝗣 𝗜𝗧 𝗦𝗔𝗙𝗘 ! 𝗗𝗢 𝗡𝗢𝗧 𝗦𝗛𝗔𝗥𝗘 𝗧𝗛𝗜𝗦 𝗜𝗗 𝗪𝗜𝗧𝗛 𝗔𝗡𝗬𝗢𝗡𝗘❗.

——————

𝙎𝙏𝘼𝙔 𝙐𝙋𝘿𝘼𝙏𝙀𝘿:
*ᴊᴏɪɴ ᴏᴜʀ ᴏꜰꜰɪᴄɪᴀʟ ᴄʜᴀɴɴᴇʟ:*  
https://whatsapp.com/channel/0029Vb6eCxQGE56mNKp4ox2B


> 𝗽𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝗟𝗼𝗸𝘂 𝗡𝗶𝗺𝗮`;
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: " 𝐗𝐃𝐄𝐌𝐎𝐍 𝗠𝗗",
thumbnailUrl: "https://i.postimg.cc/B6w4rV6T/20250611-123112.png",
sourceUrl: "https://youtube.com/@nimayt-i7y?si=GxN5wFtoRwzyDNUn",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `𝗛𝗘𝗬 𝗧𝗛ERE 𝐗𝐃𝐄𝐌𝐎𝐍 𝗨𝗦𝗘𝗥 👋🏻

𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 𝗡𝗜𝗠𝗔 𝗠𝗗 𝗬𝗢𝗨𝗥 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗛𝗔𝗦 𝗕𝗘𝗘𝗡 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 𝗖𝗥𝗘𝗔𝗧𝗘𝗗 !

🔐 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗗: 𝗦𝗘𝗡𝗧 𝗔𝗕𝗢𝗩𝗘
⚠️ 𝗞𝗘𝗘𝗣 𝗜𝗧 𝗦𝗔𝗙𝗘 ! 𝗗𝗢 𝗡𝗢𝗧 𝗦𝗛𝗔𝗥𝗘 𝗧𝗛𝗜𝗦 𝗜𝗗 𝗪𝗜𝗧𝗛 𝗔𝗡𝗬𝗢𝗡𝗘❗.

——————

𝙎𝙏𝘼𝙔 𝙐𝙋𝘿𝘼𝙏𝙀𝘿:
*ᴊᴏɪɴ ᴏᴜʀ ᴏꜰꜰɪᴄɪᴀʟ ᴄʜᴀɴɴᴇʟ:*  
https://youtube.com/@nimayt-i7y?si=GxN5wFtoRwzyDNUn

> 𝗽𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆 𝐗𝐃𝐄𝐌𝐎𝐍`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝐗𝐃𝐄𝐌𝐎𝐍 𝗠𝗗✅  ",
thumbnailUrl: "https://i.postimg.cc/B6w4rV6T/20250611-123112.png",
sourceUrl: "https://youtube.com/@nimayt-i7y?si=GxN5wFtoRwzyDNUn",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    MALVIN_XD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
    await XDEMON_XD_PAIR_CODE();
});
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min
module.exports = router;
