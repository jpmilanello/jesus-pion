define([
  'jquery',
  'hoverIntent'
], function($,HoverIntent){
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
        var aboutScrollBound = 380 + 50 - 40;
        var worksScrollBound = 380 + 380 + 50 - 40;
      }else{
        var aboutScrollBound = 480 - 60;
        var worksScrollBound = 480 + 380 - 60;
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
    $('#social-media li a img').hoverIntent(
      function () {
        var src = $(this).attr("src");
        src = src.split("-alpha");
        var new_src = src[0] + src[1];
        $(this).animate(
          {rotation: 360},
          { duration: 300,
            step: function(now, fx) {
              $(this).css({"-webkit-transform": "rotate("+now+"deg)",
                           "-moz-transform": "rotate("+now+"deg)",
                           "-ms-transform": "rotate("+now+"deg)",
                           "transform": "rotate("+now+"deg)"});
              $(this).parent().parent().children('div').css({display:"block"});
              $(this).attr("src",new_src);
            }
          }
        );
      }, function () {
        var src = $(this).attr("src");
        src = src.split(".png");
        var new_src = src[0] + "-alpha.png";
        $(this).attr("src",new_src);
        $(this).animate(
          {rotation: 0},
          { duration: 300,
            step: function(now, fx) {
              $(this).css({"-webkit-transform": "rotate("+now+"deg)",
                           "-moz-transform": "rotate("+now+"deg)",
                           "-ms-transform": "rotate("+now+"deg)",
                           "transform": "rotate("+now+"deg)"});
              $(this).parent().parent().children('div').css({display:"none"});
              $(this).attr("src",new_src);
            }
          }
        );
      }
    )
});

