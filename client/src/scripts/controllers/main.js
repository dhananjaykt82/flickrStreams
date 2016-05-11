(function () {

	angular
		.module('MainController', ['flickrStreamsApp.services'])
		.controller('mainController', ['getFlickrData', mainController]);
    
	function mainController (getFlickrData) {
		var self = this;
		var flickerApiUrl ='https://api.flickr.com/services/feeds/photos_public.gne?format=json';

    	self.flickertags = '';
    	self.loading = true;
    	
	    getFlickrData.getData(flickerApiUrl)
	    	.then(function(response) {
        
      		});
    	jsonFlickrFeed = function(data){
      		self.loading = false;
	    	self.flickerStreams = data.items;
	    
	  	};

	  	self.loadFlickerUrl = function($event){      
	      var keyCode = $event.which || $event.keyCode;
	      if (keyCode === 13 && self.flickertags) {
	        self.loading = true;
	        var tags = self.flickertags;
	        flickerApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags="+tags;
	        getFlickrData.getData(flickerApiUrl)
	          .then(function(response) {
	            
	          });
	      }
	    };
	   	
    }
})();