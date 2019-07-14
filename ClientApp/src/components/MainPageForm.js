import React, { Component } from 'react'
import '../BabysitterLogin.css'
import WorkDay from './workDay'
import cashAPP from '../Images/cashAPP.png'
import Pal_Pal from '../Images/Pal_Pal.png'
import Venmo from '../Images/Venmo.png'
const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Friday', 'Sat', 'Sun']

class MainPageForm extends Component {
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
          <input type="text" name="name" value="" />
          <label className="" htmlFor="name">
            Contact Number:
          </label>
          <input type="text" name="name" value="" />
          <label className="" htmlFor="bio">
            Tells us about your little one
          </label>

          <textarea name="Allergic" />
          <label className="" for="bio">
            Is your little one allergic to anything?
          </label>
          <textarea name="kidsBio" />

          <label className="" htmlFor="bio">
            Any special instructions in case of an allergic reaction?
          </label>
          <textarea name="kidsBio" />
        </fieldset>
        <hr />
        <h2>"Almost Done"</h2>
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
        <textarea name="checkList" />

        <label className="" htmlFor="checkList">
          Special Notes:
        </label>
        <textarea name="checkList" />

        <h2>Payment Type</h2>
        <div className="PaymentContainer">
          <img className="cashApp" src={cashAPP} alt="CASH_APP" />
          <img className="palPal" src={Pal_Pal} alt="PAYPAL" />
          <img className="Venmo" src={Venmo} alt="Venmo" />
        </div>
        <button type="button" className="payButton">
          Submit
        </button>

        <h2 className="welcomeText">"Welcome"</h2>
      </form>
    )
  }
}

export default MainPageForm
