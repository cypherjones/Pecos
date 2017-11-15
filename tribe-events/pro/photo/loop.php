<?php
/**
 * Photo View Loop
 * This file sets up the structure for the photo view events loop
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/pro/photo/loop.php
 *
 * @version 4.4.2
 * @package TribeEventsCalendar
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

global $more;
$more = false;

?>

<ul id="the-event-loop" class="event-loop">
	<?php while ( have_posts() ) : the_post(); ?>
		<?php do_action( 'tribe_events_inside_before_loop' ); ?>

		<!-- Event  -->
		<li id="event" class="event-container">
			<?php tribe_get_template_part( 'pro/photo/single', 'event' ) ?> 
		</li>

		<?php do_action( 'tribe_events_inside_after_loop' ); ?>
	<?php endwhile; ?>
</ul>

