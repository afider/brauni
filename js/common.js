
	$(function() {

		document.getElementById('svg-icons').innerHTML = SVG_ICONS;
 
		$('.js-slider').bxSlider({
			mode: 'fade',
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 0,
			auto: false,
			pause: 3000,
			speed: 1000,
			autoHover: true

		});

	});