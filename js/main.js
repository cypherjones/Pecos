


jQuery(document).ready(function($){

	$('#the-event-loop').each(function(){

			// create rows for each loop of 3 events
			$('#the-event-loop > #event:lt(3)').wrapAll('<div class="wpb_row"></div>"');
			
			// // cache the highest element
			let heightestBox = 0;
			
			// find each title and determine the highest
			$(this).find('.event-container', this).each(function(){
				
				// make the height of all the titles the heighest
				if($(this).height() > heightestBox) {
					heightestBox = $(this).height();
				}

				$this = $(this).html();
				console.log($this);
				
			});

			// make an inline css based on the
			// heighest title element
			$('.event-container', this).css({
				'height': heightestBox,
			});

		});



	$('#the-event-loop').each(function(){
			
			// // cache the highest element
			let heightBox = 0;
			
			// find each title and determine the highest
			$(this).find('#event .event-meta .event-title', this).each(function(){
				
				// make the height of all the titles the heighest
				if($(this).height() > heightBox) {
					heightBox = $(this).height();
				}

				$this = $(this).html();
				console.log($this);
				
			});

			// make an inline css based on the
			// heighest title element
			$('.event-title', this).css({
				'height': heightBox,
			});

		});



		// $('#event').each(function(){
			
		// 	// // cache the highest element
		// 	let metaBox = 0;
			
		// 	// find each title and determine the highest
		// 	$(this).find('.event-meta').each(function(){
		// 		if( $(this).height() > 0) {
		// 			console.log('yes');
		// 		} else {
		// 			console.log('no');
		// 		}
		// 	});

		// });

	});
