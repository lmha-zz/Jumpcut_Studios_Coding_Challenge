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
		.when('/payments',
		{
			title: "Payment Options",
			templateUrl: '/partials/payments.html',
			controller: 'payments'
		})
})