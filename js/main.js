$('.event-wrapper').each(function(){
		
		// cache the highest element
		let heightestBox = 0;
		
		// find each title and determine the highest
		$(this).find('.event-box .event-title', this).each(function(){
			
			// make the height of all the titles the heighest
			if($(this).height() > heightestBox) {
				heightestBox = $(this).height();
			}
			console.log(heightestBox);
		});

		// make an inline css based on the
		// heighest title element
		$('.event-title', this).css({
			'height': heightestBox,
		});

	});