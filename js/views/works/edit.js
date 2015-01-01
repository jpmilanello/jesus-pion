define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'router',
  'models/works',
  'text!templates/works/edit.html'
], function($, _, Backbone, Router, Work, editWorkTemplate){
	var EditWork = Backbone.View.extend({
		/* HTML element for single page app */
		el: '.page',
		render: function (options) {
			/* Create an instance for reference in anonymous function */
			var element = this;
			/* if an id is present, it will load the data in the html form template */
			if(options.id){
				/* Create a model of works */
				element.work = new Work({id: options.id});
				/* fetch results from db */
				element.work.fetch({
					success: function (work) {
						/* Load the html template with the data obtained. The row is passed in JSON format */
						var listTemplate = _.template(editWorkTemplate)({work: work});
						element.$el.html(listTemplate);
					}
				})
			/* if an id is not present, it will load an empty html form template */
			}else{
				var listTemplate = _.template(editWorkTemplate)({work: null});
				element.$el.html(listTemplate);
			}	
		},
		/* Control events */
		events: {
			'submit .edit-work-form': 'saveWork',
			'click .delete-work': 'deleteWork'
		},
		/* Function to send the save request (POST if an id is not present, PUT if an id is present) to rest server */
		saveWork: function (ev){
			var worksDetails = $(ev.currentTarget).serializeObject();
			var work = new Work();
			work.save(worksDetails,{
				success: function () {
					/* Trigger home page refresh */
					Backbone.history.navigate('',{trigger: true});
				}
			});
			return false;
		},
		/* Function to send the destry request (DELETE) to rest server */
		deleteWork: function (ev){
			this.work.destroy({
				success: function () {
					/* Trigger home page refresh */
					Backbone.history.navigate('',{trigger: true});
				}
			});
			return false;
		}
	});
 
  	return EditWork;
});
