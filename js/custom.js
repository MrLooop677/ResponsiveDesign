/*global $ */

$(function() {
    'use strict';
    $('.info-list li').click(function() {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});

// another way by javaScript
// let lists = document.querySelectorAll(".information .info-list li");
// lists.forEach((list) => {
//   list.onclick = function () {
//     if (this.className !== "select") {
//       for (let i = 0; i < lists.length; i++) {
//         lists[i].classList.remove("select");
//       }
//       this.classList.add("select");
//       document.querySelectorAll(".info-content div").forEach((d) => {
//         d.style.display = "none";
//       });
//       document.querySelector(
//         `.${this.getAttribute("data-class")}`
//       ).style.display = "block";
//     }
//   };
// });

let toggle = document.querySelector(".the-toggler"),
    nav = document.querySelector(".nav"),
    select = document.querySelector(".sel");


toggle.onclick = makeToggle

function makeToggle() {
    nav.classList.toggle("nav-bar")
    document.querySelector(".navbar .items").classList.toggle("slide")

}

// navbar(nice scroll)
let items = document.querySelectorAll(".items ul li");

items.forEach((item) => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        if (document.querySelector(`${this.getAttribute("data-section")}`) != undefined) {
            document.querySelector(`${this.getAttribute("data-section")}`).scrollIntoView({
                behavior: "smooth",
            });
        }

        items.forEach((it) => {
            if (it.querySelector("a").classList.contains("active")) {
                it.querySelector("a").classList.remove("active")
            }
        })
        item.querySelector("a").classList.add("active")
    });
});