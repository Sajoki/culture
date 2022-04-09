var header = $('.header_menu'),
	scrollPrev = 0;

$(window).scroll(function() {
	let scrolled = $(window).scrollTop(), dat1 = $("#about_culture").offset().top, dat2 = $("#dat2").offset().top, dat3 = $("#dat3").offset().top, dat4 = $("#dat4").offset().top, dat5 = $("#dat5").offset().top, dat6 = $("#dat6").offset().top; dat7 = $("#dat7").offset().top; dat8 = $("#dat8").offset().top;

	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	}
	else if ((scrolled >= dat1 && scrolled <= dat2) || (scrolled >= dat3 && scrolled <= dat4) || (scrolled >= dat5 && scrolled <= dat6) || (scrolled >= dat7 && scrolled <= dat8)) {
		header.addClass('out');
	}
	else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});