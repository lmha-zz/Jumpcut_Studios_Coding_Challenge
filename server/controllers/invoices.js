var paypal = require('paypal-rest-sdk');
var config_opts = {
	'host': 'api.sandbox.paypal.com',
	'port': '',
	'client_id': 'ATQ8-BAdw0KfAldGUKdGwx6oTZV3IFPNawQ8rm_MqEmILbHoIOqpdTHubwWW',
	'client_secret': 'EKGZvxA8chevcnGsifLbpu8PSMAks_nDXxmUqXXKe1kFkezEjqCl_qf4Fap3'
};

module.exports = {
	getInvoices: function(req, res) {
		var listPayment = {
			'count': '5',
			'start_index': '0'
		};
		paypal.payment.list(listPayment, config_opts, function (get_err, get_res) {
			if (get_err) {
				res.send(JSON.stringify(get_err));
			}
			if (get_res) {
				res.send(JSON.stringify(get_res));
			}
		});
	}
}