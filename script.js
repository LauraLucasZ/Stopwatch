var ms=0, s=0, m=0, h=0;

var timer;
var displayh = document.querySelector(".hour");
var displaym = document.querySelector(".minute");
var displays = document.querySelector(".second");
var displayms = document.querySelector(".millisecond");

const bg=document.getElementsByClassName("outer-circle")[0];


var laps=document.querySelector('.laps');

function start(){
    if(!timer){
        timer=setInterval(run,10 )
        bg.classList.add("animation-bg");
    }
}

function run(){
    displayh.textContent=getTimerh()
    displaym.textContent=getTimerm()
    displays.textContent=getTimers()
    displayms.textContent=getTimerms()

    ms++; 

    if(ms==100){
        ms=0;
        s++;
    }

    if(s==60){
        s=0;
        m++;
    }

    if(m==60){
        m=0;
        h++;
    }
}

function getTimerh() {
    return (h < 10 ? "0" + h : h) + " : ";
}

function getTimerm() {
    return (m < 10 ? "0" + m : m) + " : ";
}

function getTimers() {
    return (s < 10 ? "0" + s : s) + " : ";
}

function getTimerms() {
    return (ms < 10 ? "0" + ms : ms);
}

function pause(){
    stopTimer();
    bg.classList.remove("animation-bg");
}
function stopTimer(){
    clearInterval(timer);
    timer = false;
}

function reset(){
    resetLap();
    stopTimer()
    ms=0;
    s=0;
    m=0;
    h=0;

    displayh.textContent=getTimerh()
    displaym.textContent=getTimerm()
    displays.textContent=getTimers()
    displayms.textContent=getTimerms()
    bg.classList.remove("animation-bg");
}

function restart(){
    resetLap();
    if(timer){
        reset();
        start();
    }
    
}

 var lapNumber =1;
function lap() {
   
    const li = document.createElement("li");
    const number = document.createElement("span");
    const time = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    time.setAttribute("class", "time");

    let lapTime = getTimerh() + getTimerm() + getTimers() + getTimerms(); 
    time.textContent = lapTime;

    number.textContent = "Lap " + lapNumber;
    lapNumber ++;

    li.append(number, time);

    laps.append(li);

    const hr = document.createElement("hr");
    hr.setAttribute("style", "margin-top: -25px;"); 
    laps.append(hr); 

    const br = document.createElement("br");
    laps.append(br);
    const br2 = document.createElement("br");
    laps.append(br2);


}

function resetLap(){
    lapNumber=1;

    const lapItems = document.querySelectorAll('.lap-item');
    const hrElements = document.querySelectorAll('hr');
    const brElements = document.querySelectorAll('br');

    
    lapItems.forEach(item => item.remove());
    hrElements.forEach(hr => hr.remove());
    brElements.forEach(br => br.remove());
}