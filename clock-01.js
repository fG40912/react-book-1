setInterval(logClockTime,1000)

function logClockTime(){
    let time = getClockTime();
    console.log(time)
}

function getClockTime(){
    let date = new Date();

    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    }

    if(time.hours == 12){
        time.ampm = "PM"
    }
    else if(time.hours > 12){
        time.ampm = "PM"
        time.hours -= 12
    }
    
    if(time.hours < 10){
        time.hours = "0" + time.hours.toString()
    }
    else{
        time.hours = time.hours.toString()
    }

    if(time.minutes < 10){
        time.minutes = "0" + time.minutes.toString()
    }
    else{
        time.minutes = time.minutes.toString()
    }

    if(time.seconds < 10){
        time.seconds = "0" + time.seconds.toString()
    }
    else{
        time.seconds = time.seconds.toString()
    }

    return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm
}