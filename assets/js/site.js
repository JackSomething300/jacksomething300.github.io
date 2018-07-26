

$(document).ready(function() 
{
    $('.successmessage').hide();
    document.addEventListener('contextmenu', event => event.preventDefault());
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

