<?php
extract($_POST);

$admin_email="admissions@ish-edu.com";

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$headers .= "From: ".$admin_email."";
$message = "<html><head></head><body>";

 $message .="
<table style='border:1px solid #ccc;padding:0 15px;'>

<tr>
<td>Name :</td>
<td><b>".$firstname." ".$surname."</b></td>
</tr>

<tr>
<td>Mobile Number :</td>
<td><b>".$mobilenumber."</b></td>
</tr>

<tr>
<td>Email address :</td>
<td><b>".$emailaddress."</b></td>
</tr>

<tr>
<td>Your Query :</td>
<td><b>".$query."</b></td>
</tr>

<tr>
<td>Category of query :</td>
<td><b>".$querycategory."</b></td>
</tr>

</table>";

$message .= "</body></html>";

//$fullinfo = "New Enquiry From Request Prospectus \n
//Name : <span style='font-weight:strong;'>".$firstname." ".$surname."</span>\n
//School Name : ".$schoolname."\n
//Grade : ".$grade."\n
//Mobile No. : ".$mobilenumber."\n
//Email address : ".$emailaddress."\n
//How did you hear about us : ".$howdidhear."\n";
mail("admissions@ish-edu.com, mukesh.thankar@syspiretechnologies.com", "Enquiry From Contact Us Page", $message, $headers );


//Send to Visitor


$admin_email1="admissions@ish-edu.com";

$headers1 .= "MIME-Version: 1.0\r\n";
$headers1 .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$headers1 .= "From: ".$admin_email1."";
$message1 = "<html><head></head><body>";

 $message1 .="<div>
 		<b>Auto-responder template:</b><br/><br/>
		Thank you for your interest in the Indian School of Hospitality.<br/><br/>
		A member of our admissions team will be in touch with you shortly in regards to your query.<br/><br/> 
		Warm regards,<br/><br/>
		ISH Admissions Team<br/>
 	</div>";

$message1 .= "</body></html>";

mail($emailaddress, "Auto-responder template", $message1, $headers1 );
echo "<script>window.location.href = 'contact-us.html'</script>"

?>