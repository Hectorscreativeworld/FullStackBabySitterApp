import React, { Component } from 'react'
import logo from '../Images/Header_Sample.png'
class Header extends Component {
  render() {
    return (
      <div className="logo-container">
        <img className="header-still" src={logo} alt="Header" />
      </div>
    )
  }
}

export default Header
