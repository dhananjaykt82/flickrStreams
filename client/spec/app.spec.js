(function(){
	'use strict';
	
	describe('flickrStreamsApp Specs says that', function() {
		
	    function beforeEachCallback() {
			
			beforeEach(module('flickrStreamsApp'));
	  	}
	  	beforeEach(beforeEachCallback);
		
	  	it('Unit Testing has been Started', function() {
			expect('hello').toBeTruthy();
			expect('hello').not.toBeFalsy();
	  	});

	});
})();