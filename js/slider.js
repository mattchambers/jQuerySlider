$(function(){
	var $nextBtn = $('.slider .buttons .nextBtn');
	var $prevBtn = $('.slider .buttons .prevBtn');

	function next(){
		var $slider = $(this).closest('.slider');
		var $activeContent = $slider.find('.active');
		

		$activeContent.next().addClass('active').prev().removeClass('active');

		
	}

	function prev(){
		var $slider = $(this).closest('.slider');
		var $activeContent = $slider.find('.active');
		

		$activeContent.prev().addClass('active').next().removeClass('active');
	}

	$nextBtn.on('click', next);
	$prevBtn.on('click', prev);

});