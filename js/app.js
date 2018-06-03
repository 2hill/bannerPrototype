"use strict";

// modal toggle

let overlay = document.getElementById('overlay');
let open = document.getElementById('open');
let close = document.getElementById('close')

function openlightBox() {
    setTimeout(function(){ overlay.style.display = "grid"}, 3000);
}
function closelightBox() {
    overlay.style.display = "none"; 
}

open.addEventListener("mouseover", openlightBox);
open.addEventListener("click", openlightBox);
close.addEventListener("click", closelightBox);
//overlay.addEventListener("click", closelightBox);



// toggle countdown


// partie static: if opera div display none/ display grid  static Image.



//prevent modal tant que animation pas finie*/