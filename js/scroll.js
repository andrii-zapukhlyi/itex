$(document).ready(function() {
			// Get the header height
			var headerHeight= $('header').outerHeight();
			$('.nav__link').click(function(e) {
				var linkHref = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(linkHref).offset().top - headerHeight
				},1000);
				e.preventDefault();
			});
		});


$(document).ready(function() {
			// Get the header height
			var headerHeight= $('header').outerHeight();
			$('.logo__link').click(function(e) {
				var linkHref = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(linkHref).offset().top - headerHeight
				},1000);
				e.preventDefault();
			});
		});


$(document).ready(function() {
			// Get the header height
			var headerHeight= $('header').outerHeight();
			$('.scrolldown__link').click(function(e) {
				var linkHref = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(linkHref).offset().top - headerHeight
				},1000);
				e.preventDefault();
			});
		});


var windowWidth = $(window).width();

$(document).ready(function() {
	if (windowWidth<768){
		$('.nav__link__Partners').attr('href', '#Partners-m');
	} else{
		$('.nav__link__Partners').attr('href', '#Partners');
	}
});