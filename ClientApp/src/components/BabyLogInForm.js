import React, { Component } from 'react'

class BabyLogInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
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
    console.log(this.state.username, this.state.password)
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleInputChange}
            value={this.state.username}
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

export default BabyLogInForm
