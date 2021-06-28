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
(function () {
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    document.querySelector(".level-container").scrollLeft -= delta * 40; // Multiplied by 40
    e.preventDefault();
  }
  if (document.querySelector(".level-container").addEventListener) {
    // IE9, Chrome, Safari, Opera
    document
      .querySelector(".level-container")
      .addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document
      .querySelector(".level-container")
      .addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document
      .querySelector(".level-container")
      .attachEvent("onmousewheel", scrollHorizontally);
  }
})();
