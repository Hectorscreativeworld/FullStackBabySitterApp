import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

class BabyLogInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    console.log(this.state.userName, this.state.password)

    var self = this
    axios
      .post('/api/user/login', {
        userName: this.state.userName,
        password: this.state.password
      })
      .then(function(response) {
        console.log(response)
        console.log('success login')
        self.props.setLoggedIn({
          userName: self.state.userName,
          isBabySitter: response.data.user.isBabySitter,
          isParent: response.data.user.isParent
        })
      })
      .catch(function(error) {
        console.log(error)
        console.log('Error login')
        alert('User name or Password not recognized.')
      })
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            onChange={this.handleInputChange}
            value={this.state.userName}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            required
          />
        </div>
        <button type="submit">LogIn</button>

        <div className="Footer-Text">
          <div>
            Don't have an account?<a href="https://suncoast.io/">Sign Up</a>
          </div>
          <div className="forgot-text">
            <a href="https://suncoast.io/">Forgot your password?</a>
          </div>
        </div>
      </form>
    )
  }
}

BabyLogInForm.propTypes = {
  setLoggedIn: PropTypes.func.isRequired
}
export default BabyLogInForm
