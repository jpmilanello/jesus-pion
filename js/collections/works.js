define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/works'
], function(_, Backbone, WorkModel){
  	var Works = Backbone.Collection.extend({
  		model: WorkModel,
  		url: '/works'
  	});
  	return Questions;
});