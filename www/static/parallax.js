var scrollPosition = 0;
var mastheadElement = document.querySelector(".masthead");
var socialNavBgElement = document.querySelector("nav.social .bg");
var socialNavElement = document.querySelector("nav.social");
socialNavElement.style.right = "auto";

var halfMastheadSize = 0;
var isRunningFrames = false;

function updateSize() { 
  halfMastheadSize = (mastheadElement.offsetTop + mastheadElement.offsetHeight) / 2;
  socialNavElement.style.width = mastheadElement.offsetWidth + "px";
}
updateSize();

function setPosition(y) {
  scrollPosition = y;
}

function renderFrame() {
  if(isRunningFrames) requestAnimationFrame(renderFrame);

  var delta = Math.max(0, Math.min(1, scrollPosition / halfMastheadSize));
  socialNavBgElement.style.opacity = delta;
}

function eventHandler(evt) {
  lastScrollMillisecond = Date.now();
  
  if(!isRunningFrames) {
    isRunningFrames = true;
    requestAnimationFrame(renderFrame);
  }

  setPosition(scrollingElement.scrollTop);
}

var scrollingElement = document.querySelector(".viewport");
scrollingElement.addEventListener("touchstart", eventHandler);
scrollingElement.addEventListener("touchmove", eventHandler);
scrollingElement.addEventListener("touchend", eventHandler);
scrollingElement.addEventListener("scroll", eventHandler);
window.addEventListener("resize", updateSize);

renderFrame();

document.addEventListener('DOMContentLoaded', function() {
  initializeParallax(document.querySelector('.viewport'));
});