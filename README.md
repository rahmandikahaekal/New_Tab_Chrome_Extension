# :rocket: New Tab Clock
Try to create chrome extension (reference by developer.chrome.com and image get from unsplash.com), for more information
and how to use this , let's follow the step bellow :+1:

## Screenshoot
![Result of Extension](Screenshoot.png)

## Development

1. Clone this repo `git clone https://github.com/rahmandikahaekal/NewTab.git`
2. Go to chrome extensions [chrome://extensions](chrome://extensions)
3. Enable developer mode
4. Click on load unpacked extension and selectthis cloned repo

Calls :
- browserAction.onClicked
- tabs.captureVisibleTab
- tabs.onUpdated.addListener
- tabs.onUpdated.removeListener
- extension.getViews
- tabs.create
- bookmarks.getChildren

Source Files :
- css
  - bootstrap.min.css
  - font-awesome.min.css
  - main.css
- images 
  - calendar.png
  - classroom.png
  - contacts.png
  - docs.png
  - drive.png
  - gmail.png
  - hangouts.png
  - maps.png
  - myaccount.png
  - news.png
  - photos.png
  - plus.png
  - youtube.png
- js
  - background.js
  - bookmarks.js
  - bootstrap.min.js
  - content.js
- index.html
- logo_ext.png
- manifest.json
