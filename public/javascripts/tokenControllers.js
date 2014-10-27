angular.module('tokenApp').controller('tokens', ['$scope', '$http', 'TokenFactory', function($scope, $http, TokenFactory) {
	var authCode;
	
	$scope.getAccessToken = function() {
		TokenFactory.getAccessTokenFromAuthCode($scope.code, 
			function(errs) {
				$scope.errs = errs;
			},
			function(data) {
				TokenFactory.createCode(data.access_token,
					function(errs) {
						$scope.errs = errs;
					},
					function(data) {
						$scope.authCode = data.authCode;
					}
				);
			}
		);
	}
}])