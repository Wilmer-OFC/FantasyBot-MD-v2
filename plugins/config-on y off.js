import fetch from 'node-fetch'
import fs from 'fs' 
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
//try{
const _0x44713f = _0x34b6;
function _0x34b6(_0x355db8, _0x38a593) {
    const _0x400972 = _0x5695();
    return _0x34b6 = function (_0x16a5bb, _0x27e0c3) {
        _0x16a5bb = _0x16a5bb - (0x1 * 0x12fa + -0x12dc + -0x16 * -0xb);
        let _0x5e2a77 = _0x400972[_0x16a5bb];
        return _0x5e2a77;
    }, _0x34b6(_0x355db8, _0x38a593);
}
function _0x5695() {
    const _0x4cecf4 = [
        '10QkaAWA',
        '50166towazJ',
        'split',
        '7930580BDnYXG',
        '16rFbvUv',
        ',;;;\x0aFN:',
        ',\x0aitem1.TEL;waid=',
        '1528180FrsxKo',
        'sender',
        '855510JLyYbE',
        './media/menus/Menu1.jpg',
        '2370321JHDFol',
        '2784531yQdyIG',
        'readFileSync',
        '46058790kkljpF',
        '25WXxsFt',
        '\x0aitem1.X-ABLabell:Ponsel\x0aEND:VCARD'
    ];
    _0x5695 = function () {
        return _0x4cecf4;
    };
    return _0x5695();
}
(function (_0x4d3b1a, _0x58b11c) {
    const _0x423612 = _0x34b6, _0x34f90f = _0x4d3b1a();
    while (!![]) {
        try {
            const _0x37ec1c = parseInt(_0x423612(0x111)) / (-0x1e * 0x11a + 0x2 * -0x4e4 + -0x891 * -0x5) * (-parseInt(_0x423612(0x112)) / (0x6b6 + 0x6a9 + -0xd5d)) + -parseInt(_0x423612(0x11d)) / (0x1ee + 0x255e + -0x2749) + -parseInt(_0x423612(0x118)) / (0x1 * 0x219d + -0x1156 + 0x17 * -0xb5) + parseInt(_0x423612(0x120)) / (-0x14a9 + -0x1 * -0xb5d + 0x3 * 0x31b) * (-parseInt(_0x423612(0x11a)) / (0x1e * 0x47 + 0x1588 + -0x1dd4)) + -parseInt(_0x423612(0x114)) / (-0x1c9c + 0x8a9 + 0x13fa) + parseInt(_0x423612(0x115)) / (0x12d * -0x1d + -0x257d + 0xb2 * 0x67) * (-parseInt(_0x423612(0x11c)) / (0x222 * 0x3 + -0x3af * -0x1 + -0x1 * 0xa0c)) + parseInt(_0x423612(0x11f)) / (0x89f * -0x1 + -0x15 * -0x81 + 0xf6 * -0x2);
            if (_0x37ec1c === _0x58b11c)
                break;
            else
                _0x34f90f['push'](_0x34f90f['shift']());
        } catch (_0x47fdc1) {
            _0x34f90f['push'](_0x34f90f['shift']());
        }
    }
}(_0x5695, 0xf371d + -0x1 * -0x6f85a + -0xbed97));
let fkontak2 = {
    'key': { 'participant': '0@s.whatsapp.net' },
    'message': {
        'contactMessage': {
            'displayName': wilmerofc,
            'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;' + author + _0x44713f(0x116) + author + _0x44713f(0x117) + m[_0x44713f(0x119)][_0x44713f(0x113)]('@')[-0x1484 * 0x1 + -0x666 + 0x1aea] + ':' + m['sender'][_0x44713f(0x113)]('@')[-0x162a + 0x546 + 0x10e4] + _0x44713f(0x110),
            'jpegThumbnail': fs[_0x44713f(0x11e)](_0x44713f(0x11b)),
            'thumbnail': fs['readFileSync']('./media/menus/Menu1.jpg'),
            'sendEphemeral': !![]
        }
    }
};
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
let titulo = [ 
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeGB.smsNoGg()}`, 
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.detect ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.autolevelup ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaOw() + ' ' + `${bot.restrict ? '✅' : '❌'}`,    
lenguajeGB.smsParaOw() + ' ' + `${bot.antiCall ? '✅' : '❌'}`,
lenguajeGB.smsParaOw() + ' ' + `${bot.antiSpam ? '✅' : '❌'}`,        
lenguajeGB.smsParaOw() + ' ' + `${global.opts['self'] ? '❌' : '✅'}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaOw() + ' ' + `${global.opts['autoread'] ? '✅' : '❌'}`, 
lenguajeGB.smsParaOw() + ' ' + `${bot.temporal ? '✅' : '❌'}`,      
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.stickers ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.autosticker ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.reaction ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.audios ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.modohorny ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antitoxic ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.antiver ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.delete ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaOw() + ' ' + `${global.opts['pconly'] ? '✅' : '❌'}`,  
lenguajeGB.smsParaOw() + ' ' + `${global.opts['gconly'] ? '✅' : '❌'}`]
let nombre = [ lenguajeGB.smsWel1(), lenguajeGB.smsDete1(), lenguajeGB.smsANivel1(), lenguajeGB.smsRestri1(), lenguajeGB.smsLlamar1(), lenguajeGB.smsAntiSp1(), lenguajeGB.smsModP1(), lenguajeGB.smsModAd1(), lenguajeGB.smsLect1(), lenguajeGB.smsTempo1(), lenguajeGB.smsStik1(), lenguajeGB.smsStickA1(), lenguajeGB.smsReacc1(), lenguajeGB.smsAudi1(), lenguajeGB.smsModHor1(), lenguajeGB.smsAntitoc1(), lenguajeGB.smsModOb1(), lenguajeGB.smsAntiEli1(), lenguajeGB.smsAntiInt1(), lenguajeGB.smsAntiE1(), lenguajeGB.smsAntiEE1(), lenguajeGB.smsAntiTT1(), lenguajeGB.smsAntiYT1(), lenguajeGB.smsAntiTEL1(), lenguajeGB.smsAntiFB1(),
lenguajeGB.smsAntiIG1(), lenguajeGB.smsAntiTW1(), lenguajeGB.smsSOLOP1(), lenguajeGB.smsSOLOG1()]
let descripción = [ lenguajeGB.smsWel2(), lenguajeGB.smsDete2(), lenguajeGB.smsANivel2(), lenguajeGB.smsRestri2(), lenguajeGB.smsLlamar2(), lenguajeGB.smsAntiSp2(), lenguajeGB.smsModP2(), lenguajeGB.smsModAd2(), lenguajeGB.smsLect2(), lenguajeGB.smsTempo2(), lenguajeGB.smsStik2(), lenguajeGB.smsStickA2(), lenguajeGB.smsReacc2(), lenguajeGB.smsAudi2(), lenguajeGB.smsModHor2(), lenguajeGB.smsAntitoc2(), lenguajeGB.smsModOb2(), lenguajeGB.smsAntiEli2(), lenguajeGB.smsAntiInt2(), lenguajeGB.smsAntiE2(), lenguajeGB.smsAntiEE2(), lenguajeGB.smsAntiTT2(), lenguajeGB.smsAntiYT2(), lenguajeGB.smsAntiTEL2(), lenguajeGB.smsAntiFB2(),
lenguajeGB.smsAntiIG2(), lenguajeGB.smsAntiTW2(), lenguajeGB.smsSOLOP2(), lenguajeGB.smsSOLOG2()]
let comando = [ "welcome", "detect", "autolevelup", "restrict", "anticall", "antispam", "public", "modoadmin", "autoread", "temporal", "stickers", "autosticker", "reaction", "audios", "modohorny", "antitoxic", "antiviewonce", "antidelete", "antifake", "antilink", "antilink2", "antitiktok", "antiyoutube", "antitelegram", "antifacebook",
"antinstagram", "antitwitter", "pconly", "gconly"]
let sections = Object.keys(titulo, nombre, descripción, comando).map((v, index) => ({ title: `${titulo[v]}`,
rows: [{ title: `${nombre[v]} : ${command} ${comando[v]}`, description: `${1 + index}. ${descripción[v]}`, id: usedPrefix + command + ' ' + comando[v], }], }))
let name = await conn.getName(m.sender)
const listMessage = {
text: `${lenguajeGB.smsConfi10()}`,
footer: `╭━━━✦ *${lenguajeGB.smsConfi1()}* ✦━━━━⬣
┃
┃ 💓 ${lenguajeGB.smsConfi2()} *${name}*
┃
${lenguajeGB.smsConfi3()}
${lenguajeGB.smsConfi4()}
┃
${lenguajeGB.smsConfi5()}
${lenguajeGB.smsConfi6()}
${lenguajeGB.smsConfi7()}
${lenguajeGB.smsConfi8()}
${m.isGroup ? `┃` : `┃\n${lenguajeGB.smsConfi9()}`}
╰━━━━━✦ *${vs}* ✦━━━━⬣
${wm}`,//`
title: null,
buttonText: `⚙️ ${lenguajeGB.smsConfi1()} ⚙️`,
sections }
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false

