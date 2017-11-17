jQuery(document).ready(function($){

$('#the-event-loop').each(function(){
		
		// // cache the highest element
		let heightestBox = 0,
		    titleHeight = 0,
		    timeHeight = 0;
		
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

		$(this).find('.event-time').each(function(){
			
			// make the height of all the titles the heighest
			if($(this).height() > titleHeight) {
				titleHeight = $(this).height();
			}
			console.log(titleHeight);
		});

		// find each title and determine the highest
		$(this).find('.event-title', this).each(function(){
			
			// make the height of all the titles the heighest
			if($(this).height() > timeHeight) {
				timeHeight = $(this).height();
			}
			
		});

		$('.event-meta', this).css({
			'height': titleHeight + timeHeight,
		});

		

	});

});
