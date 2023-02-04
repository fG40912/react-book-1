const oneSecond = () => 1000
const getCurrentDate = () => new Date()
const clear = () => console.clear()
const log = (message) => console.log(message)

// function: SerializeClockTime
// Takes a date object and returns an object for clock time that contains hours, minutes , and seconds.

const serializerClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

// function: civilianHours
// Takes the clock time object and returns an object where hours are converted to civilian time. For example: 1300 becomes 1:00

const civilianHours = time => ({
    ...time,
    hours: time.hours >= 12 ? time.hours - 12 : time.hours
})

// function: appendAMPM
// Take the clock time object and appends time of the day (AM or PM) to that object.

const appendAMPM = time => ({
    ...time,
    AMPM: time.hours >= 12 ? "PM" : "AM"
})

// function: display
// Takes a target function and returns a function that will send a time to the target. In this example, target will be console.log.

const display = target => time => target(time)

// function: formatClock
// Takes a template string and uses it to return clock time formatted based on the criteria from the string. In this example, the template is "hh:mm:ss tt". From there, formatClock will replace the placeholders with hours, minutes, seconds, time of the day.

const formatClock = format => time => {
    format.replace("hh",time.hours).replace("mm",time.minutes).replace("ss",time.seconds).replace("tt",time.AMPM)
}

// function: prependZero
// Takes an object's key as an argument and prepends a zero to the value stored under that object's key. It takes in a key to a specific field and prepends values with a zero if the value is less than 10.

const prependZero = key = time => ({
    ...time,
    key: time[key] < 10 ? "0" + time[key].toString() : time[key].toString()
})