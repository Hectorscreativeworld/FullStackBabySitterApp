import React, { Component } from 'react'
import '../BabysitterLogin.css'
import WorkDay from './workDay'
import cashAPP from '../Images/cashAPP.png'
import Pal_Pal from '../Images/Pal_Pal.png'
import Venmo from '../Images/Venmo.png'
import TodoList from './TodoList'
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

class ParentLoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameValue: '',
      contactNumberValue: '',
      aboutKidsValue: '',
      allergicValue: '',
      specialInstructionsValue: '',
      lastNotesValue: ''
    }
  }
  handleChange(event) {
    console.log(event.target.value)
    this.setState({ nameValue: event.target.value })
  }

  handleNumberChange(event) {
    console.log(event.target.value)
    this.setState({ contactNumberValue: event.target.value })
  }

  handleKidsChange(event) {
    console.log(event.target.value)
    this.setState({ aboutKidsValue: event.target.value })
  }

  handleAllergicChange(event) {
    console.log(event.target.value)
    this.setState({ allergicValue: event.target.value })
  }

  handleInstructionsChange(event) {
    console.log(event.target.value)
    this.setState({ specialInstructionsValue: event.target.value })
  }

  handleLastNoteChange(event) {
    console.log(event.target.value)
    this.setState({ lastNotesValue: event.target.value })
  }

  handleBtnClick(event) {
    event.preventDefault()
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
          <label for="avatar">Choose a profile picture:</label>
          <button id="avatar-btn" name="avatar" onClick={this.handleBtnClick}>
            Insert Image
          </button>
          <label className="" for="name">
            Kids Name:
          </label>
          <input
            type="text"
            name="name"
            value={this.state.nameValue}
            onChange={this.handleChange.bind(this)}
          />
          <label className="" for="name">
            Contact Number:
          </label>
          <input
            type="text"
            name="name"
            value={this.state.contactNumberValue}
            onChange={this.handleNumberChange.bind(this)}
          />
          <label className="" for="bio">
            Tells us about your little one
          </label>
          <textarea
            type="text"
            name="name"
            value={this.state.aboutKidsValue}
            onChange={this.handleKidsChange.bind(this)}
          />
          <label className="" for="bio">
            Is your little one allergic to anything?
          </label>
          <textarea
            name="kidsBio"
            type="text"
            value={this.state.allergicValue}
            onChange={this.handleAllergicChange.bind(this)}
          />

          <label className="" for="bio">
            Any special instructions in case of an allergic reaction?
          </label>
          <textarea
            name="kidsBio"
            type="text"
            value={this.state.specialInstructionsValue}
            onChange={this.handleInstructionsChange.bind(this)}
          />
        </fieldset>
        <hr />
        <h2 className="AlmostDoneText">"Almost Done"</h2>
        <hr />

        <fieldset>
          <legend>
            <span className="section" />
            What days and hours do you need help with?:
          </legend>
          {days.map((el, key) => (
            <WorkDay el={el} key={key} />
          ))}
        </fieldset>

        <label className="" for="checkList">
          Create a check list: Use commons to separate items.
        </label>
        <TodoList />

        <label className="" for="checkList">
          Special Notes:
        </label>
        <textarea
          name="checkList"
          value={this.state.lastNotesValue}
          onChange={this.handleLastNoteChange.bind(this)}
        />

        <h2>Payment Type</h2>
        <div className="PaymentContainer">
          <img className="cashApp" src={cashAPP} alt="cashapp" />
          <img className="palPal" src={Pal_Pal} alt="PayPal" />
          <img className="Venmo" src={Venmo} alt="venmoe" />
        </div>
        <button type="button" className="payButton">
          Submit
        </button>

        <hr />
        <h2 className="welcomeText">"Welcome"</h2>
        <hr />
      </form>
    )
  }
}

export default ParentLoginForm
