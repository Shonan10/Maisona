		// Script slider
$(document).ready(function(){

	var $images = $('#slider img');
	var $dernier = $images.length - 1;
	var i = 0;

	var fade = function(){

		if (i < $dernier) {

		$images.eq(i+1).fadeIn(2000,function(){
			$images.eq(i).css('display','none');
			i++;
		});

		}else{
			$images.eq(0).fadeIn(0,function(){
				$images.eq(i).fadeOut(2000);
			});
			i = 0;
		}
	};

	var damslide = function(){
		fade();
		window.setInterval(fade,5000);
	};

	window.setTimeout(damslide,3000);
});
