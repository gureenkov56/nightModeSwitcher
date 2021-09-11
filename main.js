let wrapper = document.querySelector(".wrapper");
let bgcDark = document.querySelector(".bgc-dark");
let label = document.querySelector("label");
let checkbox = document.querySelector("input");
let element = document.querySelector(".element");
let img = document.querySelector("img");

function changeTheme() {
  if (checkbox.checked) {
    label.classList.add("label-dark");
    element.classList.add("element-dark");
    img.classList.add("img-dark");
    bgcDark.style.cssText = "opacity: 1;";
  } else {
    label.classList.remove("label-dark");
    element.classList.remove("element-dark");
    img.classList.remove("img-dark");
    bgcDark.style.cssText = "opacity: 0;";
  }
}
