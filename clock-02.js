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