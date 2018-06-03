"use strict";

let overlay = document.getElementById('overlay');
let loadbg = document.getElementById('loadbg');
let open = document.getElementById('open');
let close = document.getElementById('close')

// close the lightbox and prevent mouseover
function closelightBox() {
    overlay.style.display = "none";
    open.removeEventListener("mouseover", load);
}
// open lightbox and remove loading animation after 3s
function load() {
    loadbg.style.display = "grid";
    setTimeout(function () {
        overlay.style.display = "grid";
        loadbg.style.display = "none";
    }, 3000);
}

open.addEventListener("mouseover", load);
open.addEventListener("click", load);
close.addEventListener("click", closelightBox);



//responsive


// reduire img size


