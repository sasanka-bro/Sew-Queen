/* 
 sew king Whatsapp Bot                       
                       
 Telegram: t.me/Yurensasanka
 Facebook: https://www.facebook.com/bandulasasanka.com
 Licensed under the  GPL-3.0 License;
 
 Coded By Yuren Sasanka
*/ 
let DataPack = require('sew-King-pro');
let SewQueen = require('sew-King-pro/sources/dc/handler');
let Details = require('sew-King-pro/sources/dc/Details');
let axios = require('axios');
let {sendMessagettp, sendMessageEmojiToPng} = require('sew-King-pro/sources/dc/cmd/ttp')
let {SetUPImageInSEWKING} = require('sew-king-pro/sources/dc/cmd/setimg')
let { SendMessageImage } = require('sew-king-pro/sources/dc/cmd/dl')
let {sendMessagelogolist} = require('sew-king-pro/sources/dc/cmd/TextList')
let {sendMessagelogores, sendMessagepngres} = require('sew-king-pro/sources/dc/cmd/textmaker')
let WorkType = Details.WORKTYPE == 'private' ? false : true
var { FancyText, fancyList } = require("fancy-sew-king")
let { MessageType, Mimetype } = require('@sasanka-bro/sew-king-web');
var LOGODISC = '';
var des = '';
if (Details.LANG == 'SI') {
   des = 'ඉමෝජි පින්තූර බවට පත් කරයි'
   LOGODISC = '350 කට අදික ඌ ලෝගො සෑදීම සදහා යොදා ගන්න.අනිවාරයෙන් වචන දෙකක් යෙදිය යුතු අතර වචන දෙක / මගින් වෙන් කරන්න.\n🎲උදා:- .textlogo SEW / KING'
} else {
   des = "You Can Png From Any Emoji"
   LOGODISC = '350+ Text To Image and Logo Maker... Need Two Words And Split Them Using /\neg : .textlogo SEW / king '
}
SewQueen['IntroduceCMD']({
        pattern: 'attp ?(.*)', 
        fromMe: WorkType, 
        disc: 'ttp and 250+ sticker making command...\n*Usage:-* .attp Sew'
       }, 
(async (QueenSew, input) => {
 await sendMessagettp(QueenSew, input)
}));
SewQueen['IntroduceCMD']({
        pattern: 'png ?(.*)', 
        fromMe: WorkType, 
        disc: des
        }, 
(async (QueenSew, input) => { 
await sendMessageEmojiToPng(kingSEW, input)
})); 
SewQueen['IntroduceCMD']({
        pattern: 'textlogo ?(.*)', 
        fromMe: WorkType, 
        disc: LOGODISC
        }, 
(async (QueenSew, input) => { 
await sendMessagelogolist(kingSEW, input)
await sendMessagelogores(kingSEW, input)
})); 
SewQueen['IntroduceCMD']({
        pattern: 'fancy ?(.*)', 
        fromMe: WorkType, 
        disc: '118+ Fancy Text Maker With Unlimited Access'
        }, 
(async (kingSEW, input) => { 
if(input[1].includes('//--//')) {
var text = input[1].split('//--//')[1]
var type = input[1].split('//--//')[0]
var fancy = await FancyText(text)
await kingSEW.client.sendMessage(kingSEW.jid, fancy[type], MessageType.text)
} else {
var list = await fancyList(input[1])
await kingSEW  .client.sendMessage(QueenSew.jid, list, MessageType.listMessage)
}
}));

SewQueen['IntroduceCMD']({
        pattern: 'setimg ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true
        }, 
(async (KingSEW, input) => { 
 if (QueenSew.reply_message === false || KingSEW.reply_message.image === false) return await QueenSew.client.sendMessage(QueenSew.jid,'Reply To Any Image| image size < 100kb\n\n100kb වලට අඩු ඕනෑම රූපයකට රිප්ලයි ලෙස යොදන්න..',MessageType.text);
try {
 await SetUPImageInKingSEW(QueenSew, input)
 } catch (e) {
  if(e.message.includes('display')) {
     return await KingSEW.client.sendMessage(QueenSew.jid,'Your Imgbb APIKEY is invalid.. please add the api key ( api.imgbb.com )',MessageType.text)
     } else {
   return await QueenSew.client.sendMessage(QueenSew.jid,'Do Not Use Bot Here.. This Is Your Log Number',MessageType.text)
   }
  }
})); 
// about me
KingSEW['IntroduceCMD']({
            pattern: 'codeby', 
            fromMe: true, 
            dontAdCommandList: true
            },
 (async (message, input) => {
            var codeby = ` ✬ ᴀʙᴏᴜᴛ ʙᴏᴛ\n\nNAME    : KING SEW\nVERSION : ${Details.VERSION}\nBASED ON: NODEJS / JAVASCRIPT / TYPESCRIPT\nLANGUAGE: SINHALA / ENGLISH\nON      : GITHUB\nLINK    : github.com/sasanka-bro/KingSEW\nWA WEB  : @sasanka-bro/king-sew-web (npm)\nDOCKER  : YurenSasanka/KingSEW:lovegift\n\n✬ ᴀʙᴏᴜᴛ ᴍᴇ \n\nNAME    : YUREN SASANKA\nCOUNTRY : SRI LANKA\nDISTRICT: NUWARAELIYA\nZIP CODE: 0222\nAGE     : 13\nTG      : t.me/Yurensasanka\nYOUTUBE : https://youtube.com/c/SasankaBroTECHlk\nGMAIL   : yurensasanka@gmail.com\nGITHUB  : github.com/sasanka-bro`
            var imagesew = await axios.get('https://i.ibb.co/zRtbGFK/KING-SEW-LOGO-Made-with-Poster-My-Wall.jpg', { responseType: 'arraybuffer' })
            await SendMessageImage(message,Buffer.from(imagesew.data) ,'```' + codeby + '```')
}));


