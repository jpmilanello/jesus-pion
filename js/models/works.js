define([
  'underscore',
  'backbone'
], function(_, Backbone){
    var Work = Backbone.Model.extend({
      urlRoot: '/works'
    });
    // Return the model for the module
    return Work;
});
