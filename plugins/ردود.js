let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `احتين علي احتك 🐦🥹`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 } 
    if (/^لا$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `ازقو زق🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
    } 

if (/^اي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*مايه عشان شرقت*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
}

   if (/^ها|قول|نعم|ععايز اي/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `مايه عشان شرقت  🥲❤️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
   
if (/^كسمك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `ابويا نط على امك ❤️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
}
   
   if (/^بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `اسمها .بوت يسطا انت نسيت النقطة هنفهم فيك لحد امته بقا😂`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
     if (/^نسوان/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `استغفر الله انا محترم 🥺`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
      }
    if (/^الاء/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `العبيطة حج زياد دي ونن عينو م جوا🥺😂`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
      }
    if (/^ضحك$/i.test(m.text) ) { //sem prefixo 
