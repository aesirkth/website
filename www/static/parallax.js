var scrollPosition = 0;
var mastheadElement = document.querySelector(".masthead");
var socialNavBgElement = document.querySelector("nav.social .bg");
var socialNavElement = document.querySelector("nav.social section");

var bg1Element = document.querySelector(".masthead .blur--1 .bg");
var bg2Element = document.querySelector(".masthead .blur--2 .bg");

var halfMastheadSize = 0;
var isRunningFrames = false;

function updateSize() { 
  halfMastheadSize = (mastheadElement.offsetTop + mastheadElement.offsetHeight) / 2;
}
updateSize();

function setPosition(y) {
  scrollPosition = y;
}

function renderFrame() {
  if(isRunningFrames) requestAnimationFrame(renderFrame);

  var delta = Math.max(0, Math.min(1, window.scrollY / halfMastheadSize));
  socialNavBgElement.style.opacity = delta;
  socialNavElement.style.opacity = (1.0 - delta) * 0.2 + 0.8;

  bg1Element.style.transform = "translate3d(0, " + (scrollPosition - delta * 0.25 * window.innerHeight)+ "px, 0)";
  bg2Element.style.transform = "translate3d(0, " + (scrollPosition - delta * 0.25 * window.innerHeight)+ "px, 0)";
}

function eventHandler(evt) {
  lastScrollMillisecond = Date.now();
  
  if(!isRunningFrames) {
    isRunningFrames = true;
    requestAnimationFrame(renderFrame);
  }

  setPosition(window.scrollY);
}
window.addEventListener("touchstart", eventHandler);
window.addEventListener("touchmove", eventHandler);
window.addEventListener("touchend", eventHandler);
window.addEventListener("scroll", eventHandler);
window.addEventListener("resize", updateSize);

renderFrame();