// ==UserScript==
// @name           fullscreen-indicator [DEV]
// @version        0.0.0
// @namespace      https://github.com/JenieX
// @description    Detect fullscreen view and append [FS] to the window title
// @author         JenieX
// @match          *://*/*
// @grant          GM_xmlhttpRequest
// @run-at         document-end
// @noframes
// @compatible     edge Violentmonkey
// @compatible     chrome Violentmonkey
// @supportURL     https://github.com/JenieX/fullscreen-indicator/issues
// @homepageURL    https://github.com/JenieX/fullscreen-indicator
// @updateURL      https://github.com/JenieX/fullscreen-indicator/raw/main/dist/fullscreen-indicator.meta.js
// @downloadURL    https://github.com/JenieX/fullscreen-indicator/raw/main/dist/fullscreen-indicator.user.js
// @icon           https://github.com/JenieX/fullscreen-indicator/blob/main/src/icons/dev.png?raw=true
// @license        MIT
// ==/UserScript==

GM_xmlhttpRequest({
  url: 'http://192.168.1.39:3905/user-script-grunt?folder=fullscreen-indicator&_=.js',
  // eslint-disable-next-line no-eval
  onload: ({ responseText }) => eval(responseText),
});
