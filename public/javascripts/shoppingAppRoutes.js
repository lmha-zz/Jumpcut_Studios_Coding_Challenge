angular.module('shoppingApp').config(function($routeProvider) {
	$routeProvider
		.when('/',
		{
			title: "Jumpcut Studios Coding Challenge",
			templateUrl: '/partials/carts.html',
			controller:'carts'
		})
		.when('/invoices',
		{
			title: "Payments Received From Merchant",
			templateUrl: '/partials/invoices.html',
			controller: 'invoices'
		})
		.when('/credit_card',
		{
			title: "Pay with Credit Card",
			templateUrl: '/partials/credit_card.html',
			controller: 'payments'
		})
		.when('/paypal',
		{
			title: "Pay with Paypal",
			templateUrl: '/partials/paypal.ejs.html',
			controller: 'payments'
		})
})