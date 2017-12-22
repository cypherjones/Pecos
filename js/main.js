


jQuery(document).ready(function($){

	let n;

	$('#the-event-loop').each(function(){

			
			// // cache the highest element
			let heightestBox = 0;
			
			// find each title and determine the highest
			$(this).find('.event-container', this).each(function(){
				
				// make the height of all the titles the heighest
				if($(this).height() > heightestBox) {
					heightestBox = $(this).height();
				}

				// $this = $(this).html();
				// console.log($this);
				
			});

			// make an inline css based on the
			// heighest title element
			$('.event-container', this).css({
				'height': heightestBox,
			});

	});

	// $('#the-event-loop').find('#event').each(function(num){
	// 	// create rows for each loop of 3 events
	// 		// $(this).wrapAll('<div class="row"></div>"');
	// 		n = num;

	// 		console.log(n);
	// })
	$event = $('.event-container').length;

	console.log($event);
	
	$('.page-id-67459').find('#the-event-loop .event-container').each(function(index, value){

		$(this).attr('id', `#event${index}`);

		$s = $(this).length;
		$i = index;

		var start = $event,
				end = --$i;

		console.log(`${start} to ${end}`);
				
	});





	$('.event-container:lt(3)').wrapAll('<div class="row"></div>');


	// make the titles the same size
	$('#the-event-loop').each(function(){
			
			// // cache the highest element
			let heightBox = 0;
			
			// find each title and determine the highest
			$(this).find('.event-container .event-meta .event-title', this).each(function(){
				
				// make the height of all the titles the heighest
				if($(this).height() > heightBox) {
					heightBox = $(this).height();
				};
				
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
