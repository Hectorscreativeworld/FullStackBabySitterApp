import React, { Component } from 'react'
import BabySitterProfileUpdate from './BabySitterProfileUpdate'
import BabySitterProfile from './BabySitterProfile'
import AddJob from './AddJob'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import { Button } from 'reactstrap'

class BabySitterDashBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'GRID',
      children: [],
      loaded: false,
      currentChild: ''
    }
  }
  componentDidMount() {
    let user = null
    try {
      user = JSON.parse(localStorage.getItem('user'))
      this.setState({
        phone: user.phone,
        email: user.email,
        fullName: user.firstName + ' ' + user.lastName
      })
    } catch (error) {
      console.log(error)
    }
    console.log(user)
    let self = this
    axios
      .get(`api/babysitter/userid/${user.id}`)
      .then(function(response) {
        self.setState({
          loaded: true,
          babysitter: response.data
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  onClosedDetails = () => {
    this.setState({ currentView: 'PROFILE' })
  }

  onAddJob = () => {
    console.log('on add job click')
    this.setState({ currentView: 'ADDJOB' })
  }

  onUpdateProfile = () => {
    this.setState({ currentView: 'PROFILEUPDATE' })
  }

  onProfile = () => {
    this.setState({ currentView: 'PROFILE' })
  }

  onJobAdded = job => {
    console.log('job added')
    this.setState({ currentView: 'MAIN' })
  }

  renderAddJob = () => {
    if (this.state.currentView === 'ADDJOB') {
      return (
        <div className="KidsAwesomeText">
          <AddJob
            onCompleted={this.onJobAdded}
            babySitter={this.state.babySitter}
          />
        </div>
      )
    }
    return ' '
  }
  onProfileUpdated = () => {
    this.refreshProfile()
    this.onClosedDetails()
  }

  refreshProfile = () => {
    let user = null
    try {
      user = JSON.parse(localStorage.getItem('user'))
      this.setState({
        phone: user.phone,
        email: user.email,
        fullName: user.firstName + ' ' + user.lastName
      })
    } catch (error) {
      console.log(error)
    }
    console.log(user)
    let self = this
    axios
      .get(`api/babysitter/userid/${user.id}`)
      .then(function(response) {
        self.setState({
          loaded: true,
          babysitter: response.data
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  renderProfileUpdate = () => {
    if (
      this.state.currentView === 'PROFILEUPDATE' &&
      this.state.loaded === true
    ) {
      return (
        <div className="KidsAwesomeText">
          <h1>"Update BabySitter Profile"</h1>
          <BabySitterProfileUpdate onCompleted={this.onProfileUpdated} />
        </div>
      )
    }
    return ' '
  }

  renderProfile = () => {
    if (this.state.currentView === 'PROFILE' && this.state.loaded === true) {
      return (
        <div className="KidsAwesomeText">
          <h1>"BabySitter Profile"</h1>
          <BabySitterProfile babySitter={this.state.babysitter} />
        </div>
      )
    }
    return ' '
  }

  render() {
    return (
      <div>
        <Header />
        <div className="addAndChildButtons d-flex align-center f-d-column">
          <Button
            className="addKidButton"
            outline
            color="primary"
            onClick={this.onAddJob}
          >
            Add Job
          </Button>
          {this.state.currentView !== 'PROFILEUPDATE' && (
            <Button
              className="addKidButton"
              outline
              color="primary"
              onClick={this.onUpdateProfile}
            >
              Update Profile
            </Button>
          )}
          <Button
            className="addKidButton"
            outline
            color="primary"
            onClick={this.onProfile}
          >
            View Profile
          </Button>

          <Button
            className="childrenPageButton"
            outline
            color="primary"
            onClick={this.onClosedDetails}
          >
            Main Page
          </Button>
        </div>

        {this.renderAddJob()}
        {this.renderProfileUpdate()}
        {this.renderProfile()}
        <Footer fixed="bottom" />
      </div>
    )
  }
}

export default BabySitterDashBoard
