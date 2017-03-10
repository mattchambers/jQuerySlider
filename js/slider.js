$(function(){
	//hide images that are not active
	$('.content:not(.active)').hide();

	//cache DOM elements
	var $nextBtn = $('.slider .buttons .nextBtn');
	var $prevBtn = $('.slider .buttons .prevBtn');

	$nextBtn.on('click', function(){

		var $slider = $(this).closest('.slider');

		$slider.find('.content.active').next().addClass('active');
		$slider.find('.content.active').prev().removeClass('active');

		$slider.find('.content:not(.active)').hide();
		$slider.find('.active').show();

	})

	$prevBtn.on('click', function(){
		var $slider = $(this).closest('.slider');

		$slider.find('.content.active').prev().addClass('active');
		$slider.find('.content.active').next().removeClass('active');

		$slider.find('.content:not(.active)').hide();
		$slider.find('.active').show();
	})
});