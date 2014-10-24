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
			templateUrl: '/partials/paypal.html',
			controller: 'payments'
		})
		.when('/review_order',
		{
			title: "Pay with Paypal",
			templateUrl: '/partials/review_order.html',
			controller: 'payments'
		})
		.when('/order_confirmation',
		{
			title: "Pay with Paypal",
			templateUrl: '/partials/order_confirmation.html',
			controller: 'payments'
		})
})