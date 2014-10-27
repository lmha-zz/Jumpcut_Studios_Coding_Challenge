var mongoose = require('mongoose');

var TokenSchema = new mongoose.Schema ({
	authCode: {type: String},
	hidden: Boolean,
});

mongoose.model('Token', TokenSchema);