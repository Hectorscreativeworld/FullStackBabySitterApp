import React, { Component } from 'react'
import '../RegisterForm.css'
import axios from 'axios'
import PropTypes from 'prop-types'

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bsBtn: false,
      parBtn: false,
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  radioBtnHandler(event) {
    console.log('test', event.target.name, this.state.bsBtn, this.state.parBtn)
    let active = event.target.name
    // first both btn are off, check this if both btn ar off
    // secound one btn is on, check this if one btn is true
    if (this.state.bsBtn === false && this.state.parBtn === false) {
      console.log('TERST!!!')
      //flip on of the btns on
      if (active === 'Babysitter') {
        this.setState({ bsBtn: true })
      }
      if (active === 'Parent') {
        this.setState({ parBtn: true })
        console.log('Active Log!!!!')
      }
    } else if (this.state.bsBtn === true) {
      if (active === 'Babysitter') {
        this.setState({ bsBtn: !this.state.bsBtn })
      }
      if (active === 'Parent') {
        this.setState({ parBtn: !this.state.parBtn, bsBtn: !this.state.bsBtn })
      }
    } else if (this.state.parBtn === true) {
      if (active === 'Parent') {
        this.setState({ parBtn: !this.state.parBtn })
      }
      if (active === 'Babysitter') {
        this.setState({ parBtn: !this.state.parBtn, bsBtn: !this.state.bsBtn })
      }
    }
  }

  handleInputChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(
      this.state.username,
      this.state.password,
      this.state.email,
      this.state.confirmPassword
    )
    var self = this
    axios
      .post('/api/user', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.username,
        password: this.state.confirmPassword,
        email: this.state.email
      })
      .then(function(response) {
        console.log(response)
        console.log('success login')
        self.props.setLoggedIn({
          userName: self.state.userName,
          email: self.state.email
        })
      })
      .catch(function(error) {
        console.log(error)
        console.log('Error Register User')
        alert(
          'Failed to register user. Username or email might already exists.'
        )
      })
  }

  render() {
    return (
      <div>
        <form
          className="register-form"
          action=""
          method="post"
          onSubmit={this.handleSubmit}
        >
          <h1 className="rf-header">Sign Up</h1>
          <fieldset>
            <legend>Your Basic Info</legend>
            <label className="" htmlFor="name">
              User Name
            </label>
            <input
              type="Text"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
              required
            />

            <label className="" htmlFor="firstName">
              First Name
            </label>
            <input
              type="Text"
              name="firstName"
              onChange={this.handleInputChange}
              value={this.state.firstName}
              required
            />
            <label className="" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="Text"
              name="lastName"
              onChange={this.handleInputChange}
              value={this.state.lastName}
              required
            />

            <label className="" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
              required
            />

            <label className="" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
              required
            />

            <label className="" htmlFor="confirm password">
              Confirm Password:
            </label>
            <input
              id="confirm_password"
              type="password"
              name="confirmPassword"
              onChange={this.handleInputChange}
              value={this.state.confirmPassword}
              required
            />

            <label className="BorPTitle">Babysitter or Parent:</label>
            <input
              type="Radio"
              name="Babysitter"
              value="babysitter"
              onClick={this.radioBtnHandler.bind(this)}
              checked={this.state.bsBtn}
            />
            <label className="light babysitterBtn" htmlFor="babysitter">
              Babysitter:
            </label>

            <input
              type="Radio"
              name="Parent"
              value="parent"
              onClick={this.radioBtnHandler.bind(this)}
              checked={this.state.parBtn}
            />
            <label className="light" htmlFor="parent">
              Parent:
            </label>
          </fieldset>
          <button className="sign-up-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}
RegisterForm.propTypes = {
  setLoggedIn: PropTypes.func.required
}

export default RegisterForm
