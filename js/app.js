"use strict";

// modal toggle

let overlay = document.getElementById('overlay');
let loadbg = document.getElementById('loadbg');


let open = document.getElementById('open');
let close = document.getElementById('close')


function closelightBox() {
    overlay.style.display = "none"; 
}

function load() {
     loadbg.style.display = "grid";
     setTimeout(function(){ overlay.style.display = "grid";
                            loadbg.style.display = "none";  }, 3000);
}

open.addEventListener("mouseover", load);
open.addEventListener("click", load);
close.addEventListener("click", closelightBox);
//overlay.addEventListener("click", closelightBox);


//responsive

// partie static: if opera div display none/ display grid  static Image.

// reduire img size

//prevent modal tant que animation pas finie*/

