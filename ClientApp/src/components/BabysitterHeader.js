import React, { Component } from 'react'
import logo from '../Images/Header_Sample.png'
class BabysitterHeader extends Component {
  render() {
    return (
      <div className="logo-container">
        <img className="header-still" src={logo} alt="BabysitterHeader" />
      </div>
    )
  }
}

export default BabysitterHeader
