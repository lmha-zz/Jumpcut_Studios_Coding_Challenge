$(document).ready(function(){
	$(document).on('focus', 'input[type=number]', function (e) {
		$(this).on('mousewheel.disableScroll', function (e) {
			e.preventDefault();
		})
	})
	$(document).on('blur', 'input[type=number]', function (e) {
		$(this).off('mousewheel.disableScroll');
	})
	$(document).on('click', '#paypalContainer', function() {
		var left = $(window).width()-200; 
		var top = $(window).height()-275;
		window.open($(this).children('a').attr('href'), 'Login to Paypal', 'width=400, height=550, left='+left+', top='+top);
		return false;
	})
})