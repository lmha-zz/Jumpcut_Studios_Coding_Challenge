var carts = require('./../server/controllers/carts.js');
var invoices = require('./../server/controllers/invoices.js');
var payments = require('./../server/controllers/payments.js');

module.exports = function Routes(app) {
	app.get('/', function(req, res) { carts.index(req, res) } );
	app.get('/invoices', function(req, res) { invoices.getInvoices(req, res) });
	app.post('/payments/paypal', function(req, res) { payments.paypal(req, res) });
	app.post('/payments/executePayment', function(req, res) { payments.executePayment(req,res) })
}