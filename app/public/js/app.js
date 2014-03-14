$(document).ready(function() {
  $("#owl-demo").owlCarousel({
    singleItem : true
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
