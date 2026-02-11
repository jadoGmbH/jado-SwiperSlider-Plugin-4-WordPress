<?php
add_action('wp_footer', 'ts_scripte');
function ts_scripte()
{
    if (is_admin()) { return; }
    $post_id = get_queried_object_id();

    // Lese Optionen kontextabhängig; falls keine vorhanden, greifen Defaults im JS weiter unten
    $tsSlidesViewport   = $post_id ? get_post_meta($post_id, 'ts_options_how-much-slides-in-viewport', true) : '';
    $tsArrows           = $post_id ? get_post_meta($post_id, 'ts_options_show-navigation-arrows', true) : '';
    $tsNavigation       = $post_id ? get_post_meta($post_id, 'ts_options_navigation', true) : '';
    $tsNavigationArrows = $post_id ? get_post_meta($post_id, 'ts_options_arrows', true) : '';
    $tsArrowSize        = $post_id ? get_post_meta($post_id, 'ts_options_arrowsize', true) : '';
    $tsNavigationColor  = $post_id ? get_post_meta($post_id, 'ts_options_navigation-color', true) : '';
    $tsAnimationSpeed   = $post_id ? get_post_meta($post_id, 'ts_options_animation-speed-ms', true) : '';
    $tsBehavior         = $post_id ? get_post_meta($post_id, 'ts_options_behavior', true) : '';
    $tsLazyload         = $post_id ? get_post_meta($post_id, 'ts_options_lazyload', true) : '';
    $tsAutoplay         = $post_id ? get_post_meta($post_id, 'ts_options_autoplay', true) : '';
    $tsAutoplayduration = $post_id ? get_post_meta($post_id, 'ts_options_autoplayduration', true) : '';
    $tsLoop             = $post_id ? get_post_meta($post_id, 'ts_options_loop', true) : '';
    $tsGutter           = $post_id ? get_post_meta($post_id, 'ts_options_gutter', true) : '';
    $tsGutterThumbs     = $post_id ? get_post_meta($post_id, 'ts_options_gutterthumbs', true) : '';
    $tsThumbCount       = $post_id ? get_post_meta($post_id, 'ts_options_countthumbs', true) : '';
    $tsAutoHeight       = $post_id ? get_post_meta($post_id, 'ts_options_auto-height', true) : '';
    $tsRespHeight       = $post_id ? get_post_meta($post_id, 'ts_options_respheight', true) : '';
    $tsRespHeightColor  = $post_id ? get_post_meta($post_id, 'ts_options_respheightcolor', true) : '';


        ?>
        <script src='<?php echo plugin_dir_url(__FILE__) . 'js/swiper-min.js'; ?>'></script>
        <?php
        if ($tsNavigation == 'thumbnails') { ?>
            <script>
              (function(){
                var onReady=function(fn){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fn);}else{fn();}};
                onReady(function(){
                  let galElem = document.querySelectorAll('.wp-block-gallery');
                  for (let i = 0; i < galElem.length; i++) {
                      let clone = galElem[i].cloneNode(true);
                      clone.className = '';
                      clone.setAttribute('thumbsslider', '');
                      clone.classList.add('wp-block-gallery-thumbs');
                      galElem[i].after(clone);
                  }
                });
              })();
            </script>
            <?php
        } ?>

        <script>
          (function(){
            var onReady=function(fn){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fn);}else{fn();}};
            onReady(function(){
              let loadStyle = document.createElement('link');
              let pluginUrl = '<?php echo plugin_dir_url(__FILE__); ?>';
              loadStyle.rel = 'stylesheet';
              loadStyle.href = pluginUrl + 'css/swiper.css';
              loadStyle.type = 'text/css';
              let linkInput = document.getElementsByTagName('link')[0];
              if (linkInput && linkInput.parentNode) { linkInput.parentNode.insertBefore(loadStyle, linkInput); }

              let galleryWrap = document.querySelectorAll('.wp-block-gallery, .wp-block-gallery-thumbs');
              for (let i = 0; i < galleryWrap.length; i++) {
                  var orgGal = galleryWrap[i].innerHTML;
                  var newGal = "<div class='swiper-wrapper'>" + orgGal + "</div>";
                  galleryWrap[i].innerHTML = newGal;
              }

              const swiperElem = '<div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';

              let mainGal = document.querySelectorAll('.wp-block-gallery');
              for (let i = 0; i < mainGal.length; i++) {
                  var galWithWrap = mainGal[i].innerHTML;
                  mainGal[i].innerHTML = galWithWrap + swiperElem;
              }

              let galImages = document.querySelectorAll('.wp-block-gallery .wp-block-image, .wp-block-gallery-thumbs .wp-block-image');
              for (let i = 0; i < galImages.length; i++) {
                  galImages[i].classList.add('swiper-slide');
              }

            <?php
            if ($tsNavigation == 'thumbnails') { ?>
            const swiper2 = new Swiper('.wp-block-gallery-thumbs', {
                loop: true,

                <?php if ($tsGutterThumbs == '') {
                    echo 'spaceBetween: 0, ';
                } else {
                    echo 'spaceBetween:' . $tsGutterThumbs . ', ';
                }
                if ($tsThumbCount == '') {
                    echo 'slidesPerView: 4, ';
                } else {
                    echo 'slidesPerView:' . $tsThumbCount . ', ';
                } ?>

                freeMode: true,
                watchSlidesProgress: true,
            });
            <?php
            } ?>

            const swiper = new Swiper('.wp-block-gallery', {
                <?php if ($tsAnimationSpeed == '') {
                    echo 'speed: 400, ';
                } else {
                    echo 'speed:' . $tsAnimationSpeed . ', ';
                }
                if ($tsAutoplayduration == '') {
                    $tsAutoplaydurationWert = '{delay: 5000,}, ';
                } else {
                    $tsAutoplaydurationWert = '{delay: ' . $tsAutoplayduration . ' ,}, ';
                }
                if ($tsAutoplay != '') {
                    echo 'autoplay:' . $tsAutoplaydurationWert;
                }
                if ($tsLoop != '') {
                    echo 'loop: true, ';
                }
                if ($tsNavigation == 'none') {
                    echo '';
                } elseif ($tsNavigation == 'bullets') {
                    echo 'pagination: {el: ".swiper-pagination", clickable: true,}, ';
                } elseif ($tsNavigation == 'thumbnails') {
                    echo '';
                } else {
                    echo 'pagination: {el: ".swiper-pagination", type: "fraction",}, ';
                }
                if ($tsGutter != '') {
                    echo 'spaceBetween:' . $tsGutter . ', ';
                }
                if ($tsSlidesViewport == '') {
                    echo '';
                } elseif ($tsSlidesViewport == 'auto') {
                    echo 'slidesPerView: "auto", ';
                } else {
                    echo 'slidesPerView:' . $tsSlidesViewport . ', ';
                }
                if ($tsBehavior == 'slide') {
                    echo '';
                } elseif ($tsBehavior == 'fade') {
                    echo 'effect: "fade", ';
                } elseif ($tsBehavior == 'cube') {
                    echo 'effect: "cube", grabCursor: true, cubeEffect: {shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.90,}, ';
                } elseif ($tsBehavior == 'cards') {
                    echo 'effect: "cards", grabCursor: true, ';
                } else {
                    echo 'effect: "coverflow", grabCursor: true, centeredSlides: true, coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,}, ';
                }
                if ($tsArrows != '') {
                    echo 'keyboard: {enabled: true,}, ';
                }
                if ($tsLazyload != '') {
                    echo 'lazy: true, ';
                }
                if ($tsAutoHeight != '') {
                    echo 'autoHeight: true, ';
                }
                echo 'navigation: {nextEl: ".swiper-button-next",prevEl: ".swiper-button-prev",}, ';
                if ($tsNavigation == 'thumbnails') {
                    echo 'thumbs: {swiper: swiper2,}, ';
                }
                ?>
            });
            });
          })();
        </script>
        <?php
        if ($tsNavigationColor != '') {
            echo '<style>';
            echo ':root {--swiper-theme-color: ' . $tsNavigationColor . ';}.swiper-pagination-bullet{background-color: ' . $tsNavigationColor . ';}.swiper-pagination-fraction{color: ' . $tsNavigationColor . '};';
            echo '</style>';
        }
        if ($tsArrowSize == '0') {
            echo '<style>';
            echo '.swiper-button-prev:after, .swiper-button-next:after{display: none;}';
            echo '</style>';
        } else {
            echo '<style>';
            echo '.swiper-button-prev:after, .swiper-button-next:after{font-size: ' . $tsArrowSize . '}';
            echo '.swiper-pagination-bullet{width: calc( ' . $tsArrowSize . ' / 5) !important; height: calc( ' . $tsArrowSize . ' / 5) !important}';
            //echo ' .swiper-pagination-current, .swiper-pagination-total{font-size: calc( ' . $tsArrowSize . ' / 2) !important;}';
            echo '</style>';
        }
        if ($tsNavigationArrows == 'triangle') {
            echo '<style>';
            echo '.swiper-button-prev:after, .swiper-button-next:after{font-family: "swiperIcons";}';
            echo '.swiper-button-prev:after{content: "a"; position: relative; left: 0.5em;}';
            echo '.swiper-button-next:after{content: "b";}';
            echo '</style>';
        } elseif ($tsNavigationArrows == 'none') {
            echo '<style>';
            echo '.swiper-button-prev:after, .swiper-button-next:after{display: none;}';
            echo '</style>';
        }

        if($tsRespHeight != ''){
            echo '<style>';
            echo '.wp-block-gallery.swiper-initialized{max-height: ' . $tsRespHeight . 'vh;}';
            echo '.wp-block-gallery.swiper-initialized .swiper-wrapper{height: ' . $tsRespHeight . 'vh;}';
            //echo '.wp-block-gallery.swiper-initialized .swiper-slide img{height: ' . $tsRespHeight . 'vh !important; width: auto !important;}';
            echo '.wp-block-gallery-thumbs .wp-block-image{max-height: ' . $tsRespHeight / 9 . 'vh;}';
            if($tsRespHeightColor != '#dd4312'){
                echo '.swiper-slide{background-color: ' . $tsRespHeightColor . ';}';
            }
            echo '</style>';
        }

    }

