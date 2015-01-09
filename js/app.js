// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'modelFileUpload',
  'router', // Request router.js
], function($, _, Backbone,modelFileUpload, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});