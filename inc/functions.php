<?php
add_action('wp_footer', 'ts_scripte');
function ts_scripte()
{
    $tsActive = get_post_meta(get_the_ID(), 'ts_options_activate-tiny-slider-on-this-page', true);
    if ($tsActive == true) {
        $tsSlidesViewport = get_post_meta(get_the_ID(), 'ts_options_how-much-slides-in-viewport', true);
        $tsArrows = get_post_meta(get_the_ID(), 'ts_options_show-navigation-arrows', true);
        $tsNavigation = get_post_meta(get_the_ID(), 'ts_options_navigation', true);
        $tsAnimationSpeed = get_post_meta(get_the_ID(), 'ts_options_animation-speed-ms', true);
        $tsBehavior = get_post_meta(get_the_ID(), 'ts_options_behavior', true);
        $tsLazyload = get_post_meta(get_the_ID(), 'ts_options_lazyload', true);
        $tsAutoplay = get_post_meta(get_the_ID(), 'ts_options_autoplay', true);
        $tsAutoplayduration = get_post_meta(get_the_ID(), 'ts_options_autoplayduration', true);
        $tsLoop = get_post_meta(get_the_ID(), 'ts_options_loop', true);
        $tsGutter = get_post_meta(get_the_ID(), 'ts_options_gutter', true);
        $tsAutoHeight = get_post_meta(get_the_ID(), 'ts_options_auto-height', true);
        ?>
        <script src='<?php echo plugin_dir_url(__FILE__) . '../js/swiper-min.js'; ?>'></script>
        <script>
            window.onload = function () {
                let loadStyle = document.createElement('link');
                let pluginUrl = '<?php echo plugin_dir_url(__FILE__); ?>';
                loadStyle.rel = 'stylesheet';
                loadStyle.href = pluginUrl + '../css/swiper.css';
                loadStyle.type = 'text/css';
                let linkInput = document.getElementsByTagName('link')[0];
                linkInput.parentNode.insertBefore(loadStyle, linkInput);
                const swiperElem = '<div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';
                let galleries = document.querySelectorAll('.wp-block-gallery');
                for (let i = 0; i < galleries.length; i++) {
                    //galleries[i].classList.add('test');
                    org_gal = galleries[i].innerHTML;
                    new_gal = "<div class='swiper-wrapper'>" + org_gal + "</div>";
                    galleries[i].innerHTML = new_gal + swiperElem;
                }
                let imageItems = document.querySelectorAll('.wp-block-gallery .wp-block-image');
                for (let i = 0; i < imageItems.length; i++) {
                    imageItems[i].classList.add('swiper-slide');
                }
                const swiper = new Swiper('.wp-block-gallery', {
                    <?php if ($tsAnimationSpeed == '') {
                        echo 'speed: 400,';
                    } else {
                        echo 'speed:' . $tsAnimationSpeed . ',';
                    }
                    if ($tsAutoplayduration == '') {
                        $tsAutoplaydurationWert = '{delay: 5000,},';
                    } else {
                        $tsAutoplaydurationWert = '{delay: ' . $tsAutoplayduration . ' ,},';
                    }
                    if ($tsAutoplay != '') {
                        echo 'autoplay:' . $tsAutoplaydurationWert;
                    }
                    if ($tsLoop != '') {
                        echo 'loop: true,';
                    }
                    if ($tsNavigation == 'none') {
                        echo '';
                    } elseif ($tsNavigation == 'bullets') {
                        echo 'pagination: {el: ".swiper-pagination", clickable: true,},';
                    } else {
                        echo 'pagination: {el: ".swiper-pagination", type: "fraction",},';
                    }
                    if ($tsGutter != '') {
                        echo 'spaceBetween:' . $tsGutter . ',';
                    }
                    if ($tsSlidesViewport == '') {
                        echo '';
                    } elseif ($tsSlidesViewport == 'auto') {
                        echo 'slidesPerView: "auto",';
                    } else {
                        echo 'slidesPerView:' . $tsSlidesViewport . ',';
                    }
                    if ($tsBehavior == 'slide') {
                        echo '';
                    } elseif ($tsBehavior == 'fade') {
                        echo 'effect: "fade",';
                    } elseif ($tsBehavior == 'cube') {
                        echo 'effect: "cube", grabCursor: true, cubeEffect: {shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.90,},';
                    } elseif ($tsBehavior == 'cards') {
                        echo 'effect: "cards", grabCursor: true,';
                    } else {
                        echo 'effect: "coverflow", grabCursor: true, centeredSlides: true, coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,},';
                    }
                    if ($tsArrows != '') {
                        echo 'keyboard: {enabled: true,},';
                    }
                    if ($tsLazyload != '') {
                        echo 'lazy: true,';
                    }
                    if ($tsAutoHeight != '') {
                        echo 'autoHeight: true,';
                    }
                    ?>
                    // hashNavigation: {
                    //     watchState: true,
                    // },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            };
        </script>
        <?php
        $tsNavigationColor = get_post_meta(get_the_ID(), 'ts_options_navigation-color', true);
        if($tsNavigationColor != ''){
                echo '<style>:root {--swiper-theme-color: ' . $tsNavigationColor . ';}.swiper-pagination-bullet{background-color: '. $tsNavigationColor .'; }</style>';
        }
    };
}

