//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID ="eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09tK09sSVRSYm9uNGYrSW5nbitUSThuaDkrWjh4eFZvRmZvVjA3YWxrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3dBblR5L0tDYytCMXBONGRINjlva28vRml0Z1V5YkdITW5YUzNncnoxQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrR1hPSUkzRjg0TDRqZEdSSFl3V0lwYzdpSHhVSTJKRHo0OHVMS3k2bVZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTWhZdUVxM3ZWK0tNbXB0ZERQakMwMEtVM2l4RFNwdzJjd3JVaUIycWdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllEWmw0NEVRV1Q1aG1KLzFKWndPOGoyODY0STVGYnFkc3dDL0wrZ0FQSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5pbTJ0ci91cTI4K3I2Rmt5VHN2L0J5SnY4N1haakx3bXZXK1hKOU5ybEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVAyOEpaT21VR3BQMnc5WkJ5bmd5R1NaS3c0R2xSZWU2SG1kWFJUb1Vtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVpmY0kzRldOYmVrc1dZaUtLSTlFaW9nb2M1MkNldjZUeitrdGdkRzgxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdlZVpiMk8xb3Z6QWxmakVsUDFlZ2J4T0FEZEV5OHVLQW1wYjNGNWNMMHBTUElSaVc0U2tCcjViUFpUeFdtcXh5Uk0vOTZZZnFHdEROdG5oR0NVSmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6IldmRFFUQzJrZ01ya21UcTlsTzdDTEcvVjZJbUxJQUFCZHBWNVprSjkzT009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkRBSktYU3N1VEwtcnNGQVBvZkpNSFEiLCJwaG9uZUlkIjoiZmU1YmQwYjYtZjNiOC00MjFiLWE0NjUtNTAwMWI4Y2Y2OWY1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8wYXBWNVdCdHNZODlUOTdlUm9QV0VXeWFLQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrcFBxNEgzM0JkUlFLUEhkaVd5SmVBeFhoUk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTFWQ01ZSEQiLCJtZSI6eyJpZCI6Ijk0NzY0MzA0NjI0OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWlnYXJhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMaWM0dHNIRUp1bmw3b0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1c2ZsVVluUkdpclQzOXJKSEJUdlZ4R3F4NXVIbzVpSHZxWWZQTldRVlNFPSIsImFjY291bnRTaWduYXR1cmUiOiJscEpOMDZaVHU5dnhONm5JdjNDVGxWaDU1YkFIUXFFSnVXNytZazNSRTRzclJWYndFYVdCcU44UzZ5bXBSTHJJckFDWG12RExTZ2ZyZXBnSEZ6MVlBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK3lXWmNCbkRnZllsZTRaMGZqVm5WMXJWdmN1TlRCYmM3R3M5UUY2cllnVVB4cWhYeUZIc3FuM0FPVEk4R2JhT1pVZElwajlzS2FqdkhrRWlOUEhNZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDMwNDYyNDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJySDVWR0owUm9xMDkvYXlSd1U3MWNScXNlYmg2T1loNzZtSHp6VmtGVWgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI2Mjk0MTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWpZIn0="
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdacEd0Rll2ZkF6Zlk0aVhHZU9CVHpnbVNYb1FqcWJYTkJNK25KYmNtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVpCMWF4VFE5YS91U1NsMDVscDc0Q25Ma1N3VFJTdStyTms2UEwrd2JHST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyT2RlYUhORkhXTnNJWkdPQWtCdi9sNE5QUU1oeVBxY1RvejIvRjZzRG5nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4V0hDWm40RjlQYit4a1psbS83MHREaUZKRHphKzU2b1FTeiswVUtvbmlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBERERSL3JVSUJ3UlppS0tTQWVpL2ZUdVdyY1dta2hKUjY2Tm9WWGh6bkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAvQzVoZEEwaWJ0L1F1NkZyVGtYTnkvQkh0OU1JRW91UkFmSmppZGVlRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdtRGpBWDI4cjNENEIvQzFqcWNwekcxeWEwanM2Nm82eTgrYVNOSU1sdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOURybDBLblg5OXNvQjIyRmQzT0IvVGFRVUdxTWo1OGwyU0x6UDhQYVhBOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9uYkJzWXhOdHpKekhwNGh4dzYrNk9zd1BReTJiVmJEUWFYazkzVjRRZFo0cGdYNDZqTVNkZnhRVnVCUjZWbytMdG02dm1vL0x3c1FldkJlSFNCMGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6ImVyWGVwcFlna1U4ZmJQaWI0WnVjTlZDTGZQZDJUVlhtQ2dIdDNBa3NaY009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFjZlNlX0xlVEdtQ0M2ejJZYU00TXciLCJwaG9uZUlkIjoiOTNmNTE1ZDgtMWM3Ny00MjFlLTliZjItODJkODJhOTAxYTI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im12NlBSTnBPUUFaaDVUM241MDRocWd6ZURvbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZitENFRidXJPWEIzdktsT2ZzN1d3bThMVUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDNERjZDNkwiLCJtZSI6eyJpZCI6Ijk0NzY0MzA0NjI0OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWlnYXJhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbWM0dHNIRU9iYm1yb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1c2ZsVVluUkdpclQzOXJKSEJUdlZ4R3F4NXVIbzVpSHZxWWZQTldRVlNFPSIsImFjY291bnRTaWduYXR1cmUiOiJSZ3d4K01RZ0ozSHlkbW1qRkRIU2xWOUNxR0xxL3hEL1hKem1WQzg2Wkh5SlpaZVVYNGd2NjN3OGhWcjlEdkQ3R0p1WWJDMURpSFUxcHdSU056aVFBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVGlLTkNuTWdRL1dlZDg3cHZxZk1TZ0Z6Y3RUd1VrcENSOWo5OWJ0NEJTNkY0NG9DeDlpOTE2ZUV1T2JuRWxmaUhCV2E0d2p2ZXY5NUdNVXg2dXRPaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDMwNDYyNDoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJySDVWR0owUm9xMDkvYXlSd1U3MWNScXNlYmg2T1loNzZtSHp6VmtGVWgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI2ODUyOTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWpZIn0=|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFRRWNSaklFYkVlN2ZEK0h6UDNnQnpkQ1pyeFV1cGp2RE5TRnh6MS8xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkpCV05ibUNRSjJYeUpUaWV3cGdIUmtZQW9EMTVxZ1pMeHZoRHkzZDFYRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSWFyYnpiVWF4RnZZQUZOaXpOTDNGdEJnL1pmRUQ5cnVxZmVURnhvM0Z3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzQzdtZyt4MG5VbzNRN2dHZThjUlg2WVBZbTBNdlcxTFJlYVJVOHJvNlhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBTEE5WkMzWUFwelRsdjJYQWF4UFRkSWw3MjFVZTV3aDZDSWljN3pIRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlBWHBsQkpoQlBsdlNxTW91ZDVvMThyRzljYlFwYTkrTWp3dlV0OVY5MkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFVanFnVG5zTzJWcVA2ZVFSU2pETm9SbXVPNVd5by9HSzZQaGRoWHBYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHVtcDZEdGYza0RpbkJCUkxlTW9oNUYvczkvdGdXa1FBSmdRUGpnU0lsND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI2dFg2UmVmdHAyekZ0cVJvYjIzOE9hTTcvdmwzaFpJT0dRejdDODlERTJ3VXlPZ1ZxRFlrZDVuR3lBVzF6ZThVVVFRaHNMZmlXdlpmSUUyaXNnQmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJCWWxOeW55UE1NbmNDdm5PMjlmVnpDdlp5VURwSlRMOWRzZUV5bjJwa1U0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzcwODgwNzkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIzN0I2ODJFMkMyODMxOTM3RjExMkQ5MjI5MTAzRDM5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI0Mjg0MDF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzcwODgwNzkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY3NzMxOURGMDdDOTFBMTQ5RkI4RUVFQTVDQzdFNzBCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI0Mjg0MDF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzcwODgwNzkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYzQjkzNjREQzZCMzM0MUI1RkQyNzgyNDFDRkY0Q0M0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI0Mjg0MDN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzcwODgwNzkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBBNkI0NDZENjA2MThFNEQ0NkU5RjkxQzMyMDgyNDBGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI0Mjg0MDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFRenJpMy1VVERLdUwtY2Q3aVFLV1EiLCJwaG9uZUlkIjoiMTBmZWMwMjMtOGJlOS00MTNmLWI0MTYtMzI5NDkwNjc5NWQ4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRqMTNhOXYzeDlid0dZWGdmZ0Y5VWFFUjJpTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLZTVXSlhzSm9CTStYUGNRS0gwbHlaWjE3R0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFRYWUdUVzUiLCJtZSI6eyJpZCI6Ijk0NzcwODgwNzkxOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZ2ltaGFuaW5hcnRoYW5hOTMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BEQnFVVVE0NFNMdWdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkpzbllzVmUyNTlpOXFMRjBmYWt5U0lyU1RHNUI1azBRNUMyTHQzeFBGVlk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9vb0pVT1JDa3JQb3NpVFdGSnZMVXBRS0xqYnZDWE5LUU1Kd3ZYUjBPRWU4MkdqanEzbHdBOHhHeTJBQzhuRUttTG9WNW1MbjhQbU05M3pOTlBCa0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4aGZDVUtXZHFrQjNtMHI5T1MyaXBuKzBkcFNlZjB2aWJoM2REamVuRkpLaVY4eEtDV1J6RFQvUUJnVGtjUjFCVUp6b2lPeC8rR0FkTi9SNGRXMWdnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzcwODgwNzkxOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2JKMkxGWHR1Zll2YWl4ZEgycE1raUswa3h1UWVaTkVPUXRpN2Q4VHhWVyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjQyODM5OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGeVkifQ==";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
