import React, { Component } from 'react'
import './workDays.css'

class WorkDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }
  onChange = time => {
    console.log(time)
    this.setState({ value: time })
  }

  setTime = () => {
    const hoursArray = []

    for (let i = 1; i <= 12; i++) {
      hoursArray.push(
        <option key={i} value="{i}">
          {i}
        </option>
      )
    }

    return hoursArray
  }
  //needs: FORM ONSUBMIT BUTTON
  render() {
    return (
      <div className="daysCanWork">
        <section className="Mon">
          <div className="">
            <label className="" htmlFor="materialInline3">
              {this.props.el}
            </label>

            <input type="checkbox" className="" id="materialInline1" />
            <label className="" htmlFor="firstTime" />

            <label className="form-check-label" htmlFor="materialInline1">
              <label>From:</label>
              <select className="dropdown-options">{this.setTime()}</select>
              <span>:</span>
              <select className="dropdown-options">
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
              <span>:</span>
              <select value="PM" className="dropdown-options">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </label>

            <label className="form-check-label" htmlFor="materialInline1">
              <label>TO:</label>
              <select className="dropdown-options">{this.setTime()}</select>
              <span>:</span>
              <select className="dropdown-options">
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
              <span>:</span>
              <select value="PM" className="dropdown-options">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </label>
            <label className="" htmlFor="firstTime" />
          </div>
        </section>
      </div>
    )
  }
}

export default WorkDay
