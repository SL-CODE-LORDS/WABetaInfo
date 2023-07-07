const wabetainfo = require('./index')

wabetainfo.articlelist().then(console.log);

wabetainfo.articlelist({search: "sticker"}).then(console.log); // You can get sticker related updates

wabetainfo.articlelist({platform: "web"}).then(console.log); // You can get web platform related articles (android, ios, web, windows)

wabetainfo.latest().then(console.log);

wabetainfo.searchurl('https://wabetainfo.com/whatsapp-beta-for-android-2-23-14-17-whats-new/').then(console.log);