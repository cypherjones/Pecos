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

<!-- <div class="event-wrapper">
 --><div class="event-img">
			<img src="<?php echo tribe_event_featured_image( null, 'large', false, false ); ?>" alt="<?php the_title(); ?> event image">
		</div>
		<div class="event-meta">
			<div class="event-title">
				<a href="<?php echo esc_url( tribe_get_event_link() ); ?> ">
					<h2><?php the_title(); ?></h2>
				</a>
				<p><?php echo tribe_events_event_schedule_details(); ?></p>
			</div>
			<div class="event-time">
				
			</div>
		</div>
<!-- </div> -->

