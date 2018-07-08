		// Script avis
$(function(){
	$('.grp-avis-etoiles .fa').mouseover(function(){
		var etoile = $(this).attr('value');
		$('.grp-avis-etoiles .fa:lt('+etoile+')').removeClass('fa-star-o');
		$('.grp-avis-etoiles .fa:lt('+etoile+')').addClass('fa-star');
	});

	$('.grp-avis-etoiles .fa').mouseleave(function(){
		var etoile = $(this).attr('value');
		$('.grp-avis-etoiles .fa:lt('+etoile+')').removeClass('fa-star');
		$('.grp-avis-etoiles .fa:lt('+etoile+')').addClass('fa-star-o');
	});

	$('.grp-avis-etoiles .fa').click(function(){
		var etoile = $(this).attr('value');
		$('.grp-avis-etoiles .fa').removeClass('fullstar');
		$('.grp-avis-etoiles .fa:lt('+etoile+')').addClass('fullstar');
		$('#note').val(etoile);
	});
});
