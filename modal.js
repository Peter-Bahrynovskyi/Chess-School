let nav_modal = document.getElementById("nav_modal");
let nav_btn = document.getElementById("btn_modal_nav");
let nav_span = document.getElementsByClassName("close_modal_nav")[0];

nav_btn.onclick = function () {
   nav_modal.style.display = "block";
}
nav_span.onclick = function () {
   nav_modal.style.display = "none";
}
window.onclick = function (event) {
   if (event.target === nav_modal) {
      nav_modal.style.display = "none";
   }
}


let about_modal = document.getElementById("about_modal");
let about_btn = document.getElementById("btn_modal_about");
let about_span = document.getElementsByClassName("close_modal_about")[0];

about_btn.onclick = function () {
   about_modal.style.display = "block";
}
about_span.onclick = function () {
   about_modal.style.display = "none";
}
window.onclick = function (event) {
   if (event.target === about_modal) {
      about_modal.style.display = "none";
   }
}