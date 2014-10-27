angular.module('tokenApp').factory('TokenFactory', function($http){
	var factory = {};
	var authCode;
	var accessToken;
	
	factory.createCode = function(code, errCallback, succCallback) {
		$http.post('/tokens', { code: code })
			.success(function(code) {
				authCode = code;
				succCallback(authCode);
			})
			.error(function(err){
				errCallback(err);
			})
	}

	factory.getAccessTokenFromAuthCode = function(code, errCallback, succCallback) {
		$http.post('/tokens/accessToken', {code: code})
			.success(function(accsToken) {
				accessToken = accsToken;
				succCallback(accessToken);
			})
			.error(function(err){
				errCallback(err);
			})
	}

	return factory;
})