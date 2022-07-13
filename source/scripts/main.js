import Form from './_components/_form.js';
import { setupComponent } from './_common/_utils.js';

[['.form', Form]].forEach(setupComponent);

$(function() {
	$('.top-slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {}
			},
			{
				breakpoint: 600,
				settings: {}
			},
			{
				breakpoint: 480,
				settings: {}
			}
		]
	});
});
