jQuery(document).ready(function($){

	$('#the-event-loop').each(function(){

		let titleHeight = 0,
		    thisBoxHeight = 0;

		$(this).find('.event-container', this).each(function(){

			if($(this).height() > thisBoxHeight) {
				thisBoxHeight = $(this).height();
			}
			
			console.log(thisBoxHeight);

			$(this).css({
				'height': thisBoxHeight,
			});

		});

		$(this).find('.event-container .event-container .event-wrapper .event-title', this).each(function(){

			if($(this).height() > titleHeight) {
				titleHeight = $(this).height();
			}
			
			console.log('the title ' + titleHeight);

			$(this).css({
				'height': titleHeight,
			});

		});

	});

});

