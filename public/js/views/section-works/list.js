define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'collections/works',
  'text!templates/section-works/list.html'
], function($, _, Backbone, Works,workListTemplate){
  	var SectionWorkList = Backbone.View.extend({
  		/* HTML element for single page app */
  		el: '.list-works',
  		render: function () {
  			/* Create an instance for reference in anonymous function */
  			var element = this;
  			/* Create a collection of questions */
  			var works = new Works();
  			/* fetch results from db */
  			works.fetch({
  				success: function (works) {
  					/* Load the html template with the data obtained. Each row is passed in JSON format */
  					var listTemplate = _.template(workListTemplate)({works: works.models});
  					element.$el.html(listTemplate);
            var documentWidth = $(document).width();
            $('#backward').addClass('disabled');
            $('.work-article:first-child').addClass('col-sm-offset-2 col-xs-offset-3');
            if(documentWidth <= 768){
              $('.work-article:nth-child(-n + 1)').removeClass('hide');
              $('.work-article:nth-child(2)').removeClass('hide').addClass('rigth-side');
            }else{
              $('.work-article:nth-child(-n + 2)').removeClass('hide');
              $('.work-article:nth-child(3)').removeClass('hide').addClass('rigth-side');
            }
  				}
  			})		
  		},
  	});
  // Our module now returns our view
  return SectionWorkList;
});
