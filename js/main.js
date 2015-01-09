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
      deps: ['underscore'],
      exports: 'Backbone'
    },
    modelFileUpload: {
      deps: ['jquery', 'underscore', 'backbone'],
      exports: 'Backbone'
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