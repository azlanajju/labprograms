
function myFunction1() {
  
 document.getElementById("copied").innerHTML = "Copied!";

  var copyText = document.getElementById("myInput");
  copyText.select(); 
  navigator.clipboard.writeText(copyText.value);

  
}
