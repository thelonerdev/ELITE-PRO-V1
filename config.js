require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"2L8CkjjM4UdaAGtj26Ms+v3LZJs9tGTB6lWUUtlIeF4="},"public":{"type":"Buffer","data":"qmqNBmu5gCwiBQmYtGWKltyxNJ69t2QhvgoQH9VHcBg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"AAQFJGkrlSrjhNI5Qp32E4u/sBKiSWa+iTrBFAraams="},"public":{"type":"Buffer","data":"wfHYzWzjkmH0ZtLeB0SRVWViLkzVM289NVAeIevdzWc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GOG5z5OavqapsywIV4aI8sxk0c9JJXrueUmgGW1+pko="},"public":{"type":"Buffer","data":"r4qYxnLtU7Ld6fKemzbJ1HsvhlxdpWLqNOiu2Mfy50k="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"8MEQDbp/FwTLH5zRqi+18C9r58dUozD5xVZ85sO3KVA="},"public":{"type":"Buffer","data":"QZnlVw+9Q84ZfXOBtVp2z3NXmKOwxxIgJF6bTbsD8m8="}},"signature":{"type":"Buffer","data":"/IFKFn6vkAv9T6qYrnsCNwIX1XLgj4qle+TZTTdEySVoEa1qPgkRxAEGPemCBq0PJc5ElF+t558SDM2RK/+VAw=="},"keyId":1},"registrationId":82,"advSecretKey":"7w+RSoGRDaivXKM/YLZnMlgizHU7SqX9K+SW/MMHgxA=","processedHistoryMessages":[],"nextPreKeyId":33,"firstUnuploadedPreKeyId":33,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"QRWYUCDB","me":{"id":"233543824568:4@s.whatsapp.net","lid":"140630382645341:4@lid","name":"_____Majesty"},"account":{"details":"CJmUkuMBEMWbp9EGGAMgACgA","accountSignatureKey":"WlX+lINRGPJYGcJULA3smO1A/vGVZ+S7YobpNapQOnY=","accountSignature":"4I5KXUE8db1dxBSndoCwHSFyCGDOICo/+rTVpU6M2QUn47Xip1DeveJ/4bmaiBj3c4deEt/XCviwn+8VxGHEAw==","deviceSignature":"MWsh9SbYIHOtfKYWdGk6xvVOxtz3rDCsNk8FXuxA07zidKyfbo3eTjloBdJV74+wQZy4RKJHKQIaAfFV0fHIDA=="},"signalIdentities":[{"identifier":{"name":"233543824568:4@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BVpV/pSDURjyWBnCVCwN7JjtQP7xlWfku2KG6TWqUDp2"}}],"platform":"iphone","routingInfo":{"type":"Buffer","data":"CAkICAgN"},"lastAccountSyncTimestamp":1781124559,"myAppStateKeyId":"AAMAAC2l"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '233543824568';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'false';
global.autobio = process.env.AUTO_BIO !== 'false';
global.anti92 = process.env.ANTI_92 === 'false';
global.autoviewstatus = process.env.AUTO_VIEW_STATUS !== 'false';
global.welcome = process.env.WELCOME !== 'false';
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';
global.autoOffline = process.env.AUTO_OFFLINE === 'true'

// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'EliteProTech\n\nContact: +2347047504860';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '✅ Task completed successfully!',
    prem: '⚠️ Access denied. This feature is for premium users only.',
    admin: '⚠️ Admin privileges required to perform this action.',
    botAdmin: '⚠️ I need to be an admin in this chat to execute this command.',
    owner: '⛔ Command restricted to the bot owner.',
    group: 'ℹ️ This command can only be used in group chats.',
    private: 'ℹ️ This command can only be used in private chats.',
    wait: '⏳ Processing your request... Please wait a moment.',
    error: '❌ An unexpected error occurred. Please try again later.',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
