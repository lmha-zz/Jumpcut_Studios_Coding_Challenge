var paypal = require('paypal-rest-sdk');
require('../../config/paypal.js');

module.exports = {
	index: function(req, res) {
		res.render('index');
	},
	placeOrder: function(req, res) {
		var subtotal = 0;
		for (var i = 0; i < req.body.product.length; i++) {
			subtotal += parseInt(req.body.product[i].price);
		};
		var tax = (subtotal * 0.0875).toFixed(2);
		var sum = (subtotal + parseFloat(tax) + 30).toFixed(2); // 30 is set shipping price

		var payment_details = {
			"intent": "sale",
			"payer": {
				"payment_method": "credit_card",
				"payer_info": {
					"email": "lisamha89@gmail.com"
				},
				"funding_instruments": [{
					"credit_card": {
						"type": "visa",
						"number": "4032035945181774",
						"expire_month": "10",
						"expire_year": "2019",
						"cvv2": "874",
						"first_name": "Lisa",
						"last_name": "Ha",
						"billing_address": {
							"line1": "465 Shoreline Dr",
							"city": "San Jose",
							"country_code": "US",
							"postal_code": "95116",
							"state": "CA",
							"phone": "123-123-1234"
						}
					}
				}]
			},
			"transactions": [{
				"amount": {
					"total": sum,
					"currency": "USD",
					"details": {
						"subtotal": subtotal,
						"tax": tax,
						"shipping": "30"
					}
				},
				"description": "Buying stuff!." 
			}]
		};

		// var payment_details = {
		// 	"intent": "sale",
		// 	"payer": {
		// 		"payment_method": "paypal"
		// 	},
		// 	"transactions": [{
		// 		"amount": {
		// 			"currency": "USD",
		// 			"total": sum
		// 		},
		// 		"description": "This is the payment transaction description."
		// 	}],
		// 	"redirect_urls": {
		// 		"return_url": "http://www.ebay.com",
		// 		"cancel_url": "https://github.com/lmha"
		// 	}
		// }

		paypal.payment.create(payment_details, function(error, payment){
			if(error){
				res.send(error);
			} else {
				res.send(payment);
			}
		});

	}
}