$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      autoPlay: 1000, //Set AutoPlay to 3 seconds
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });


  $(window).fadeThis({
    distance: 200,
  });
  $(".fleche").hover(function() {
    $(this).addClass('animated bounce infinite');
  },
    function() {
    $(this).removeClass('animated bounce infinite');
    });


});
