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
		.when('/paypal_order_confirmation',
		{
			title: "Authorized Payment",
			templateUrl: '/partials/paypal_order_confirmation.html',
			controller: 'authorize'
		})
})