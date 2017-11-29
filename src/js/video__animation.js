let hasVisited = sessionStorage.getItem('washere');

if ( ! hasVisited ) {
    document.querySelector('.video').style.display = 'block';
    document.querySelector('.video__contentVideo').addEventListener('ended', function(e) {
      document.querySelector('.video').style.opacity = 0;
      document.querySelector('.video').style.zIndex = -9999;
      document.querySelector('body').style.overflowY = 'auto';
    });
    sessionStorage.setItem('washere', true);
} else {
    document.querySelector('body').style.overflowY = 'auto';
}
