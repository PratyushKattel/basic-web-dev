const clock=document.getElementById('clock');

function updateClock(){
    const now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    console.log(hours,minutes,seconds);
    document.querySelector('#hours').innerText=hours
   document.querySelector('#minutes').innerText=minutes
    document.querySelector('#seconds').innerText=seconds
}

setInterval(updateClock,1000);
updateClock(); // initial call to display clock immediately