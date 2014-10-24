angular.module('tokenApp').factory('TokenFactory', function($http){
	var factory = {};
	var token;
	
	factory.getToken = function() {
		return token;
	}

	factory.setToken = function(code) {
		token = code;
	}

	factory.grantTokenFromAuthCode = function(code, callback) {
		$http.post('https://api.sandbox.paypal.com/v1/identity/openidconnect/tokenservice', { grant_type: 'authorization_code', code: code, redirect_uri: 'http://localhost:3000/review_order' }).success(function(data){
			console.log('factory token data: ',data);
		})
	}

	return factory;
})