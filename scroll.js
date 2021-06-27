const slider = document.querySelector(".level-container");
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!mouseDown) {
    return;
  }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener("mousedown", startDragging, false);
slider.addEventListener("mouseup", stopDragging, false);
slider.addEventListener("mouseleave", stopDragging, false);

// Scroll arrows
const buttonRight = document.querySelector(".right");
const buttonLeft = document.querySelector(".left");

buttonRight.onclick = function () {
  document.querySelector(".level-container").scrollLeft += 150;
};
buttonLeft.onclick = function () {
  document.querySelector(".level-container").scrollLeft -= 150;
};

//Scroll key
