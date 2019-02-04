// JavaScript Document
(function ($) {
	$('#historia-instagram .card').hover(
		function(){
			
			$(this).find('.card-capiton').show('slow');
		},
		function(){
			$(this).find('.card-capiton').hide('slow');
		}
	)
	

})(jQuery)