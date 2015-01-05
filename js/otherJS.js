define([
  'jquery',
], function($){
    //look for window scroll
    $(window).on('scroll', function() {
      //get width of HTML
      var documentWidth = $(document).width();
      //get vertical scroll top position
      var yScroll = window.pageYOffset;
      //Limit for header to be fixed
      var fixScrollBound = 10; 
      //define limits acoording to html width
      if(documentWidth <= 768){
        var aboutScrollBound = 380 - 40;
        var worksScrollBound = 380 + 380 - 40;
      }else{
        var aboutScrollBound = 570 - 60;
        var worksScrollBound = 570 + 380 - 60;
      }                
      if(yScroll > fixScrollBound) {
        $('header').addClass('fixed');
        $('header nav ul li a').removeClass('selected');
        $('header nav ul li:nth-child(1) a').addClass('selected');
      }else{
        $('header').removeClass('fixed');
      }
      if(yScroll > aboutScrollBound) {  
        $('header nav ul li a').removeClass('selected');
        $('header nav ul li:nth-child(2) a').addClass('selected');
      }
      if(yScroll > worksScrollBound) {
        $('header nav ul li a').removeClass('selected');
        $('header nav ul li:nth-child(3) a').addClass('selected');
      }
    });
});

