var mongoose = require('mongoose');

var TokenSchema = new mongoose.Schema ({
	token: {type: String}
})

mongoose.model('Token', TokenSchema);