import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class BabyLogInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      registered: false
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
        console.log(response.data.user)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        self.setState({ registered: true })
      })
      .catch(function(error) {
        console.log(error)
        console.log('Error login')
        alert('User name or Password not recognized.')
      })
  }

  render() {
    if (this.state.registered) {
      return <Redirect to="/landing" />
    }
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
            Don't have an account?
            <a href="https://localhost:5001/Register">Sign Up</a>
          </div>
          <div className="forgot-text">
            <a href="https://suncoast.io/">Forgot your password?</a>
          </div>
        </div>
      </form>
    )
  }
}

export default BabyLogInForm
