var mongoose = require('mongoose'),
	Transaction = mongoose.model('Transaction');

var paypal = require('paypal-rest-sdk');
paypal.configure({
	'mode': 'sandbox', //sandbox or live
	'client_id': 'ATQ8-BAdw0KfAldGUKdGwx6oTZV3IFPNawQ8rm_MqEmILbHoIOqpdTHubwWW',
	'client_secret': 'EKGZvxA8chevcnGsifLbpu8PSMAks_nDXxmUqXXKe1kFkezEjqCl_qf4Fap3'
});

module.exports = {
	paypal: function(req, res) {
		var paymentInfo;
		var items = [];
		var subtotal = 0;
		for (var i = 0; i < req.body.products.length; i++) {
			var temp = {};
			subtotal += parseInt(req.body.products[i].price)*parseInt(req.body.products[i].quantity);
			temp.name = req.body.products[i].name;
			temp.sku = req.body.products[i].sku;
			temp.price = req.body.products[i].price;
			temp.currency = req.body.products[i].currency;
			temp.quantity = parseInt(req.body.products[i].quantity);
			items.push(temp);
		};

		var tax = (subtotal * 0.0875).toFixed(2);
		var sum = (subtotal + parseFloat(tax) + 30).toFixed(2); // 30 is set shipping price

		var payment_details = {
			"intent": "sale",
			"payer": {
				"payment_method": "paypal"
			},
			"transactions": [{
				"item_list": {
					"items": items
				},
				"amount": {
					"currency": "USD",
					"total": sum,
					"details": {
						"shipping": '30',
						"subtotal": subtotal,
						"tax": tax
					}
				},
				"description": "This is the payment transaction description."
			}],
			"redirect_urls": {
				"return_url": "https://jumpcut-studios-task.herokuapp.com/#/paypal_order_confirmation",
				"cancel_url": "https://jumpcut-studios-task.herokuapp.com/#/"
			}
		}

		paypal.payment.create(payment_details, function(error, payment){
			if(error){
				console.log(error)
				res.send(error)
			} else {
				Transaction.update({ _id: "544de22f5d72522c7292b71e" }, { id: payment.id }, function(err, data) {} )
				res.send(payment);
			}
		});

	},
	executePayment: function(req, res) {
		var execute_payment_details = { "payer_id": req.body.payer_id };
		var paymentID;

		Transaction.findOne({ _id: "544de22f5d72522c7292b71e" }).exec(function(err, payment) {
			paypal.payment.execute(payment.id, execute_payment_details, function(err, invoice){
				if(err){
					res.send(err)
				} else {
					res.send(invoice);
				}
			});
		});
	}
}