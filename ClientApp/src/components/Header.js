import React, { Component } from 'react'
import logo from '../Images/Header_Sample.png'
import { NavMenu } from './NavMenu'

class Header extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        <div className="logo-container">
          <img className="header-still" src={logo} alt="Header" />
        </div>
      </div>
    )
  }
}

export default Header
