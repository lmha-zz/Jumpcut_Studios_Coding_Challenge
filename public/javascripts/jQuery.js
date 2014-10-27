$(document).ready(function(){
	var paypalMini;
	$(document).on('focus', 'input[type=number]', function (e) {
		$(this).on('mousewheel.disableScroll', function (e) {
			e.preventDefault();
		})
	})
	$(document).on('blur', 'input[type=number]', function (e) {
		$(this).off('mousewheel.disableScroll');
	})
	$(document).on('click', '#paypalContainer', function() {
		var left = window.screenLeft+(window.outerWidth/2-200); 
		var top = window.screenTop+(window.outerHeight/2-275);
		paypalMini = window.open($(this).children('a').attr('href'), 'Login to Paypal', 'width=400, height=550, left='+left+', top='+top);
		paypalMini.focus();
		return false;
	})
	$(window).on('hashchange', function(){
		if(window.location.hash.indexOf("#/paypal_review_order") != -1) {
			paypalMini.close();
		}
	})
})