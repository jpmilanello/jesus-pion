require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    hoverIntent: 'libs/hoverIntent/hoverIntent',
    modelFileUpload: 'libs/model-file-upload/model-file-upload'
  },

  shim: {
    'backbone': {
      deps: ['jquery','underscore'],
      exports: 'Backbone'
    },
    'hoverIntent': {
      deps: ['jquery'],
      exports: 'HoverIntent'
    },
    'modelFileUpload': {
      deps: ['jquery', 'underscore', 'backbone'],
      exports: 'ModelFileUpload'
    }
  }

});
 require.config({
        urlArgs: "v=" +  (new Date()).getTime()
    });

require([

  // Load our app module and pass it to our definition function
  'app',
  'otherJS'
], function(App,otherJS){
  // The "app" dependency is passed in as "App"
  App.initialize();
});