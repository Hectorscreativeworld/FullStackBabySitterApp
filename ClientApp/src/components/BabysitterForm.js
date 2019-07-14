import React, { Component } from 'react'
import '../BabysitterLogin.css'
import WorkDay from './workDay'
import cashAPP from '../Images/cashAPP.png'
import Pal_Pal from '../Images/Pal_Pal.png'
import Venmo from '../Images/Venmo.png'
import axios from 'axios'
import { PropTypes } from 'prop-types'

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

class BabySitterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      phone: '',
      email: '',
      photo: '',
      theBioInformation: '',
      hourlyRate: 0,
      paymentType: '',
      mondayTo: 0,
      mondayFrom: 0,
      tuesdayTo: 0,
      tuesdayFrom: 0,
      wednesdayTo: 0,
      wednesdayFrom: 0,
      thursdayTo: 0,
      thursdayFrom: 0,
      fridayTo: 0,
      fridayFrom: 0,
      saturdayTo: 0,
      saturdayFrom: 0,
      sundayTo: 0,
      sundayFrom: 0,
      babysitter: ''
    }
  }

  componentDidMount() {
    let user = null
    try {
      user = JSON.parse(localStorage.getItem('user'))
      this.setState({
        phone: user.phone,
        email: user.email,
        fullName: user.firstName + ' ' + user.lastName
      })
    } catch (error) {
      console.log(error)
    }
    console.log(user)
    let self = this
    axios
      .get(`api/babysitter/userid/${user.id}`)
      .then(function(response) {
        self.setState({
          loaded: true,
          babysitter: response.data,
          photo: response.data.photo,
          theBioInformation: response.data.theBioInformation,
          hourlyRate: response.data.hourlyRate,
          paymentType: response.data.paymentType,
          mondayTo: response.data.mondayTo,
          mondayFrom: response.data.mondayFrom,
          tuesdayTo: response.data.tuesdayTo,
          tuesdayFrom: response.data.tuesdayFrom,
          wednesdayTo: response.data.wednesdayTo,
          wednesdayFrom: response.data.wednesdayFrom,
          thursdayTo: response.data.response.data.thursdayTo,
          thursdayFrom: response.data.thursdayFrom,
          fridayTo: response.data.fridayFrom,
          fridayFrom: response.data.fridayFrom,
          saturdayTo: response.data.saturdayTo,
          saturdayFrom: response.data.saturdayFrom,
          sundayTo: response.data.sundayTo,
          sundayFrom: response.data.sundayFrom
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleBabyContactChange(event) {
    console.log(event.target.value)
    this.setState({ phone: event.target.value })
  }

  handleBsInfoChange(event) {
    console.log(event.target.value)
    this.setState({ theBioInformation: event.target.value })
  }

  handleBtnClick(event) {
    event.preventDefault()
    console.log('ButtonTest', this.state)
  }

  handleSubmit(event) {
    event.preventDefault()

    const self = this
    var user = null
    try {
      user = JSON.parse(localStorage.getItem('user'))
    } catch (error) {
      console.log(error)
    }
    console.log(this.state.todoList)
    axios({
      method: 'post',
      url: `/api/babysitter/${self.state.babysitter.id}`,
      data: {
        id: self.state.babysitter.id,
        userId: self.state.babysitter.userId,
        photo: self.state.photo,
        hourlyRate: self.state.hourlyRate,
        theBioInformation: self.state.theBioInformation,
        paymentType: self.state.paymentType,
        mondayTo: self.state.mondayTo,
        mondayFrom: self.state.mondayFrom,
        tuesdayTo: self.state.tuesdayTo,
        tuesdayFrom: self.state.tuesdayFrom,
        wednesdayTo: self.state.wednesdayTo,
        wednesdayFrom: self.state.wednesdayFrom,
        thursdayTo: self.state.thursdayTo,
        thursdayFrom: self.state.thursdayFrom,
        fridayTo: self.state.fridayTo,
        fridayFrom: self.state.fridayFrom,
        saturdayTo: self.state.saturdayTo,
        saturdayFrom: self.state.saturdayFrom,
        sundayTo: self.state.sundayTo,
        sundayFrom: self.state.sundayFrom,
        user: {
          phone: self.state.phone,
          email: self.state.email
        }
      },

      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(function(response) {
        console.log(response)
        console.log('successfully updated babysitter profile')
        self.props.onCompleted(response.data)
      })
      .catch(function(error) {
        console.log(error)
        console.log('Error updating babysitter profile')
      })
  }

  changePayment = paymentType => {
    this.setState({ paymentType: paymentType })
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
          <button
            id="avatar-btn"
            name="avatar"
            onClick={this.handleBtnClick.bind(this)}
          >
            Insert Image
          </button>

          <label className="" htmlFor="fullName">
            Name:
          </label>
          <input type="text" name="fullName" value={this.state.fullName} />

          <label className="" htmlFor="phone">
            Contact Number:
          </label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleBabyContactChange.bind(this)}
          />

          <label className="" htmlFor="email">
            Contact Number:
          </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleBabyContactChange.bind(this)}
          />

          <label className="" htmlFor="theBioInformation}">
            Tell us about yourself:
          </label>
          <textarea
            name="theBioInformation}"
            value={this.state.theBioInformation}
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
          <img
            className="cashApp"
            src={cashAPP}
            alt="CASH_APP"
            onClick={() => this.changePayment('CASHAPP')}
          />
          <img
            className="palPal"
            src={Pal_Pal}
            alt="Pay_Pal"
            onClick={() => this.changePayment('PAYPAL')}
          />
          <img
            className="Venmo"
            src={Venmo}
            alt="Venmo"
            onClick={() => this.changePayment('VENMO')}
          />
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

BabySitterForm.protoType = {
  onCompleted: PropTypes.func.isRequired
}
export default BabySitterForm
