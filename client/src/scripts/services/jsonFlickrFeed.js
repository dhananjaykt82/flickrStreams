(function () {
	'use strict';

	angular
		.module('JsonFlickrFeedService', [])
		.service('getFlickrData', ['$http', getFlickrData]);
        
	function getFlickrData ($http) {
    	this.getData = function (url) {
    		return $http.jsonp(url);
    	};
    }
})();