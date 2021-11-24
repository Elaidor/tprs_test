$(document).ready(function($) {
	$('.account_link').click(function() {
		$('.account-form').fadeIn();
		return false;
	});	
	
	$('.account-form_close').click(function() {
		$(this).parents('.account-form').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.account-form').fadeOut();
		}
	});
	
	$('.account-form').click(function(e) {
		if ($(e.target).closest('.account-form__block').length == 0) {
			$(this).fadeOut();					
		}
	});
});