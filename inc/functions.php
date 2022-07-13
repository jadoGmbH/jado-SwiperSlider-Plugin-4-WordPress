<?php

add_action('wp_footer', 'ts_scripte');
function ts_scripte()
{
    $tsActive = get_post_meta( get_the_ID(), 'ts_options_activate-tiny-slider-on-this-page', true );
    if ($tsActive == true) {
         $tsSlidesViewport = get_post_meta( get_the_ID(), 'ts_options_how-much-slides-in-viewport', true );
         $tsArrows = get_post_meta( get_the_ID(), 'ts_options_show-navigation-arrows', true );
         $tsBullets = get_post_meta( get_the_ID(), 'ts_options_show-navigation-bullets', true );
         $tsAnimationSpeed = get_post_meta( get_the_ID(), 'ts_options_animation-speed-ms', true );
         $tsBehavior = get_post_meta( get_the_ID(), 'ts_options_behavior', true );
         $tsLazyload = get_post_meta( get_the_ID(), 'ts_options_lazyload', true );
         $tsAutoplay = get_post_meta( get_the_ID(), 'ts_options_autoplay', true );
         $tsAutoHeight = get_post_meta( get_the_ID(), 'ts_options_auto-height', true );
         $tsLoop = get_post_meta( get_the_ID(), 'ts_options_loop', true );
         $tsGutter = get_post_meta( get_the_ID(), 'ts_options_gutter', true );
         $tsEdgePadding = get_post_meta( get_the_ID(), 'ts_options_edge-padding', true );
       ?>

        <script src='<?php echo plugin_dir_url( __FILE__ ) . '../js/swiper-min.js'; ?>' async></script>
        <script>
            window.onload = function(){
                let loadStyle = document.createElement('link');
                let pluginUrl = '<?php echo plugin_dir_url( __FILE__ ); ?>';
                loadStyle.rel = 'stylesheet';
                loadStyle.href = pluginUrl + '../css/swiper.css';
                loadStyle.type = 'text/css';
                let linkInput = document.getElementsByTagName('link')[0];
                linkInput.parentNode.insertBefore(loadStyle, linkInput);
                //
                //const swiper = tns({
                //    container: '.wp-block-gallery',
                //    items: <?php //echo $tsSlidesViewport; ?>//,
                //    arrowKeys: <?php //if($tsArrows == ''){echo 'false';}else{echo 'true';} ?>//,
                //    loop: <?php //if($tsLoop == ''){echo 'false';}else{echo 'true';} ?>//,
                //    autoplay: <?php //if($tsAutoplay == ''){echo 'false';}else{echo 'true';} ?>//,
                //    //center: true,
                //    nav: <?php //if($tsBullets == ''){echo 'false';}else{echo 'true';} ?>//,
                //    speed: <?php //if($tsAnimationSpeed == ''){echo '400';}else{echo $tsAnimationSpeed;} ?>//,
                //    autoWidth: <?php //if($tsBehavior != 'autoWidth'){echo 'false';}else{echo 'true';} ?>//,
                //    autoHeight: <?php //if($tsAutoHeight == ''){echo 'false';}else{echo 'true';} ?>//,
                //    gutter: <?php //if($tsGutter == ''){echo '0';}else{echo $tsGutter;} ?>//,
                //    edgePadding: <?php //if($tsEdgePadding == ''){echo '0';}else{echo $tsEdgePadding;} ?>//,
                //    lazyload: <?php //if($tsLazyload == ''){echo 'false';}else{echo 'true';} ?>//,
                //
                //});

                const swiper = new Swiper('.wp-block-gallery', {
                    speed: 400,
                    autoplay: {
                                delay: 500,
                         },
                    loop: true,
                });


                const swiperElem = '<div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div><div class="swiper-scrollbar"></div>';


                org_gal = document.querySelector('.wp-block-gallery').innerHTML;
                new_gal = "<div class='swiper-wrapper'>" + org_gal + "</div>";
                document.querySelector('.wp-block-gallery').innerHTML = new_gal + swiperElem;


                let imageItems = document.querySelectorAll('.wp-block-image');
                for (let i = 0; i < imageItems.length; i++) {
                    imageItems[i].classList.add('swiper-item');
                }






                // TEst2:
                //
                // const swiper = new Swiper('.swiper', {
                //     speed: 400,
                //     autoplay: {
                //         delay: 500,
                //     },
                // });
                //





            };
        </script>
        <?php
    };
};