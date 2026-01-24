<?php
function btv_enqueue_scripts()
{
    // Load the main CSS
    wp_enqueue_style('btv-style', get_template_directory_uri() . '/assets/index-B-g2winW.css');

    // Load the main JS
    wp_enqueue_script('btv-app', get_template_directory_uri() . '/assets/index-sTwdr2q3.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'btv_enqueue_scripts');
?>