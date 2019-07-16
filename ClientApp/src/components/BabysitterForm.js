import React, { Component } from 'react'
import '../BabysitterLogin.css'
import cashAPP from '../Images/cashAPP.png'
import Pal_Pal from '../Images/Pal_Pal.png'
import Venmo from '../Images/Venmo.png'
import axios from 'axios'
import { PropTypes } from 'prop-types'

class BabySitterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      photo: '',
      theBioInformation: '',
      hourlyRate: 0,
      paymentType: '',
      babysitter: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUploadPhotoClick = this.handleUploadPhotoClick.bind(this)
  }

  componentDidMount() {
    let user = null
    try {
      user = JSON.parse(localStorage.getItem('user'))
      this.setState({
        phone: user.phone,
        email: user.email,
        fullName: user.firstName + ' ' + user.lastName,
        firstName: user.firstName,
        lastName: user.lastName
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
          firstName: user.firstName,
          lastName: user.lastName,
          photo: response.data.photo,
          theBioInformation: response.data.theBioInformation || '',
          hourlyRate: response.data.hourlyRate,
          paymentType: response.data.paymentType
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleUploadPhotoClick(event) {
    event.preventDefault()
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'dck5acco0',
        upload_preset: 'mmsxpzkt',
        folder: 'SafeSitter/BabySitterPhoto'
      },
      (error, results) => {
        if (error) {
          // console.log(results[0].secure_url)
        }
        this.setState({ photo: results[0].secure_url })
      }
    )
  }

  handleChange = event => {
    console.log(event.target.value)

    if (event.target.name === 'firstName' || event.target.name === 'lastName') {
      this.setState({
        fullName: this.state.firstName + ' ' + this.state.lastName,
        [event.target.name]: event.target.value
      })
    } else {
      this.setState({ [event.target.name]: event.target.value })
    }
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
    console.log('submuting this profile')
    console.log(this.state)
    axios({
      method: 'put',
      url: `/api/babysitter/${self.state.babysitter.id}`,
      data: {
        id: self.state.babysitter.id,
        userId: self.state.babysitter.userId,
        photo: self.state.photo,
        hourlyRate: self.state.hourlyRate,
        theBioInformation: self.state.theBioInformation,
        paymentType: self.state.paymentType,
        user: {
          id: self.state.babysitter.userId,
          phone: self.state.phone,
          email: self.state.email,
          firstName: self.state.firstName,
          lastName: self.state.lastName
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
        // TODO: update state with the new values
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
    let paymentClassCashApp = ''
    let paymentClassPayPal = ''
    let paymentClassVenmo = ''
    if (this.state.paymentType == 'CASHAPP') {
      paymentClassCashApp = 'selected-payment-type'
    }
    if (this.state.paymentType == 'PAYPAL') {
      paymentClassPayPal = 'selected-payment-type'
    }
    if (this.state.paymentType == 'VENMO') {
      paymentClassVenmo = 'selected-payment-type'
    }

    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
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
            style={{ backgroundImage: 'url(' + this.state.photo + ')' }}
            onClick={this.handleUploadPhotoClick}
          >
            Insert Image
          </button>
          <label className="" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <label className="" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

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
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label className="" htmlFor="hourlyRate">
            Hourly Rate:
          </label>
          <input
            type="number"
            min="0.00"
            step="0.50"
            max="100"
            name="hourlyRate"
            value={this.state.hourlyRate}
            onChange={this.handleChange}
          />

          <label className="" htmlFor="theBioInformation">
            Tell us about yourself:
          </label>
          <textarea
            name="theBioInformation"
            value={this.state.theBioInformation}
            onChange={this.handleBsInfoChange.bind(this)}
          />
        </fieldset>

        <h2>Payment Type</h2>
        <div className="PaymentContainer">
          <img
            className={`cashApp ${paymentClassCashApp}`}
            src={cashAPP}
            alt="CASH_APP"
            onClick={() => this.changePayment('CASHAPP')}
          />
          <img
            className={`palPal ${paymentClassPayPal}`}
            src={Pal_Pal}
            alt="Pay_Pal"
            onClick={() => this.changePayment('PAYPAL')}
          />
          <img
            className={`Venmo ${paymentClassVenmo}`}
            src={Venmo}
            alt="Venmo"
            onClick={() => this.changePayment('VENMO')}
          />
        </div>
        <button type="submit" className="payButton">
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
