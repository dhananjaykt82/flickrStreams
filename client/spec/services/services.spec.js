(function(){
	'use strict';
	
	describe('FlickrFeedService', function() {
	  	var flickerApiUrl ='https://api.flickr.com/services/feeds/photos_public.gne?format=json',
	  		getFlickrData,
	  		flickrPublicFeedPromise,
	  		loading,
	  		jsonFlickrFeed,
		  	FlickrPublicFeeds = [];


	  function beforeEachCallback() {
	  	loading = true;
		function injectorCallback($injector) {
		  getFlickrData = $injector.get('getFlickrData');
		}
		module('flickrStreamsApp.services');
		inject(injectorCallback);

		
		flickrPublicFeedPromise = getFlickrData.getData(flickerApiUrl);

	  }
	  beforeEach(beforeEachCallback);

	  it('JsonFlickrFeedService', function() {
	  	var testFlickrPublicFeed = function(response){

	  	}
	  	flickrPublicFeedPromise
	      .then(testFlickrPublicFeed)

	    jsonFlickrFeed = function(data){
      		loading = false;
	    	FlickrPublicFeeds = data.items;
	    	
	    	expect(FlickrPublicFeeds).not.toEqual([]);
			expect(FlickrPublicFeeds.length).toEqual(20);
	  	};

		
	  });

	});
})();