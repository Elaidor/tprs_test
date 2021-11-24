$(document).ready(function($) {
	$('.help-popup-logo').click(function() {
		$('.help-popup').fadeIn();
		return false;
	});	
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.help-popup').fadeOut();
		}
	});
	
	$('.help-popup').click(function(e) {
		if ($(e.target).closest('.help-popup__block').length == 0) {
			$(this).fadeOut();					
		}
	});
});
