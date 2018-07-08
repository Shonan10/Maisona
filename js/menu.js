		// Script responsive
function responsiveMenu() {	
	$('#menulabel').click(function () {
		$('.menu').slideToggle("slow");

		if ($('.limenu > a').attr('href')) {
			$('.limenu > a').attr('hrefsave',function(){
				return $(this).attr('href');
			});
			$('.limenu > a').removeAttr('href');
		}else{
			$('.limenu > a').attr('href',function(){
				return $(this).attr('hrefsave');
			});
			$('.limenu > a').removeAttr('hrefsave');
		}
		});	
		
		$('.menu .limenu').click(function () {
			if ($('#menulabel').css('display') == 'block') {
				$(this).toggleClass('active');
				$(this).toggleClass('plus');
				$(this).toggleClass('moins');
				$('.sousmenu',this).slideToggle("slow");
			}else if($('.sousmenu',this).css("display") == 'block'){
				$('.sousmenu',this).slideUp("slow");
			}
		});
};


		// Script datepicker
$( function() {
    $( ".datepicker" ).datepicker( $.datepicker.regional[ "fr" ] );
    $( ".locale" ).on( "change", function() {
      $( ".datepicker" ).datepicker( "option",
        $.datepicker.regional[ $( this ).val() ] );
    });
} );


		//Script button return top page
$(function(){
    $("#hautpage").click(function(){
        $("html, body").animate({scrollTop: 0}, 1500,'easeInCubic');
    });
});
		
		
		//Script for stick
$(function(){
		$("#sticky").sticky({topSpacing:0});
});

		// Script form.cv
$(function(){

		$('#champcv').click(function(){
			$('#cv').click();
				$('#champcv').blur();
		});

		$('#champmotiv').click(function(){
			$('#motiv').click();
				$('#champmotiv').blur();
		});

		$('#cv').change(function(){
			var valeur = $('#cv').val();
				$('#champcv').attr('value',valeur);
		});
						
		$('#motiv').change(function(){
			var valeur = $('#motiv').val();
				$('#champmotiv').attr('value',valeur);
		});
});
		
		// anonym function
$(function() {
	responsiveMenu();
});