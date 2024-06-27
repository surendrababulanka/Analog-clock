const body = document.querySelector("body"),
    hours = document.querySelector(".hour"),
    minutes = document.querySelector(".minute"),
    seconds = document.querySelector(".second");


const updateTime = () => {
    let date = new Date(),
        secofDeg = (date.getSeconds() / 60) * 360;
        minofDeg = (date.getMinutes() / 60) * 360;
        hourofDeg = (date.getHours() / 12) * 360;
    // console.log(secToDeg)
    
        seconds.style.transform = `rotate(${secofDeg}deg)`,
        minutes.style.transform = `rotate(${minofDeg}deg)`,
        hours.style.transform = `rotate(${hourofDeg}deg)`;
};

setInterval(updateTime, 1000);

updateTime();

