$(document).ready(function(){
	$(".header__burger").click(function(){
		$(".header__nav").toggleClass("active"); return false;
	});
});


$(document).ready(function(){
	$(".header__burger").click(function(){
		$(".header__burger").toggleClass("active"); return false;
	});
});


$(document).ready(function(){
	$(".nav__link").click(function(){
		$(".header__nav").removeClass("active");
		$(".header__burger").removeClass("active");
	});
});


$(document).ready(function(){
	$(".nav__soc-networks__link").click(function(){
		$(".header__nav").removeClass("active");
		$(".header__burger").removeClass("active");
	});
});


$(document).ready(function(){
	$(".lang__link").click(function(){
		$(".header__nav").removeClass("active");
		$(".header__burger").removeClass("active");
	});
});


$(window).scroll(function() {    
	$(".header__nav").removeClass("active");
	$(".header__burger").removeClass("active");
});


$(document).ready(function(){
	$("section").click(function(){
		$(".header__nav").removeClass("active");
		$(".header__burger").removeClass("active");
	});
});