var carts = require('./../server/controllers/carts.js');
var invoices = require('./../server/controllers/invoices.js');
var payments = require('./../server/controllers/payments.js');
var tokens = require('./../server/controllers/tokens.js');

module.exports = function Routes(app) {
	app.get('/', function(req, res) { carts.index(req, res) } );
	app.get('/review_order', function(req, res) { payments.index(req, res) } );
	app.post('/carts/createOrder', function(req, res) { carts.placeOrder(req, res) } );
	app.get('/invoices', function(req, res) { invoices.getInvoices(req, res) });
	app.post('/tokens', function(req, res){ tokens.createToken(req,res) });
}