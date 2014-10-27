angular.module('shoppingApp').factory('CartFactory', function($http) {
	var factory = {};
	var cartProducts = [
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
			price: "175",
			currency: "USD",
			quantity: "3"
		}
	]
	var chargeSummary = {};

	factory.getCart = function(callback) {
		callback(cartProducts);
	}
	factory.getChargeSummary = function(callback) {
		chargeSummary.sum = 0;
		chargeSummary.subtotal = 0;
		chargeSummary.tax = 0;
		chargeSummary.shipping = 30;
		for (var i = 0; i < cartProducts.length; i++) {
			chargeSummary.subtotal += parseInt(cartProducts[i].price)*parseInt(cartProducts[i].quantity);
		};
		chargeSummary.tax = (chargeSummary.subtotal * 0.0875).toFixed(2);
		chargeSummary.sum = (chargeSummary.subtotal + parseFloat(chargeSummary.tax) + 30).toFixed(2); // 30 is set shipping price
		callback(chargeSummary);
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
		{
			name: "Coat Rack",
			sku: "furniture",
			price: "40",
			currency: "USD",
			quantity: "3"
		},
		{
			name: "Ikea Table",
			sku: "furniture",
			price: "200",
			currency: "USD",
			quantity: "7"
		}
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

angular.module('shoppingApp').factory('PaypalFactory', function($http){
	var factory = {};
	var payer = [];
	var accessToken;
	
	factory.order = function(products, payer, accessToken, succsCallback, errCallback) {
		$http.post('/payments/paypal', { products: products, payer: payer, accessToken: accessToken })
			.success(function(data) {
				if(data.httpStatusCode == 201) {
					succsCallback(data);
				} else {
					errCallback(data);
				}
			})
	}

	factory.getAccessToken = function(callback) {
		$http.get('/tokens').success(function(tokenData) {
			accessToken = tokenData.authCode;
			callback(tokenData.authCode);
		})
	}

	factory.getPayer = function(token, callback) {
		$http.get('/payments', { params: { accessToken: token } }).success(function(payerInfo) {
			payer = payerInfo;
			callback(payerInfo);
		})
	}

	factory.executeApprovedPayment = function(payer_id, callback) {
		$http.post('/payments/executePayment', { payer_id: payer_id })
			.success(function(data) {
				if(data.httpStatusCode == 200) {
					callback(data);
					console.log(data)
				}
			})
	}

	return factory;
})

angular.module('shoppingApp').factory('PaymentFactory', function($http){
	var factory = {};
	var payments = [];
	
	factory.useCC = function(callback) {
		
	}
	factory.usePayPal = function(callback) {
		
	}

	return factory;
})