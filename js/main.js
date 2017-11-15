jQuery(document).ready(function($){

	$('#the-event-loop').each(function(){

		let titleHeight = 0,
		    thisBoxHeight = 0;

		$(this).find('.event-container', this).each(function(){

			if($(this).height() > thisBoxHeight) {
				thisBoxHeight = $(this).height();
			}
			
			console.log(thisBoxHeight);

			$('event-container', this).css({
				'height': thisBoxHeight,
			});

		});



	});

});
