var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema ({
	id: {type: String},
	hidden: Boolean,
});

mongoose.model('Transaction', TransactionSchema);