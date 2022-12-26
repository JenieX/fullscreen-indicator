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
