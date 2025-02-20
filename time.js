const timeClock = document.getElementById("clock");

function CreateClock(){
    
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockStr = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    timeClock.innerText = clockStr;
    
}

CreateClock();
setInterval(updateTime,1000);  