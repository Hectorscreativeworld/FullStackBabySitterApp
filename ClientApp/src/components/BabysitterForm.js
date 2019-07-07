import React, { Component } from 'react'
import '../BabysitterLogin.css'
import WorkDay from './workDay'
import cashAPP from '../Images/cashAPP.png'
import Pal_Pal from '../Images/Pal_Pal.png'
import Venmo from '../Images/Venmo.png'

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

class BabysitterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameValue: '',
      contactNumberValue: '',
      aboutBabysitterValue: ''
    }
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({ nameValue: event.target.value })
  }

  handleBabyContactChange(event) {
    console.log(event.target.value)
    this.setState({ contactNumberValue: event.target.value })
  }

  handleBsInfoChange(event) {
    console.log(event.target.value)
    this.setState({ aboutBabysitterValue: event.target.value })
  }

  handleBtnClick(event) {
    event.preventDefault()
    console.log('ButtonTest', this.state)
  }
  render() {
    return (
      <form className="login-form" action="" method="POST">
        <hr />
        <fieldset>
          <legend>
            <span className="section" />
            Your Profile:
          </legend>
          <label htmlFor="avatar">Choose a profile picture:</label>
          <button id="avatar-btn" name="avatar" onClick={this.handleBtnClick}>
            Insert Image
          </button>

          <label className="" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={this.state.nameValue}
            onChange={this.handleChange.bind(this)}
          />

          <label className="" htmlFor="name">
            Contact Number:
          </label>
          <input
            type="text"
            name="name"
            value={this.state.contactNumberValue}
            onChange={this.handleBabyContactChange.bind(this)}
          />

          <label className="" htmlFor="bio">
            Tell us about yourself:
          </label>
          <textarea
            name="bio"
            value={this.state.aboutBabysitterValue}
            onChange={this.handleBsInfoChange.bind(this)}
          />
        </fieldset>

        <fieldset>
          <legend>
            <span className="section" />
            What days and hours are you available:
          </legend>
          {days.map((el, key) => (
            <WorkDay el={el} key={key} />
          ))}
        </fieldset>

        <h2>Payment Type</h2>
        <div className="PaymentContainer">
          <img className="cashApp" src={cashAPP} alt="CASH_APP" />
          <img className="palPal" src={Pal_Pal} alt="Pay_Pal" />
          <img className="Venmo" src={Venmo} alt="Venmo" />
        </div>
        <button
          type="button"
          className="payButton"
          onClick={this.handleBtnClick.bind(this)}
        >
          Submit
        </button>
        <hr />
        <h2 className="welcomeText">"Welcome"</h2>
        <hr />
      </form>
    )
  }
}

export default BabysitterForm
