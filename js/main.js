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

		$(this).find('.event-title', this).each(function(){
			
			// make the height of all the titles the heighest
			if($(this).height() > titleHeight) {
				titleHeight = $(this).height();
			}
			console.log('title height is ' + titleHeight);
		});

		// find each title and determine the highest
		$(this).find('.event-time', this).each(function(){
			
			// make the height of all the titles the heighest
			if($(this).height() > timeHeight) {
				timeHeight = $(this).height();
			}
			console.log('time height is' + timeHeight);
		});

		let totalHeight = titleHeight + timeHeight;

		$('.event-meta', this).css({
			'height': totalHeight,
		});

		

	});

});
