$(document).ready(function(){
	$(document).on('focus', 'input[type=number]', function (e) {
		$(this).on('mousewheel.disableScroll', function (e) {
			e.preventDefault();
		})
	})
	$(document).on('blur', 'input[type=number]', function (e) {
		$(this).off('mousewheel.disableScroll');
	})
})