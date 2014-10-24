angular.module('tokenApp').controller('tokens', ['$scope', '$http', function($scope, $http) {
	$scope.authCode;
	$scope.saveToken = function(){
		var href = $scope.code;
		var code = href.substr((href.indexOf('&code=')+6), href.length);
		$scope.authCode = code;
		$http.post('/tokens', function(err, win) {
			if(err) {
				console.log('failed' + err)
			} else {
				console.log('win' + win)
			}
		})
	}
	$scope.test = function() {
		console.log($scope.authCode);
	}
}])