$(document).ready(function() {

// functions go here

});


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.overflow = "auto";
}




function openNav1() {
  document.getElementById("mySidenav1").style.width = "100%";
  document.body.style.overflow = "hidden";
}

function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
  document.body.style.overflow = "auto";
}



function openNav2() {
  document.getElementById("mySidenav2").style.width = "100%";
  document.body.style.overflow = "hidden";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
  document.body.style.overflow = "auto";
}



function openNav3() {
  document.getElementById("mySidenav3").style.width = "100%";
  document.body.style.overflow = "hidden";
}

function closeNav3() {
  document.getElementById("mySidenav3").style.width = "0";
  document.body.style.overflow = "auto";
}



function openNav4() {
  document.getElementById("mySidenav4").style.width = "100%";
  document.body.style.overflow = "hidden";
}

function closeNav4() {
  document.getElementById("mySidenav4").style.width = "0";
  document.body.style.overflow = "auto";
}
