


jQuery(document).ready(function($){

	$('#the-event-loop').each(function(){

			
			// // cache the highest element
			let heightestBox = 0;
			
			// find each title and determine the highest
			$(this).find('.event-container', this).each(function(){
				
				// make the height of all the titles the heighest
				if($(this).height() > heightestBox) {
					heightestBox = $(this).height();
				};
			});

			// make an inline css based on the heighest title element
			$('.event-container', this).css({
				'height': heightestBox,
			});

	});

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
			// make an inline css based on the heighest title element
			$('.event-title', this).css({
				'height': heightBox,
			});

		});




	// get a count of the number of events
	$events = $('.event-container').length;

	for (var i = 0; i < $events; i++) {
		if ( i % 3 === 0 ) {

			var inc = i + 3;

			$('.event-container:lt(3)').slice(0).wrap('<div class="row"></div>');

			// console.log(inc);

			// $('#the-event-loop').each(function(){

			// 	$(`.event-container:lt(${inc})`).wrapAll('<div class="row"></div>');

			// })

		};
	};



	// create and index and increment through the events
	$('.page-id-67459').find('#the-event-loop .event-container').each(function(index, value){
		// add an ID to each event based on the index
		$(this).attr('id', `#event${index}`);
	});


});
