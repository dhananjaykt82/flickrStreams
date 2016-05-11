(function(){
	'use strict';
	
	describe('FlickrFeedControllers', function() {
	  	var flickerApiUrl ='https://api.flickr.com/services/feeds/photos_public.gne?format=json',
	  		getFlickrData,
	  		flickrPublicFeedPromise,
	  		loading,
	  		jsonFlickrFeed,
	  		controller,
	  		timeout,
	  		timerCallback,	  		
		  	FlickrPublicFeeds = [];


	  function beforeEachCallback() {
	  	
		function injectorCallback($injector) {
		  getFlickrData = $injector.get('getFlickrData');
		  controller = $injector.get('$controller');
		}
		module('flickrStreamsApp.controllers');
		inject(injectorCallback);		
		flickrPublicFeedPromise = getFlickrData.getData(flickerApiUrl);

	  }
	  beforeEach(beforeEachCallback);

	  it('flickr inits', function(){
	  	
	  	var vm = controller('mainController', {});
	  	expect(vm.loading).toEqual(true);
	  	
	  });

	  it('JsonFlickrFeed Main controller', function() {
	  	var vm = controller('mainController', {});
	  	vm.flickertags = 'hello';
	  	var $event = {
	  		keyCode: 13
	  	}
	  	vm.loadFlickerUrl($event);
	  	jsonFlickrFeed = function(data){
      		vm.loading = false;
	    	expect(vm.loading).toEqual(false);
	    	expect(vm.flickerStreams.length).toEqual(20);
	  	};
		
	  });

	});
})();