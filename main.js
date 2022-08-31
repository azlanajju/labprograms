
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
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("text-btn")
 
  
}

function myFunction7() {
  var copyText = document.getElementById("myInput1");
  copyText.select();
  document.execCommand("text-btn")
 
  
}

function myFunction6() {
  var copyText = document.getElementById("myInput2");
  copyText.select();
  document.execCommand("text-btn")
 
  
}

function myFunction5() {
  var copyText = document.getElementById("myInput3");
  copyText.select();
  document.execCommand("text-btn")
 
  
}

function myFunction4() {
  var copyText = document.getElementById("myInput4");
  copyText.select();
  document.execCommand("text-btn")
 
  
}

function myFunction3() {
  var copyText = document.getElementById("myInput5");
  copyText.select();
  document.execCommand("text-btn")
 
  
}

function myFunction2() {
  var copyText = document.getElementById("myInput6");
  copyText.select();
  document.execCommand("text-btn")
 
  
}

function myFunction1() {
  var copyText = document.getElementById("myInput7");
  copyText.select();
  document.execCommand("text-btn")
 
  
}

function myFunction0() {
  var copyText = document.getElementById("myInput9");
  copyText.select();
  document.execCommand("text-btn")
 
  
}
