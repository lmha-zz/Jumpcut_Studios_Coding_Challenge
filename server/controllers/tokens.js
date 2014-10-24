var mongoose = require('mongoose'),
	Token = mongoose.model('Token');

module.exports = {
	index_json: function(req,res) {
		Token.first().exec(function(err, token) {
			console.log(token)
			res.send(JSON.stringify(token))
		});
	},
	create: function(req, res) {
		var a = new Token(req.body);
		a.save(function(err) {
			if(err) {
				res.status(418);
				res.json(err);
			} else {
				res.json(a);
			}
		})
	}
}