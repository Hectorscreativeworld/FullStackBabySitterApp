import React, { Component } from 'react'
import Header from './Header'
import RegisterForm from './RegisterForm'

class Register extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex align-center f-d-column">
          <RegisterForm setLoggedIn={this.props.setLoggedIn} />
        </div>
      </div>
    )
  }
}

export default Register
