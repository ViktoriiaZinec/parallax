"use strict";

let dolphin1 = document.getElementById("dolphin1");
let dolphin2 = document.getElementById("dolphin2");
let sun = document.getElementById("sun");
// let btn = document.getElementById("btn");
let sea = document.getElementById("sea");
let header = document.getElementById("header");
let titles = document.querySelector(".titles");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  dolphin2.style.top = value * -0.2 + "px";
  dolphin2.style.left = value * 0.4 + "px";
  dolphin1.style.top = value * -0.5 + "px";
  dolphin1.style.left = value * -0.5 + "px";
  titles.style.top = value * -1.5 + "px";
  // btn.style.marginTop = 320 + value * 0.3 + "px";

  sun.style.top = value * -0.8 + "px";
  sea.style.top = value * 0.25 + "px";
  header.style.top = value * 0.5 + "px";
});

const logoText = document.querySelector(".logo_text p");
console.log("logoText", logoText);

const text2 = logoText.textContent;
console.log("text2", text2);
logoText.innerHTML = text2
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
  )
  .join("");
