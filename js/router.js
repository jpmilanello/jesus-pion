// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/works/list',
  'views/works/edit'
], function($, _, Backbone, WorkList,EditWork){
  var Router = Backbone.Router.extend({
    routes: {
      	'': 'home',
		'work': 'homeWork',
		'work/new': 'editWork',
		'work/edit/:id': 'editWork',
    }
  });

  var initialize = function(){
  	$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  	  options.url = 'https://personalpageserver.herokuapp.com' + options.url;
  	});

  	$.fn.serializeObject = function() {
  	  var o = {};
  	  var a = this.serializeArray();
  	  $.each(a, function() {
  	      if (o[this.name] !== undefined) {
  	          if (!o[this.name].push) {
  	              o[this.name] = [o[this.name]];
  	          }
  	          o[this.name].push(this.value || '');
  	      } else {
  	          o[this.name] = this.value || '';
  	      }
  	  });
  	  return o;
  	};
  	/* initialize views*/
  	var workList = new WorkList();
  	var editWork = new EditWork();

    var router = new Router();
    // router.on('route:home', function () {
    // 	questionList.render();
    // });
    router.on('route:homeWork', function () {
    	workList.render();
    });
    router.on('route:editWork', function (id) {
    	editWork.render({id: id});
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});

