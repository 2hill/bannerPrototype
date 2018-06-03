"use strict";

// modal toggle

let overlay = document.getElementById('overlay');

function openlightBox() {
    overlay.style.display = "grid";
}
function closelightBox() {
    overlay.style.display = "none"; 
}

let open = document.getElementById('open').addEventListener("mouseover", openlightBox);
let close = document.getElementById('close').addEventListener("click", closelightBox);

/*
var test = document.getElementById("test");
  
  
// this handler will be executed only once when the cursor moves over the unordered list
test.addEventListener("mouseenter", function( event ) {   
  // highlight the mouseenter target
  event.target.style.color = "purple";



// partie static: if opera div display none/ display grid  static Image.

//when click on overlay or croix close de modal

//prevent modal tant que animation pas finie*/