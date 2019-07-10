import React, { Component } from 'react'
import '../RegisterForm.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBabySitter: false,
      isParent: false,
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      registered: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onBabysitterChanged = this.onBabysitterChanged.bind(this)
  }

  onBabysitterChanged(event) {
    console.log(this.state)
    this.setState({
      isParent: event.currentTarget.value === 'parent',
      isBabySitter: event.currentTarget.value === 'babysitter'
    })
    console.log(this.state)
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
      this.state.userName,
      this.state.password,
      this.state.email,
      this.state.confirmPassword
    )
    var self = this
    var isBabySitter = this.state.isBabySitter
    var isParent = this.state.isParent
    if (isBabySitter === false && isParent === false) {
      isParent = true
    }
    axios
      .post('/api/user', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        password: this.state.confirmPassword,
        email: this.state.email,
        isBabySitter: self.state.isBabySitter,
        isParent: isParent
      })
      .then(function(response) {
        console.log(response)
        console.log('success login')
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        self.setState({ registered: true })
      })
      .catch(function(error) {
        console.log(error)
        console.log('Error Register User')
        alert(
          'Failed to register user. userName or email might already exists.'
        )
      })
  }

  render() {
    if (this.state.registered) {
      return <Redirect to="/landing" />
    }
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
              name="userName"
              onChange={this.handleInputChange}
              value={this.state.userName}
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
              name="BabysitterOrParent"
              value="babysitter"
              onChange={this.onBabysitterChanged}
              checked={this.state.isBabySitter === true}
            />
            <label className="light babysitterBtn" htmlFor="babysitter">
              Babysitter:
            </label>

            <input
              type="Radio"
              name="BabysitterOrParent"
              value="parent"
              onChange={this.onBabysitterChanged}
              checked={this.state.isBabySitter === false}
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

export default RegisterForm
