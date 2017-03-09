$(function(){
	//hide images that are not active
	$('.image:not(.active)').hide();

	$('.slider .buttons .nextBtn').on('click', function(){

		var $slider = $(this).closest('.slider');

		$slider.find('img.active').next().addClass('active');
		$slider.find('img.active').prev().removeClass('active');

		$slider.find('.image:not(.active)').hide();
		$slider.find('.active').show();

	})

	$('.slider .buttons .prevBtn').on('click', function(){
		var $slider = $(this).closest('.slider');

		$slider.find('img.active').prev().addClass('active');
		$slider.find('img.active').next().removeClass('active');

		$slider.find('.image:not(.active)').hide();
		$slider.find('.active').show();
	})
});