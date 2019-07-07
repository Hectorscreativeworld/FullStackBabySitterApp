import React, { Component } from 'react'

const times = ['12:00 am', '12:30 am']
let hourAM = 1
let hourPM = 1

for (let i = 2; i < 48; i++) {
  let strHour
  if (i < 24) {
    if (i % 2 === 0) {
      strHour = `${hourAM}:00 am`
    } else {
      strHour = `${hourAM}:30 am`
      hourAM += 1
    }
    times.push(strHour)
  } else if (i >= 24) {
    if (i === 24) {
      strHour = '12:00 pm'
    } else if (i === 25) {
      strHour = '12:30 pm'
    } else if (i % 2 === 0) {
      strHour = `${hourPM}:00 pm`
    } else {
      strHour = `${hourPM}:30 pm`
      hourPM += 1
    }
    times.push(strHour)
  }
}

console.log(times)

export default TimePicker
