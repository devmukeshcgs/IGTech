<?php

function telegram_send($message) {
    $curl = curl_init();
    $api_key  = '6369574304:AAHaECJpjE3EHGTw4dzBpaZOkw_hL5qL-No';
    $chat_id  = '1769131615';
    $format   = 'HTML';
    curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot'. $api_key .'/sendMessage?chat_id='. $chat_id .'&text='. $message .'&parse_mode=' . $format);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
    $result = curl_exec($curl);
    curl_close($curl);
    return true;
}
?>