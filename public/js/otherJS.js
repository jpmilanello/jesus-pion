define([
  'jquery',
  'hoverIntent'
], function($,HoverIntent){
    //get width of HTML
    var documentWidth = viewport().width;
    //resize tirgger
    var resizeTrigger;
    if(documentWidth < 768){
      resizeTrigger = 0;
    }else{
      resizeTrigger = 1;
    }
    
    //index of list of work
    var indexPage = 0;
    
    //look for window scroll
    $(window).on('scroll', function() {
      //get width of HTML
      var documentWidth = viewport().width;
      //get vertical scroll top position
      var yScroll = window.pageYOffset;
      //Limit for header to be fixed
      var fixScrollBound = 10; 
      //define limits acoording to html width
      if(documentWidth < 768){
        var aboutScrollBound = 380 + 50 - 40;
        var worksScrollBound = 380 + 380 + 50 - 40;
      }else{
        var aboutScrollBound = 480 - 60;
        var worksScrollBound = 480 + 380 - 60;
      }                
      if(yScroll > fixScrollBound) {
        $('header').addClass('fixed');
        $('header nav ul li a').removeClass('selected');
        $('header nav ul li:nth-child(2) a').addClass('selected');
        $('header nav ul li:nth-child(3) a').addClass('selected');
      }else{
        $('header').removeClass('fixed');
      }
      if(yScroll > aboutScrollBound) {  
        $('header nav ul li a').removeClass('selected');
        $('header nav ul li:nth-child(4) a').addClass('selected');
        $('header nav ul li:nth-child(5) a').addClass('selected');
      }
      if(yScroll > worksScrollBound) {
        $('header nav ul li a').removeClass('selected');
        $('header nav ul li:nth-child(6) a').addClass('selected');
        $('header nav ul li:nth-child(7) a').addClass('selected');
      }
    });
    $('#language-change').click(function (){
      if ($('.en:first-child').is(':visible')){
        $('.en').css({display:"none"});
        $('.sp').css({display:"inline-block"});
      }else{
        $('.en').css({display:"inline-block"});
        $('.sp').css({display:"none"});
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
    );
    $(".works-nav").click(function (){
      order = this.id;
      //get width of HTML
      var documentWidth = viewport().width;
      if(documentWidth < 768){
        worksPerPage = 1;    
      }else{
        worksPerPage = 2;
      }
      if (order == "backward"){
        if(indexPage != 0){
          indexPage -= 1;
          uploadPage(worksPerPage,true);
        }
      }else{
        indexPage += 1;
        uploadPage(worksPerPage,true);
      }
      
    });
    $( window ).resize(function() {
      //get width of HTML
      var documentWidth = viewport().width;
      console.log(documentWidth);
      if(documentWidth < 768 && resizeTrigger == 1){
        resizeTrigger = 0;
        indexPage = 0;
        $('#backward').addClass('disabled');
        uploadPage(1,false);
      }
      if(documentWidth >= 768 && resizeTrigger == 0){
        resizeTrigger = 1;
        indexPage = 0;
        $('#backward').addClass('disabled');
        uploadPage(2,false);
      }
    });
    function uploadPage(worksPerPage,notFirstTime){
      if(notFirstTime){
        $('#backward').removeClass('disabled');
      }
      if(indexPage == 0){
        $('#backward').addClass('disabled');
      }
      $('.work-article').removeClass('rigth-side left-side col-sm-offset-2 col-xs-offset-3');
      $('.work-article:nth-child(-n + ' + (indexPage*worksPerPage + worksPerPage) + ')').removeClass('hide');
      $('.work-article:nth-child(-n + ' + ((indexPage - 1)*worksPerPage + worksPerPage) + ')').addClass('hide');
      $('.work-article:nth-child(' + (indexPage*worksPerPage) + ')').removeClass('hide').addClass('left-side');
      $('.work-article:nth-child(' + ((indexPage + 1)*worksPerPage + 1) + ')').removeClass('hide').addClass('rigth-side');
      $('.work-article:nth-child(' + (indexPage*worksPerPage + 1) + ')').addClass('col-sm-offset-2 col-xs-offset-3');   
      $('.work-article:nth-child(n + ' +((indexPage + 1)*worksPerPage + 2) + ')').addClass('hide');
    };
    function viewport(){
      var e = window
      , a = 'inner';
      if ( !( 'innerWidth' in window ) )
      {
      a = 'client';
      e = document.documentElement || document.body;
      }
      return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
    };
});

