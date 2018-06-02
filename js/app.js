"use strict";

// modal toggle

let overlay = document.getElementById('overlay');

function openlightBox() {
    overlay.style.display = "grid";
}
function closelightBox() {
    overlay.style.display = "none"; 
}

let open = document.getElementById('open').addEventListener("click", openlightBox);
let close = document.getElementsByClassName('cross900').addEventListener("click", closelightBox);



// partie static: if opera div display none/ display grid  static Image.

//when click on overlay or croix close de modal

//prevent modal tant que animation pas finie