switch (type) {
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break

case 'detect': case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break

case 'antidelete': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break

case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break

case 'antilink': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
  break
  
case 'antilink2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break

case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break

case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break

case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
 bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;

case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break

case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break

case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break

case 'modohorny': case 'modocaliente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break

case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break

case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break

case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break

case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break

case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break

case 'antitoxic': case 'antitoxicos': case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break

case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break

case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break

case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':                
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break

case 'jadibotmd': case 'modojadibot': case 'serbotmd': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = isEnable
break 

case 'restrict': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break

case 'antiporn': case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiPorn = isEnable          
break

case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break

case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break

case 'anticall': case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break

case 'antispam':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam = isEnable
break

case 'modoadmin': case 'soloadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    

case 'pconly': case 'privateonly': case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break

case 'gconly': case 'grouponly': case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break

case 'antiprivado':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break

case 'antitrabas':
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break

case 'simi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break

case 'modoia':
case 'chatgpt':
case 'ia':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.modoia = isEnable;      
break;      

case 'swonly': case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendList(m.chat, `${listMessage.text}\n`, listMessage.footer, `${listMessage.buttonText}`, sections, null, null, fkontak2);

/*if (!/[01]/.test(command)) return await conn.reply(m.chat, `${lenguajeGB.smsConfi10()}\n\n🌟 ${lenguajeGB.smsConfi2()} *@${toUser}*

${lenguajeGB.smsConfi3()}
${lenguajeGB.smsConfi4()}

${lenguajeGB.smsConfi5()}
${lenguajeGB.smsConfi6()}
${lenguajeGB.smsConfi7()}
${lenguajeGB.smsConfi8()}
${m.isGroup ? `` : `${lenguajeGB.smsConfi9()}`}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} welcome
ඬ⃟🌹 ${lenguajeGB.smsWel2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.detect ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} detec
ඬ⃟🌹 ${lenguajeGB.smsDete2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdYOw()} ${m.isGroup ? chat.autolevelup ? '✅' : '❌' : lenguajeGB.smsNoGg()} 
ඬ⃟🌹 ${usedPrefix + command} autolevelup
ඬ⃟🌹 ${lenguajeGB.smsANivel2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaOw()} ${bot.restrict ? '✅' : '❌'}
ඬ⃟🌹 ${usedPrefix + command} restrict
ඬ⃟🌹 ${lenguajeGB.smsRestri2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaOw()} ${bot.antiCall ? '✅' : '❌'}
ඬ⃟🌹 ${usedPrefix + command} antiCall
ඬ⃟🌹 ${lenguajeGB.smsLlamar2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaOw()} ${bot.antiSpam ? '✅' : '❌'}
ඬ⃟🌹 ${usedPrefix + command} antiSpam
ඬ⃟🌹 ${lenguajeGB.smsAntiSp2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaOw()} ${global.opts['self'] ? '❌' : '✅'}
ඬ⃟🌹 ${usedPrefix + command} self
ඬ⃟🌹 ${lenguajeGB.smsModP2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeGB.smsNoGg()} 
ඬ⃟🌹 ${usedPrefix + command} modoadmin
ඬ⃟🌹 ${lenguajeGB.smsModAd2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaOw()} ${global.opts['autoread'] ? '✅' : '❌'}
ඬ⃟🌹 ${usedPrefix + command} autoread
ඬ⃟🌹 ${lenguajeGB.smsLect1()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaOw()} ${bot.temporal ? '✅' : '❌'}
ඬ⃟🌹 ${usedPrefix + command} temporal
ඬ⃟🌹 ${lenguajeGB.smsTempo2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.stickers ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} stickers
ඬ⃟🌹 ${lenguajeGB.smsStik1()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.autosticker ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} autosticker
ඬ⃟🌹 ${lenguajeGB.smsStickA2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdYOw()} ${m.isGroup ? chat.reaction ? '✅' : '❌' : lenguajeGB.smsNoGg()}    
ඬ⃟🌹 ${usedPrefix + command} reaction
ඬ⃟🌹 ${lenguajeGB.smsReacc2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdYOw()} ${m.isGroup ? chat.audios ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} audios
ඬ⃟🌹 ${lenguajeGB.smsAudi2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antitoxic ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} antitoxic
ඬ⃟🌹 ${lenguajeGB.smsAntitoc2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdYOw()} ${m.isGroup ? chat.antiver ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} antiver
ඬ⃟🌹 ${lenguajeGB.smsModOb2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdYOw()} ${m.isGroup ? chat.delete ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} delete
ඬ⃟🌹 ${lenguajeGB.smsAntiEli2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antifake ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} antifake
ඬ⃟🌹 ${lenguajeGB.smsAntiInt2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} antiLink
ඬ⃟🌹 ${lenguajeGB.smsAntiE2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} antiLink2
ඬ⃟🌹 ${lenguajeGB.smsAntiEE2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : lenguajeGB.smsNoGg()} 
ඬ⃟🌹 ${usedPrefix + command} antiTiktok
ඬ⃟🌹 ${lenguajeGB.smsAntiTT2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} antiYoutube
ඬ⃟🌹 ${lenguajeGB.smsAntiYT2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} antiTelegram
ඬ⃟🌹 ${lenguajeGB.smsAntiTEL2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : lenguajeGB.smsNoGg()} 
ඬ⃟🌹 ${usedPrefix + command} antiFacebook
ඬ⃟🌹 ${lenguajeGB.smsAntiFB2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : lenguajeGB.smsNoGg()}
ඬ⃟🌹 ${usedPrefix + command} antiInstagram
ඬ⃟🌹 ${lenguajeGB.smsAntiIG2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : lenguajeGB.smsNoGg()}   
ඬ⃟🌹 ${usedPrefix + command} antiTwitter
ඬ⃟🌹 ${lenguajeGB.smsAntiTW2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaOw()} ${global.opts['pconly'] ? '✅' : '❌'}
ඬ⃟🌹 ${usedPrefix + command} pconly
ඬ⃟🌹 ${lenguajeGB.smsSOLOP2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

ඬ⃟🌹 ${lenguajeGB.smsParaOw()} ${global.opts['gconly'] ? '✅' : '❌'}
ඬ⃟🌹 ${usedPrefix + command} gconly
ඬ⃟🌹 ${lenguajeGB.smsSOLOG2()}

╰▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׅ▭ׄ▭ׅ╯

${wm}`, fkontak2, { mentions: [aa,] })
//conn.sendMessage(m.chat, { text: texto }, { quoted: fkontak })*/
//conn.sendMessage(m.chat, texto, {quoted: fkontak})        
throw false
}
/*await conn.reply(m.chat, `${lenguajeGB['smsAvisoRG']()}➥ *_${lenguajeGB['smsMens1']()}_* > ${type} 
➥ *_${lenguajeGB['smsMens2']()}_* > ${isEnable ? lenguajeGB.smsEncender() : lenguajeGB.smsApagar()} 
➥ *_${lenguajeGB['smsMens3']()}_* > ${isAll ? lenguajeGB.smsMens4() : isUser ? '' : lenguajeGB.smsMens5()}\n╚═════•| ✿ |•═════╝`, fkontak2, m)}*/

await conn.sendButton(m.chat, `➥ _${lenguajeCD['smsMens1']()}_ ${type} 
➥ _${lenguajeCD['smsMens2']()}_  ${isEnable ? lenguajeCD.smsEncender() : lenguajeCD.smsApagar()} 
➥ _${lenguajeGB['smsMens3']()}_  ${isAll ? lenguajeCD.smsMens4() : isUser ? '' : lenguajeCD.smsMens5()}`, wm, null, [[`${isEnable ? lenguajeGB.smsApagar() : lenguajeCD.smsEncender()}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`]], null, null, fkontak2)}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
