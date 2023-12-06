// time start and reset
var recordingBTN = document.querySelector(".recording-btn");
var starBtn = document.querySelector(".recording-btn .start");
var stopBtn = document.querySelector(".recording-btn .Stop");
var timeh = document.querySelector(".time h1");

var saveProgram = document.querySelector(".saveProgram");
var submit = document.querySelector(".saveProgram #submit");

let [seconds, minutes, hours] = [0, 0, 0];
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
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

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
    let [seconds, minutes, hours] = [0, 0, 0];
    timeh.innerHTML = "00:00";

}
// #time start and reset

// range-progress

let progress = document.querySelector(".recording-range .range");
let sliderValue = document.querySelector(".recording-range .sliderValue");
let dot = document.querySelectorAll(".recording-range dot");


progress.oninput = (() => {
    let inputValue = progress.value / 2;
    sliderValue.innerText = inputValue.toFixed(0);
    sliderValue.style.left = (inputValue * 1.6) + "%";
})
// #range-progress
// hover effect
var btnEffect = document.querySelectorAll(".recording-Types .btn-effect");
btnEffect.forEach((btns)=>{
   
    btns.addEventListener("mouseover",()=>{
        btns.classList.add("spanColor");
    })
})
btnEffect.forEach((btns)=>{
    btns.addEventListener("mouseout",()=>{
        btns.classList.remove("spanColor");
    })
})
