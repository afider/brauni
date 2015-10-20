
	$(function() {

		document.getElementById('svg-icons').innerHTML = SVG_ICONS;
 
		$('.js-slider').bxSlider({
			mode: 'fade',
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 0,
			auto: true,
			pause: 5000,
			speed: 1000,
			autoHover: true

		});


		$(".js-goto").click(function(e) {

			var self = $(this),
				targetClass = self.data('goto');
			    target = $(targetClass);

			var speed = 2000;

			 e.preventDefault();

		    $('html, body').animate({
		        scrollTop: target.offset().top
		        
		    }, speed, 'easeInOutCubic');
		});

	});