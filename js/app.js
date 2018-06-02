"use strict";

// modal toggle

let overlay = document.getElementById('overlay');
let open = document.getElementById('open').addEventListener("click", openModal);
let close = document.getElementById('close').addEventListener("click", closeModal);

function openModal() {
    overlay.classList.remove("is-hidden");

}

function closeModal() {
    overlay.classList.add("is-hidden");
}




// partie static: if opera div display none/ display grid  static Image.

//when click on overlay or croix close de modal