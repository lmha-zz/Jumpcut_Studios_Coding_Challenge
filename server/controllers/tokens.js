var mongoose = require('mongoose'),
	Token = mongoose.model('Token');

var paypal = require('paypal-rest-sdk');
paypal.configure({
	'mode': 'sandbox', //sandbox or live
	'client_id': 'ATQ8-BAdw0KfAldGUKdGwx6oTZV3IFPNawQ8rm_MqEmILbHoIOqpdTHubwWW',
	'client_secret': 'EKGZvxA8chevcnGsifLbpu8PSMAks_nDXxmUqXXKe1kFkezEjqCl_qf4Fap3'
});

module.exports = {
	index_json: function(req,res) {
		Token.findOne({ _id: "544c2ec65d72522c7292b71d" }).exec(function(err, token) {
			console.log('index_json token '+token);
			res.send(JSON.stringify(token));
		});
	},
	create: function(req, res) {
		Token.update({ _id: "544c2ec65d72522c7292b71d" }, { authCode: req.body.code }, function(err, data) {
			if(err) {
				res.status(418);
				res.json(err);
			} else {
				var a = Token.findOne({ _id: "544c2ec65d72522c7292b71d" }).exec(function(err, token) {
					res.send(JSON.stringify(token));
				});
			}
		})
	},
	getAccessToken: function(req, res) {
		paypal.openIdConnect.tokeninfo.create(req.body.code, function(error, data){
			res.send(JSON.stringify(data))
		});
	}
}