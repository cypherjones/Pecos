<?php
/**
 * Photo View Single Event
 * This file contains one event in the photo view
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/pro/photo/single-event.php
 *
 * @package TribeEventsCalendar
 * @version 4.4.8
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
} ?>

<?php

global $post;

?>

<div class="event-wrapper">
	<div class="event-box">
		<div class="event-img">
			<img src="<?php echo tribe_event_featured_image( null, 'medium', false, false ); ?>" alt="<?php the_title(); ?> event image">
		</div>
		<div class="event-title">
			<a href="<?php echo esc_url( tribe_get_event_link() ); ?> ">
				<?php the_title(); ?>
			</a>
		</div>
		<div class="event-time">
			<?php echo tribe_events_event_schedule_details(); ?>
		</div>
	</div>
</div>

