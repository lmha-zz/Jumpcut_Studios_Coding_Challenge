var carts = require('./../server/controllers/carts.js');
var invoices = require('./../server/controllers/invoices.js');

module.exports = function Routes(app) {
	app.get('/', function(req, res) { carts.index(req, res) } );
	app.post('/carts/createOrder', function(req, res) { carts.placeOrder(req, res) } );
	app.get('/invoices', function(req, res) { invoices.getInvoices(req, res) });
}