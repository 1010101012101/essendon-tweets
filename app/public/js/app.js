$(document).ready(function() {
  var owl = $("#owl-demo").owlCarousel({
    singleItem : true,
    pagination : false, 
    addClassActive : true,
    afterMove: function(e) {
      var contentElement = $('.active').get(0).getElementsByTagName("video")[0];
      if (typeof HTMLVideoElement !== "undefined" && contentElement instanceof HTMLVideoElement) {
        contentElement.play();  
      } 
    },
    beforeMove: function(e) {
      var contentElement = $('.active').get(0).getElementsByTagName("video")[0];
      if (typeof HTMLVideoElement !== "undefined" && contentElement instanceof HTMLVideoElement) {
        contentElement.pause();  
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
