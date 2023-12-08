// time start and reset
var recordingBTN = document.querySelector(".recording-btn");
var starBtn = document.querySelector(".recording-btn .start");
var stopBtn = document.querySelector(".recording-btn .Stop");
var timeh = document.querySelector(".time h1");

var saveProgram = document.querySelector(".saveProgram");
var submit = document.querySelector(".saveProgram #submit");

var [seconds, minutes, hours] = [0, 0, 0];
let timer = null;


starBtn.addEventListener("click", () => {
    watchStart();
    recordingBTN.classList.add("stopbtn");
    starBtn.classList.add("d-none");
    stopBtn.classList.add("d-block");
})

stopBtn.addEventListener("click", () => {
    watchReset();
    recordingBTN.classList.remove("stopbtn");
    stopBtn.classList.remove("d-block");
    starBtn.classList.remove("d-none");
    saveProgram.classList.add("showSP");
})

submit.addEventListener("click", () => {
    saveProgram.classList.remove("showSP");
    location.reload();
    clearInterval(timer);
})

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
     var h = hours < 10 ? "0" + hours : hours;
     var m = minutes < 10 ? "0" + minutes : minutes;
     var s = seconds < 10 ? "0" + seconds : seconds;

    timeh.innerHTML = m + ":" + s;

}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000);
}

function watchReset() {
    clearInterval(timer);
    seconds =0;
    minutes=0;
    hours=0;
    timeh.innerHTML = "00:00";
}

// #time start and reset

// range-progress

var progress = document.querySelector(".recording-range .range");
let sliderValue = document.querySelector(".recording-range .sliderValue");
let dot = document.querySelectorAll(".recording-range dot");

progress.oninput = (() => {
    let inputValue = progress.value / 2;
    sliderValue.innerText = inputValue.toFixed(0);
    sliderValue.style.left = (inputValue * 1.6) + "%";
})
progress.addEventListener("wheel", function(e){
    if (e.deltaY < 0){
      progress.valueAsNumber += 1;
    }else{
      progress.value -= 1;
    }
    e.preventDefault();
    e.stopPropagation();
  })
// // zoom disable

// Disable zooming using JavaScript
  window.addEventListener('keydown', function(event) {
    if (event.ctrlKey === true && (event.key === '+' || event.key === '-' || event.key === '0')) {
      event.preventDefault();
    }
  });
/*
  function preventZoom() {
    // Disable pinch zooming on mobile devices
    document.addEventListener('touchmove', function(event) {
      if (event.scale !== 1) { event.preventDefault(); }
    }, { passive: false });
  
    // Disable Ctrl + mouse wheel zooming on desktop
    document.addEventListener('wheel', function(event) {
      if (event.ctrlKey) { event.preventDefault(); }
    }, { passive: false });
  }
  
  preventZoom();
  
*/
// #range-progress
// click effect
var btnEffect = document.querySelectorAll(".recording-Types .btn-effect");
btnEffect.forEach((btns) => {

    btns.addEventListener("touchstart", () => {
        btns.classList.add("spanColor");
    })
})
btnEffect.forEach((btns) => {
    btns.addEventListener("touchend", () => {
        btns.classList.remove("spanColor");
    })
})

function disableScroll() {
    // Get the current scroll position
    var scrollX = window.scrollX || window.pageXOffset;
    var scrollY = window.scrollY || window.pageYOffset;
  
    // Disable scroll by setting the body's style to fixed
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = `-${scrollX}px`;
  }
  disableScroll();
  
  document.addEventListener('DOMContentLoaded', function() {
    var elem = document.documentElement;

    // Check if the Fullscreen API is available
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  });