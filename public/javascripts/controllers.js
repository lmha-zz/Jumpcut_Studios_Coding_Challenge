angular.module('shoppingApp').controller('carts', ['$scope', '$http', 'CartFactory', function($scope, $http, CartFactory) {
	$scope.content_title = "Products in your cart:";
	$scope.chargeSummary = {};

	CartFactory.getCart(function(products) {
		$scope.products = products;
	})
	CartFactory.getChargeSummary(function(chargeSummary) {
		$scope.chargeSummary = chargeSummary;
	})
}])

angular.module('shoppingApp').controller('invoices', ['$scope', '$http', 'InvoiceFactory', function($scope, $http, InvoiceFactory) {

	$scope.content_title = "Merchant Invoices:";

	InvoiceFactory.getInvoices(function(invoices) {
		$scope.invoices = invoices;
	})
}])

angular.module('shoppingApp').controller('paypal', ['$scope','$http', 'PaypalFactory', 'CartFactory', function($scope, $http, PaypalFactory, CartFactory) {

	$scope.products;

	$scope.order = function() {
		PaypalFactory.order($scope.products,
			function(confirmationInfo){
				window.location = confirmationInfo.links[1].href;
			},
			function(err){
				console.log('errs ', err)
			})
	}

    CartFactory.getCart(function(products) {
    	$scope.products = products;
	})
	CartFactory.getChargeSummary(function(chargeSummary) {
		$scope.chargeSummary = chargeSummary;
	})

}])

angular.module('shoppingApp').controller('authorize', ['$scope','$http', '$routeParams', 'PaypalFactory', function($scope, $http, $routeParams, PaypalFactory){
	$scope.parseInt = parseInt;
	$scope.payment;
	PaypalFactory.executeApprovedPayment($routeParams.PayerID, function(data) {
		$scope.payment = data;
	})
}])