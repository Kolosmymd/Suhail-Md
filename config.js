const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50943108866";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_29_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM0LFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgNzksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICA0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAwLFxuICAgICAgICA2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxSd2VTVFQya1YzWGZWZjFlMFJ6WFlxSVlFUEhqOE9PWEtKQXYzcDFkWEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5NDMxMDg4NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU2RDA2MEQ2RUEzQUJCRTY0MzdEMjU3QkJFODg3RDBGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjAxNDk2NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuOU1xdEF0M1NhR195eXRvekJCWXlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFhZDMzMzIyLWYzMTAtNGU5Mi1hZmQ0LTg1YzFmZTIyMzJjOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICA0NCxcbiAgICAgIDIxOCxcbiAgICAgIDEwMixcbiAgICAgIDc2LFxuICAgICAgMTQ4LFxuICAgICAgMTcsXG4gICAgICAyMTYsXG4gICAgICAxMzEsXG4gICAgICA3NSxcbiAgICAgIDEwNCxcbiAgICAgIDE5MSxcbiAgICAgIDE0MCxcbiAgICAgIDIzLFxuICAgICAgNjAsXG4gICAgICAxOTYsXG4gICAgICAyNixcbiAgICAgIDc2LFxuICAgICAgMjQsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAxNjEsXG4gICAgICA1MyxcbiAgICAgIDE0LFxuICAgICAgMjIsXG4gICAgICAyMjEsXG4gICAgICAxMzgsXG4gICAgICAzNCxcbiAgICAgIDE2LFxuICAgICAgMjA5LFxuICAgICAgODMsXG4gICAgICA1NSxcbiAgICAgIDkyLFxuICAgICAgMTMwLFxuICAgICAgMjAxLFxuICAgICAgMTgsXG4gICAgICAxOTUsXG4gICAgICAxNjYsXG4gICAgICAxNCxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4xRlNROUQ4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0MzEwODg2NjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NzIxODM4NzQyMzM2NDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05uS3NzOEJFT3k1ajdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUlYxWjJqNmJCZTNXcVcwcDlVanlPMDFudEg2UFhjZGlUQUVtakU2SWpqRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwV2dJTTZDclhLeUNWNDR3QmxxUjUwUUk0M1NabTBRYndiakowNWxQajJ6UWs3N28xdkwzZXdzYlNnRnJIYkpsOWNwejRrU2ZQTElMd2xFV1BIV09BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJZlB4dkhLUGNLZ0xnNGhkbER0L1RDaXBnYVAzWnZsa1IwZDI2ekdpNzl0QnZkWFhLMXozM1NVdzVxdmZSZTh4c3A0b09Bc25jZDVIc3NzTTFDZytpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0MzEwODg2NjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDE0OTU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFVsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIVWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNOTVQQWszS0ZrU2pOSVQ2bkY3TEFnSkV1Ykp6MFkyT2k1YVNFeEhGalRjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQzNDkzOTIyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "KOLOSMYMD",
  ownername:process.env.OWNER_NAME|| "kolosmy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
