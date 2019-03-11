<?php
/**
 * Template part for displaying post archives and search results
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		$monTitre = get_the_title($post);
		$noSession = substr($monTitre,4,1);
		
		the_title( sprintf( '<h2 class="entry-title, session%s"><a href="%s1" rel="bookmark">', $noSession, esc_url( get_permalink() ) ), '</a></h2>' );
		?>
	</header><!-- .entry-header -->

</article><!-- #post-${ID} -->
