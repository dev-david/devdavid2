
$(document).ready(function()
{	
	$('.logo').hover(function(){
		$('.logo').animate({
			width: '275px'
		});
		$('.logo').mouseleave(function(){
			$('.logo').animate({
				width: '270px'
			});
		});
	});
	$('.projects').hover(function(){
		$('.projects').animate({
			width: '275px'
		});
		$('.projects').mouseleave(function(){
			$('.projects').animate({
				width: '270px'
			});
		});
	});
	$('.aboutme').hover(function(){
		$('.aboutme').animate({
			width: '145px'
		});
		$('.aboutme').mouseleave(function(){
			$('.aboutme').animate({
				width: '140px'
			});
		});
	});
	$('.contact').hover(function(){
		$('.contact').animate({
			width: '145px'
		});
		$('.contact').mouseleave(function(){
			$('.contact').animate({
				width: '140px'
			});
		});
	});
	$('.fancybox').fancybox( { closeClick : 'true' } );
});
