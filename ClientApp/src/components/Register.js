import React, { Component } from 'react'
import Header from './Header'
import RegisterForm from './RegisterForm'

class Register extends Component {
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <Header />
        <RegisterForm setLoggedIn={this.props.setLoggedIn} />
      </div>
    )
  }
}

export default Register
