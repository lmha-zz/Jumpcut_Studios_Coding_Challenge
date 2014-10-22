angular.module('shoppingApp').controller('carts', ['$scope', '$http', 'CartFactory', 'ProductFactory', function($scope, $http, CartFactory, ProductFactory) {
	$scope.content_title = "Products in your cart:";

	$scope.placeOrder = function() {
		CartFactory.createOrder($scope.products,
			function(win) {
				$scope.orderPlaced = 'Successfully placed your order. Your transaction ID is: ' + win.transactions[0].related_resources[0].sale.id;
			},
			function(fail) {
				console.log(fail)
				console.log('stuff breaking! :(');
			})
	}
	
	ProductFactory.getProducts(function(products) {
		$scope.products = products;
	})
}])

angular.module('shoppingApp').controller('invoices', ['$scope', '$http', 'InvoiceFactory', function($scope, $http, InvoiceFactory) {

	$scope.content_title = "Merchant Invoices:";

	InvoiceFactory.getInvoices(function(invoices) {
		$scope.invoices = invoices;
	})
}])