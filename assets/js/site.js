

$(document).ready(function() 
{
    $('.successmessage').hide();
 });


 $("#mc-embedded-subscribe").click(function() { 
     console.log("clicked");
    setTimeout(subscribed, 2000);
});

 function subscribed() {      
    $('.successmessage').show();
    document.getElementById("mce-FNAME").value = ''
    document.getElementById("mce-LNAME").value = ''
    document.getElementById("mce-EMAIL").value = ''
}

