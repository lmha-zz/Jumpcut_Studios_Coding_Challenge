var carts = require('./../server/controllers/carts.js');
var invoices = require('./../server/controllers/invoices.js');
var payments = require('./../server/controllers/payments.js');
var tokens = require('./../server/controllers/tokens.js');

module.exports = function Routes(app) {
	app.get('/', function(req, res) { carts.index(req, res) } );
	app.get('/review_order', function(req, res) { payments.index(req, res) } );
	app.post('/carts/createOrder', function(req, res) { carts.placeOrder(req, res) } );
	app.get('/invoices', function(req, res) { invoices.getInvoices(req, res) });
	app.post('/tokens', function(req, res){ tokens.create(req,res) });
	app.get('/tokens', function(req, res){ tokens.index_json(req,res) });
	app.post('/tokens/accessToken', function(req, res) { tokens.getAccessToken(req,res) });
	app.get('/payments/:acessToken?', function(req, res) { payments.getPayer(req, res) });
	app.post('/payments/paypal', function(req, res) { payments.paypal(req, res) });
	app.post('/payments/approval', function(req, res) { payments.approval(req, res) });
	app.get('/payments/approval', function(req, res) { payments.approval(req, res) });
	app.post('/payments/executePayment', function(req, res) { payments.executePayment(req,res) })
}