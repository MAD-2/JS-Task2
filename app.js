//Variables
let time=0;
let timeId=0;
let timerM=true;

//Elements in a variable
const start=document.querySelector("#start");
const reset=document.querySelector("#reset");

const timerM=document.querySelector('m1');
let timeSecond=5;
displayTime(timeSecond)
const countDown=setInterval(()=>{
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond<=0 || timeSecond<1){
        endTime();
        clearInterval(countDown);}},1000)
    
function displayTime(second){
    const min = Math.floor(second/60);
    const sec = Math.floor(second %60);

    timerM.innerHTML='${min<10 ? "0": ""}{min}:${sec<10?"0":""}${sec}'}
function endTime(){
    timerM.innerHTML='TIME OUT'
}
start.addEventListener("click",function(){
    initClock();});
reset.addEventListener("click",function(){});


//use this function to start the timer

//this function update the timer values

// stop and clear the timer

// Start the timer

