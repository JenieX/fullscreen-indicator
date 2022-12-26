// ==UserScript==
// @name           fullscreen-indicator
// @version        0.0.1
// @namespace      https://github.com/JenieX
// @description    Detect fullscreen view and append [FS] to the window title
// @author         JenieX
// @match          *://*/*
// @run-at         document-end
// @noframes
// @compatible     edge Violentmonkey
// @compatible     chrome Violentmonkey
// @supportURL     https://github.com/JenieX/fullscreen-indicator/issues
// @homepageURL    https://github.com/JenieX/fullscreen-indicator
// @updateURL      https://github.com/JenieX/fullscreen-indicator/raw/main/dist/fullscreen-indicator.meta.js
// @downloadURL    https://github.com/JenieX/fullscreen-indicator/raw/main/dist/fullscreen-indicator.user.js
// @icon           https://github.com/JenieX/fullscreen-indicator/blob/main/src/icons/user.png?raw=true
// @license        MIT
// ==/UserScript==

let originalTitle;
document.documentElement.addEventListener('fullscreenchange', () => {
  const isFullScreen = !!document.fullscreenElement;

  if (isFullScreen) {
    originalTitle = document.title;
    document.title += ' [FS]';
  } else {
    document.title = originalTitle;
  }
});
