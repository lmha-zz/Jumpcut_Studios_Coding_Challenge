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
			controller: 'paypal'
		})
		.when('/paypal_review_order',
		{
			title: "Pay with Paypal",
			templateUrl: '/partials/paypal_review_order.html',
			controller: 'paypal'
		})
		.when('/review_order',
		{
			title: "Payment Review",
			templateUrl: '/partials/review_order.html',
			controller: 'payments'
		})
		.when('/order_confirmation',
		{
			title: "Order Confirmation",
			templateUrl: '/partials/order_confirmation.html',
			controller: 'payments'
		})
		.when('/paypal_order_confirmation',
		{
			title: "Authorized Payment",
			templateUrl: '/partials/paypal_order_confirmation.html',
			controller: 'authorize'
		})
})