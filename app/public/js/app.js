$(document).ready(function() {
  var owl = $("#owl-demo").owlCarousel({
    singleItem : true,
    pagination : false, 
    addClassActive : true,
    afterMove: function(e) {
      var contentElement = $('.active').get(0).getElementsByTagName("video")[0];
      if (typeof HTMLVideoElement !== "undefined" && contentElement instanceof HTMLVideoElement) {
        if (contentElement.requestFullscreen) {
              contentElement.requestFullscreen();
        } else if (contentElement.webkitRequestFullscreen) {
              contentElement.webkitRequestFullscreen();
        } else if (contentElement.mozRequestFullScreen) {
              contentElement.mozRequestFullScreen();
        } else if (contentElement.msRequestFullscreen) {
              contentElement.msRequestFullscreen();
        }
        contentElement.play();  
      } 
    },
    beforeMove: function(e) {
      var contentElement = $('.active').get(0).getElementsByTagName("video")[0];
      if (typeof HTMLVideoElement !== "undefined" && contentElement instanceof HTMLVideoElement) {
        contentElement.pause();  
      }
      // full-screen available?
      if (
        document.fullscreenEnabled || 
        document.webkitFullscreenEnabled || 
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ) {
        if (document.exitFullscreen) {
              document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
        }
      }
    }
  });
  
});

$(document).keydown(function(e) {
  var owl = $('#owl-demo');
  switch(e.which) {
    case 37:
      owl.trigger('owl.prev');
      break;
    case 39:
      owl.trigger('owl.next');
      break;
    default: return;
  }
  e.preventDefault();
});
