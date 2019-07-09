import React, { Component } from 'react'
import Header from './Header'
import BabyLoginForm from './BabyLogInForm'
import PropTypes from 'prop-types'

class LogIn extends Component {
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <Header />
        <BabyLoginForm setLoggedIn={this.props.setLoggedIn} />
      </div>
    )
  }
}

LogIn.propTypes = {
  setLoggedIn: PropTypes.func.isRequired
}
export default LogIn
