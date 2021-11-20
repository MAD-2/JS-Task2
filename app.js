//Variables
let time=0;
let timeId=0;
let timerout=true;

//Elements in a variable
const start=document.querySelector("#start");
const reset=document.querySelector("#reset");

const timerH=document.querySelector('h1');
let timeSecond=70;
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

    timerH.innerHTML='${min<10 ? "0": ""}{min}:${sec<10?"0":""}${sec}'}
function endTime(){
    timerH.innerHTML='TIME OUT'
}
// Start the timer
start.addEventListener("click",function(){
    initClock();});
    
    // stop and clear the timer
reset.addEventListener("click",function(){});








