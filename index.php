<?php
/*
Plugin Name: ja.do Swiper Plugin
Plugin URI: https://www.ja.do/
Description: Plugin 4 SwiperJS Slider
Version: 1.0.3
Author: ja.do GmbH
Author URI: https://www.ja.do/
License: MIT
Text Domain: jado
*/


function jado_ts_function() {

    class TinySlider_Options {
        private $config = '{"title":"Swiper Slider Options","prefix":"ts_options_","domain":"ts-options","class_name":"Swiper_Options","post-type":["post","page"],"context":"normal","priority":"default","fields":[{"type":"checkbox","label":"Swiper on this page","description":"transfer all Gallery-Blocks into a Swiper Slider","id":"ts_options_activate-tiny-slider-on-this-page"},{"type":"select","label":"Navigation (Bullets / Numbers)","default":"none","options":"none : None\r\nbullets : Bullets\r\nnumbers : Numbers","id":"ts_options_navigation"},{"type":"text","label":"Slides per View (auto / num)","default":"1","max":"7","min":"1","step":"1","id":"ts_options_how-much-slides-in-viewport"},{"type":"checkbox","label":"Allow Keyboard Control","checked":"1","id":"ts_options_show-navigation-arrows"},{"type":"number","label":"Animation Speed (ms)","default":"400","max":"10000","min":"100","id":"ts_options_animation-speed-ms"},{"type":"select","label":"Behavior","default":"slide","options":"slide : Slide\r\ncube : Cube\r\nfade : Fade\r\ncards : Cards\r\ncoverflow : Coverflow","id":"ts_options_behavior"},{"type":"checkbox","label":"Lazyload","id":"ts_options_lazyload"},{"type":"checkbox","label":"Autoplay","id":"ts_options_autoplay"},{"type":"number","label":"Autoplay Duration (ms)","default":"1000","max":"30000","min":"10","id":"ts_options_autoplayduration"},{"type":"checkbox","label":"Auto Height","checked":"1","id":"ts_options_auto-height"},{"type":"checkbox","label":"Loop","checked":"1","id":"ts_options_loop"},{"type":"number","label":"Space between","max":"1000","min":"1","step":"1","id":"ts_options_gutter"},{"type":"color","label":"Navigation Color","default":"#000000","color-picker":"1","id":"ts_options_navigation-color"}]}';


        public function __construct() {
            $this->config = json_decode( $this->config, true );
            add_action( 'add_meta_boxes', [ $this, 'add_meta_boxes' ] );
            add_action( 'admin_head', [ $this, 'admin_head' ] );
            add_action( 'save_post', [ $this, 'save_post' ] );
        }

        public function add_meta_boxes() {
            foreach ( $this->config['post-type'] as $screen ) {
                add_meta_box(
                    sanitize_title( $this->config['title'] ),
                    $this->config['title'],
                    [ $this, 'add_meta_box_callback' ],
                    $screen,
                    $this->config['context'],
                    $this->config['priority']
                );
            }
        }

        public function admin_enqueue_scripts() {
            global $typenow;
            if ( in_array( $typenow, $this->config['post-type'] ) ) {
                wp_enqueue_script( 'wp-color-picker' );
                wp_enqueue_style( 'wp-color-picker' );
            }
        }

        public function admin_head() {
            global $typenow;
            if ( in_array( $typenow, $this->config['post-type'] ) ) {
                ?><script>
                    jQuery.noConflict();
                    (function($) {
                        $(function() {
                            $('.rwp-color-picker').wpColorPicker();
                        });
                    })(jQuery);
                </script><?php
            }
        }


        public function save_post( $post_id ) {
            foreach ( $this->config['fields'] as $field ) {
                switch ( $field['type'] ) {
                    case 'checkbox':
                        update_post_meta( $post_id, $field['id'], isset( $_POST[ $field['id'] ] ) ? $_POST[ $field['id'] ] : '' );
                        break;
                    default:
                        if ( isset( $_POST[ $field['id'] ] ) ) {
                            $sanitized = sanitize_text_field( $_POST[ $field['id'] ] );
                            update_post_meta( $post_id, $field['id'], $sanitized );
                        }
                }
            }
        }

        public function add_meta_box_callback() {
            $this->fields_table();
        }

        private function fields_table() {
            ?><table class="form-table" role="presentation">
            <tbody><?php
            foreach ( $this->config['fields'] as $field ) {
                ?><tr>
                <th scope="row"><?php $this->label( $field ); ?></th>
                <td><?php $this->field( $field ); ?></td>
                </tr><?php
            }
            ?></tbody>
            </table><?php
        }

        private function label( $field ) {
            switch ( $field['type'] ) {
                default:
                    printf(
                        '<label class="" for="%s">%s</label>',
                        $field['id'], $field['label']
                    );
            }
        }

        private function field( $field ) {
            switch ( $field['type'] ) {
                case 'checkbox':
                    $this->checkbox( $field );
                    break;
                case 'number':
                    $this->input_minmax( $field );
                    break;
                case 'select':
                    $this->select( $field );
                    break;
                default:
                    $this->input( $field );
            }
        }

        private function checkbox( $field ) {
            printf(
                '<label class="rwp-checkbox-label"><input %s id="%s" name="%s" type="checkbox"> %s</label>',
                $this->checked( $field ),
                $field['id'], $field['id'],
                isset( $field['description'] ) ? $field['description'] : ''
            );
        }

        private function input( $field ) {
            if ( isset( $field['color-picker'] ) ) {
                $field['class'] = 'rwp-color-picker';
            }
            printf(
                '<input class="regular-text %s" id="%s" name="%s" %s type="%s" value="%s">',
                isset( $field['class'] ) ? $field['class'] : '',
                $field['id'], $field['id'],
                isset( $field['pattern'] ) ? "pattern='{$field['pattern']}'" : '',
                $field['type'],
                $this->value( $field )
            );
        }

        private function input_minmax( $field ) {
            printf(
                '<input class="regular-text" id="%s" %s %s name="%s" %s type="%s" value="%s">',
                $field['id'],
                isset( $field['max'] ) ? "max='{$field['max']}'" : '',
                isset( $field['min'] ) ? "min='{$field['min']}'" : '',
                $field['id'],
                isset( $field['step'] ) ? "step='{$field['step']}'" : '',
                $field['type'],
                $this->value( $field )
            );
        }

        private function select( $field ) {
            printf(
                '<select id="%s" name="%s">%s</select>',
                $field['id'], $field['id'],
                $this->select_options( $field )
            );
        }

        private function select_selected( $field, $current ) {
            $value = $this->value( $field );
            if ( $value === $current ) {
                return 'selected';
            }
            return '';
        }

        private function select_options( $field ) {
            $output = [];
            $options = explode( "\r\n", $field['options'] );
            $i = 0;
            foreach ( $options as $option ) {
                $pair = explode( ':', $option );
                $pair = array_map( 'trim', $pair );
                $output[] = sprintf(
                    '<option %s value="%s"> %s</option>',
                    $this->select_selected( $field, $pair[0] ),
                    $pair[0], $pair[1]
                );
                $i++;
            }
            return implode( '<br>', $output );
        }

        private function value( $field ) {
            global $post;
            if ( metadata_exists( 'post', $post->ID, $field['id'] ) ) {
                $value = get_post_meta( $post->ID, $field['id'], true );
            } else if ( isset( $field['default'] ) ) {
                $value = $field['default'];
            } else {
                return '';
            }
            return str_replace( '\u0027', "'", $value );
        }

        private function checked( $field ) {
            global $post;
            if ( metadata_exists( 'post', $post->ID, $field['id'] ) ) {
                $value = get_post_meta( $post->ID, $field['id'], true );
                if ( $value === 'on' ) {
                    return 'checked';
                }
                return '';
            } else if ( isset( $field['checked'] ) ) {
                return 'checked';
            }
            return '';
        }
    }
    new TinySlider_Options;

}

add_action( 'init', 'jado_ts_function' );


function jado_load_styles() {
    include(plugin_dir_path( __FILE__ ) . 'inc/functions.php' );
};

add_action( 'wp_enqueue_scripts', 'jado_load_styles' );










