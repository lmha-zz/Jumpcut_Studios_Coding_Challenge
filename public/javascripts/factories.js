angular.module('shoppingApp').factory('CartFactory', function($http) {
	var factory = {};
	factory.createOrder = function(product, succsCallback, errCallback) {
		$http.post('/carts/createOrder', { product: product })
			.success(function(data) {
				if(data.httpStatusCode == 201) {
					succsCallback(data);
				} else {
					errCallback(data);
				}
			})
	}
	return factory;
})

angular.module('shoppingApp').factory('ProductFactory', function($http) {
	var factory = {};
	var products = [
		{
			name: "Bike",
			sku: "extracurricular",
			price: "300",
			currency: "USD",
			quantity: "1"
		},
		{
			name: "Computer Chair",
			sku: "furniture",
			price: "300",
			currency: "USD",
			quantity: "3"
		},
		// {
		// 	name: "Coat Rack",
		// 	sku: "furniture",
		// 	price: "40",
		// 	currency: "USD",
		// 	quantity: "3"
		// },
		// {
		// 	name: "Ikea Table",
		// 	sku: "furniture",
		// 	price: "200",
		// 	currency: "USD",
		// 	quantity: "7"
		// }
	]
	factory.getProducts = function(callback) {
		callback(products);
	}
	return factory;
})

angular.module('shoppingApp').factory('InvoiceFactory', function($http) {
	var factory = {};
	var invoices = [];
	factory.getInvoices = function(callback) {
		$http.get('/invoices').success(function(data) {
				if(data.httpStatusCode == 200) {
					invoices = data.payments;
					callback(invoices);
				} else {
					console.log('errors')
					console.log(data);
				}
			})
	}
	return factory;
})