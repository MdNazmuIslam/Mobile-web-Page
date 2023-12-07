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

  progress.addEventListener('touchstart', function(event) {
    event.stopPropagation();
    document.querySelector("body").classList.add("touchAction");
});
progress.addEventListener('touchend', function(event) {
    event.startPropagation();
    document.querySelector("body").classList.remove("touchAction");
});

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
// zoom disable
document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });

