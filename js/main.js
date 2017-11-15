jQuery(document).ready(function($){
	// $('.event-wrapper').each(function(){
			
	// 		// cache the highest element
	// 		let heightestBox = 0;
			
	// 		// find each title and determine the highest
	// 		$(this).find('.event-box').each(function(){
	// 		// $(this).find('.event-box .event-title', this).each(function(){
				
	// 			// make the height of all the titles the heighest
	// 			if($(this).height() > heightestBox) {
	// 				heightestBox = $(this).height();
	// 			}
	// 			console.log(heightestBox);
	// 		});

	// 		// make an inline css based on the
	// 		// heighest title element
	// 		$('.event-box', this).css({
	// 			'height': heightestBox,
	// 		});

	// 	});

	$('#the-event-loop').each(function(){

		let boxHeight = 0;

		$(this).find('event-wrapper').each(function(){

			thisBoxHeight = $(this).height();
			console.log(thisBoxHeight);
		})
		
	});
});

