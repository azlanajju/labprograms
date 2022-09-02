
  jSuites.notification({
        name: 'WELCOME',
        
    }); 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function onn() {
  document.getElementById("overlay").style.display = "block";
}

function offf() {
  document.getElementById("overlay").style.display = "none";
}

function myFunction8() {
  
 document.getElementById("demo").innerHTML = "Copied!";

  var copyText = document.getElementById("myInput");
  copyText.select(); 
  navigator.clipboard.writeText(copyText.value);

  
}

function myFunction7() {
  
 document.getElementById("demo1").innerHTML = "Copied!";
  var copyText = document.getElementById("myInput1");
 copyText.select(); 
 
  navigator.clipboard.writeText(copyText.value); 
 
  
}

function myFunction6() {
  
 document.getElementById("demo2").innerHTML = "Copied!";
  var copyText = document.getElementById("myInput2");
  copyText.select();
  
  navigator.clipboard.writeText(copyText.value);
  
 
  
}

function myFunction5() {
  
 document.getElementById("demo3").innerHTML = "Copied!";
  var copyText = document.getElementById("myInput3");
  copyText.select();
  
  navigator.clipboard.writeText(copyText.value);
 
  
}

function myFunction4() {
  
 document.getElementById("demo4").innerHTML = "Copied!";
  var copyText = document.getElementById("myInput4");
  copyText.select();
  
  navigator.clipboard.writeText(copyText.value);
 
  
}

function myFunction3() {
  
 document.getElementById("demo5").innerHTML = "Copied!";
  var copyText = document.getElementById("myInput5");
  copyText.select();
  
  navigator.clipboard.writeText(copyText.value);
 
  
}

function myFunction2() {
  
 document.getElementById("demo6").innerHTML = "Copied!";
  var copyText = document.getElementById("myInput6");
  copyText.select();
  
  navigator.clipboard.writeText(copyText.value);
 
  
}

function myFunction1() {
  
 document.getElementById("demo7").innerHTML = "Copied!";
  var copyText = document.getElementById("myInput7");
  copyText.select();
  
  navigator.clipboard.writeText(copyText.value);
 
  
}

function myFunction0() {
  
 document.getElementById("demo8").innerHTML = "Copied!";
  var copyText = document.getElementById("myInput9");
  copyText.select();
  
  navigator.clipboard.writeText(copyText.value);
 
  
}
