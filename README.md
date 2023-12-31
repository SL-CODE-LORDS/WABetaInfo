<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="https://wabetainfo.com/wp-content/uploads/2021/01/image-100x100.jpg" alt="Esana"></a>
</p>

# **WABetaInfo** - A Web Scrape NPM package of wabetainfo.com (unofficial)

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/SL-CODE-LORDS/WABetaInfo.svg)](https://github.com/SL-CODE-LORDS/WABetaInfo/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/SL-CODE-LORDS/WABetaInfo.svg)](https://github.com/SL-CODE-LORDS/WABetaInfo/pulls)
[![License](https://img.shields.io/badge/license-GPLv3-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Change log](#changelog)

## 🧐 About <a name = "about"></a>

This is an unofficial scrape of wabetainfo.com and all post credit goes to **[@wabetainfo](https://wabetainfo.com/)**. This project is based on Javascript.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing
```sh
yarn add @sl-code-lords/wabetainfo
```

or

```sh
npm i @sl-code-lords/wabetainfo
```

## 🎈 Usage <a name="usage"></a>
```js
const wabetainfo = require("@sl-code-lords/wabetainfo")
```

### Methods

### wabetainfo.articlelist() - Get the first page articles.
Code:
```js
const posts = await wabetainfo.articlelist()
console.log(posts)
```
Output:
```
[ 
    {
        id: 'post-22961',
        title: 'WhatsApp beta for Android 2.23.14.17: what’s new?',
        date: 'July 7, 2023',
        platform: 'ANDROID',
        shortdesc: 'WhatsApp is rolling out a new update through the Google Play Beta Program, bringing the version up to 2.23.14.17.\n' +
        'What’s new in this update? WhatsApp is working on a feature to filter conversations right within the chat list, and it will be available in a future update of the app!',
        url: 'https://wabetainfo.com/whatsapp-beta-for-android-2-23-14-17-whats-new/'
    },
    ... 9 more items
]
```

### Use filters for wabetainfo.articlelist()
Code:
```js
// Search articles by query
const posts = await wabetainfo.articlelist({search: "sticker"})
console.log(posts) // You can get sticker related updates

// Platform wise articles (android, ios, web, windows)
const posts = await wabetainfo.articlelist({platform: "web"})
console.log(posts) // You can get web platform related articles
```

### wabetainfo.latest()
Code:
```js
const latest = await wabetainfo.latest();
console.log(latest)
```
Output:
```json
{
  "title": "WhatsApp beta for Android 2.23.14.17: what’s new?",
  "date": "July 7, 2023",
  "platform": "ANDROID",
  "url": "https://wabetainfo.com/whatsapp-beta-for-android-2-23-14-17-whats-new/",
  "image": "https://wabetainfo.com/wp-content/uploads/2023/07/WA_FILTER_BAR_CHAT_LIST_ANDROID.png",
  "shortdesc": "WhatsApp is rolling out a new update through the Google Play Beta Program, bringing the version up to 2.23.14.17.\nWhat’s new in this update? WhatsApp is working on a feature to filter conversations right within the chat list, and it will be available in a future update of the app!",
  "fulldesc": "WhatsApp is rolling out a new update through the Google Play Beta Program, bringing the version up to 2.23.14.17.\nWhat’s new in this update? WhatsApp is working on a feature to filter conversations right within the chat list, and it will be available in a future update of the app!After announcing a bottom navigation bar with the WhatsApp beta for Android 2.23.10.6 update, WhatsApp is now developing new tools to improve the user experience. Two weeks ago, we posted our concept regarding a new interface for the app, which included a filter button. The idea behind this concept was to address the current challenge of accessing the filtering feature, as the current implementation is not very user-friendly. We wanted to bring the ability to filter our conversations to the chat list because we think that a better placement of the filter button would greatly improve the user experience. Through the WhatsApp beta for Android 2.23.14.17 update from the Google Play Store, we discovered that WhatsApp is now working on a new feature to easily filter the chat list, available in a future update of the app.As you can see in this screenshot, WhatsApp is really working on a new tool to manage the chat list by allowing users to filter their conversations with ease. We know it’s definitely a coincidence that the development of this feature similarly coincides with our earlier concept, but we are really glad that WhatsApp came up with a similar idea by bringing the ability to filter conversations right within the chat list. We think it definitely reinforces the importance of improving the accessibility of this feature right within the chat list.At the moment, WhatsApp has plans to introduce three filters at the top of the chat list, taking the place of the tabs that were previously located there before being replaced by the bottom navigation bar. These filters include options for organizing chats based on unread messages, personal conversations, and business-related chats. While these filters cater to specific categories of chats, the absence of a dedicated filter for group chats is definitely noticeable. Group chats play a crucial role in communication for many WhatsApp users, and having a convenient way to filter and access them would greatly enhance the overall user experience. However, although a dedicated filter to quickly get a list of group chats is missing, we hope that WhatsApp will consider adding it during the development of this feature in the future. The ability to filter the chat list is under development and it will be available in a future update of the app. As always, we will publish an additional article when we have further details to share with you.Stay up-to-date on WhatsApp news by following WABetaInfo on Twitter where you can also discover other new features for WhatsApp beta for Android, iOS, Web/Desktop, and Windows.",
  "faq": [
    {
      "question": "Name of the feature?",
      "answer": "Filter chat list"
    },
    {
      "question": "Status?",
      "answer": "Under development"
    },
    {
      "question": "Availability?",
      "answer": "WhatsApp is working on bringing a filter bar to a future update of the app."
    },
    {
      "question": "I’ve installed this update but I don’t have this feature. Why?",
      "answer": "This feature is not available because it’s in development so it’s not ready for the release, but you can discover a preview in this article."
    },
    {
      "question": "Previous news?",
      "answer": "WhatsApp beta for Android 2.23.14.16: what’s new? WhatsApp is releasing a sticker suggestion feature!"
    }
  ]
}
```
### wabetainfo.searchurl(url)
Code:
```js
const search = await wabetainfo.searchpost('https://wabetainfo.com/whatsapp-beta-for-android-2-23-14-17-whats-new/');
console.log(search)
```
Output:
```json
{
  "title": "WhatsApp beta for Android 2.23.14.17: what’s new?",
  "date": "July 7, 2023",
  "platform": "ANDROID",
  "url": "https://wabetainfo.com/whatsapp-beta-for-android-2-23-14-17-whats-new/",
  "image": "https://wabetainfo.com/wp-content/uploads/2023/07/WA_FILTER_BAR_CHAT_LIST_ANDROID.png",
  "shortdesc": "WhatsApp is rolling out a new update through the Google Play Beta Program, bringing the version up to 2.23.14.17.\nWhat’s new in this update? WhatsApp is working on a feature to filter conversations right within the chat list, and it will be available in a future update of the app!",
  "fulldesc": "WhatsApp is rolling out a new update through the Google Play Beta Program, bringing the version up to 2.23.14.17.\nWhat’s new in this update? WhatsApp is working on a feature to filter conversations right within the chat list, and it will be available in a future update of the app!After announcing a bottom navigation bar with the WhatsApp beta for Android 2.23.10.6 update, WhatsApp is now developing new tools to improve the user experience. Two weeks ago, we posted our concept regarding a new interface for the app, which included a filter button. The idea behind this concept was to address the current challenge of accessing the filtering feature, as the current implementation is not very user-friendly. We wanted to bring the ability to filter our conversations to the chat list because we think that a better placement of the filter button would greatly improve the user experience. Through the WhatsApp beta for Android 2.23.14.17 update from the Google Play Store, we discovered that WhatsApp is now working on a new feature to easily filter the chat list, available in a future update of the app.As you can see in this screenshot, WhatsApp is really working on a new tool to manage the chat list by allowing users to filter their conversations with ease. We know it’s definitely a coincidence that the development of this feature similarly coincides with our earlier concept, but we are really glad that WhatsApp came up with a similar idea by bringing the ability to filter conversations right within the chat list. We think it definitely reinforces the importance of improving the accessibility of this feature right within the chat list.At the moment, WhatsApp has plans to introduce three filters at the top of the chat list, taking the place of the tabs that were previously located there before being replaced by the bottom navigation bar. These filters include options for organizing chats based on unread messages, personal conversations, and business-related chats. While these filters cater to specific categories of chats, the absence of a dedicated filter for group chats is definitely noticeable. Group chats play a crucial role in communication for many WhatsApp users, and having a convenient way to filter and access them would greatly enhance the overall user experience. However, although a dedicated filter to quickly get a list of group chats is missing, we hope that WhatsApp will consider adding it during the development of this feature in the future. The ability to filter the chat list is under development and it will be available in a future update of the app. As always, we will publish an additional article when we have further details to share with you.Stay up-to-date on WhatsApp news by following WABetaInfo on Twitter where you can also discover other new features for WhatsApp beta for Android, iOS, Web/Desktop, and Windows.",
  "faq": [
    {
      "question": "Name of the feature?",
      "answer": "Filter chat list"
    },
    {
      "question": "Status?",
      "answer": "Under development"
    },
    {
      "question": "Availability?",
      "answer": "WhatsApp is working on bringing a filter bar to a future update of the app."
    },
    {
      "question": "I’ve installed this update but I don’t have this feature. Why?",
      "answer": "This feature is not available because it’s in development so it’s not ready for the release, but you can discover a preview in this article."
    },
    {
      "question": "Previous news?",
      "answer": "WhatsApp beta for Android 2.23.14.16: what’s new? WhatsApp is releasing a sticker suggestion feature!"
    }
  ]
}
```

## ✍️ Authors <a name = "authors"></a>

- [@BlackAmda](https://github.com/BlackAmda) - scraped project author

See also the list of [contributors](https://github.com/SL-CODE-LORDS/Esana-News/contributors) who participated in this project.

## 🪵 Change log <a name = "changelog"></a>
### v1.2.0 [07/07/2023]
- Library changed to @sl-code-lords/wabetainfo
- Rename functions. - (articlelist, latest, searchurl)
- Feature: Platform wise article list.
- Feature: Search by query article list.
- Fix: Article image.

### v1.1.0 [27/01/2023]
- Packages update - Axios@0.27.2 > Axios@1.2.5
- Fix: Test node file.
- Fix: Split error when scraping image in latest post.

## License
This project is protected by the `GNU General Public License v3.0.`

## Disclaimer
`WABetaInfo` name, we have nothing to do with the website officially. If any complains please contact via sl.amdakolla@gmail.com