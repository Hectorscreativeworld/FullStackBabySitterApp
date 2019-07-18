import React, { Component } from 'react'
import '../ChildDashBoard.css'
import PropTypes from 'prop-types'
import MessageBoard from './MessageBoard'
import ChildDashBoard from './ChildDashBoard'

class BabySitterProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      child: this.getSampleChild()
    }
  }

  handleBtnClick = e => {
    console.log('clicked')
  }
  getSampleChild() {
    return {
      id: 43,
      parentId: 12,
      parent: {
        id: 12,
        userId: 51,
        user: null
      },
      dateOfBirth: '2018-02-03T00:00:00',
      firstName: 'Stacy Nelson',
      lastName: 'TBT',
      gender: '',
      bio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      allergy:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      allergyInstruction: 'Use EpiPen then call Dr.',
      emergencyContactId: 3,
      emergencyContact: null,
      photo: '',
      currentStatus: null,
      checkList: [{ description: 'Bedtime' }]
    }
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
        </section>
        <ChildDashBoard
          // onClosed={this.onClosedDetails}
          child={this.state.child}
        />
        <MessageBoard who="sitter" />
      </div>
    )
  }
}

BabySitterProfile.propTypes = {
  babySitter: PropTypes.object.isRequired
}
export default BabySitterProfile
