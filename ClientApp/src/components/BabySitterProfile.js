import React, { Component } from 'react'
import '../ChildDashBoard.css'
import PropTypes from 'prop-types'
import MessageBoard from './MessageBoard'

class BabySitterProfile extends Component {
  handleBtnClick = e => {
    console.log('clicked')
  }
  render() {
    const babySitter = this.props.babySitter
    console.log('inside babysitter profile render')
    console.log(babySitter)
    return (
      <div className="allAboutKid d-flex align-center f-d-column">
        <div className="stillAndName">
          <div
            className="kidsPhoto"
            style={{
              backgroundImage: 'url(' + this.props.babySitter.photo + ')'
            }}
          />
          <h2 className="helloText">Hello I'm {babySitter.user.firstName}</h2>
        </div>
        <div>
          <h3>A little bit about {babySitter.firstName}</h3>
          <h3>Phone: {babySitter.user.phone}</h3>
          <h3>Email: {babySitter.user.email}</h3>
          <h3>Hourly Rate: {babySitter.hourlyRate}</h3>
        </div>
        <section className="childParagraph mobileResize d-flex align-center f-d-column">
          <p>{babySitter.theBioInformation}</p>
          <MessageBoard />
        </section>
      </div>
    )
  }
}

BabySitterProfile.propTypes = {
  babySitter: PropTypes.object.isRequired
}
export default BabySitterProfile
