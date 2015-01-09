define([
  'underscore',
  'backbone',
  'modelFileUpload',
], function(_, Backbone,ModelFileUpload){
    var Work = Backbone.Model.extend({
      urlRoot: '/works',
      fileAttribute: 'image'
    });
    // Return the model for the module
    return Work;
});
