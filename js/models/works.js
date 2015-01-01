define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/works'
], function(_, Backbone, WorkModel){
  	var works = Backbone.Collection.extend({
  		model: WorkModel,
  		url: '/works'
  	});
  // You don't usually return a collection instantiated
  	return Works;
});