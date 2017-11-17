jQuery(document).ready(function($){

$('#the-event-loop').each(function(){
		
		// // cache the highest element
		let heightestBox = 0;
		
		// find each title and determine the highest
		$(this).find('.event-container', this).each(function(){
			
			// make the height of all the titles the heighest
			if($(this).height() > heightestBox) {
				heightestBox = $(this).height();
			}
			
		});

		// make an inline css based on the
		// heighest title element
		$('.event-container', this).css({
			'height': heightestBox,
		});

	});

	$('#event').each(function(){
		
		// // cache the highest element
		let metaBox = 0;
		
		// find each title and determine the highest
		$(this).find('.event-meta', this).each(function(){
			
			// make the height of all the titles the heighest
			if($(this).height() > metaBox) {
				metaBox = $(this).height();
			}
			
		});

		// make an inline css based on the
		// heighest title element
		$('.event-meta', this).css({
			'height': metaBox,
		});

	});

});
