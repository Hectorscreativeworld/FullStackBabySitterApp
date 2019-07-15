import React, { Component } from 'react'
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

  onViewChild = child => {
    this.setState({ currentView: 'CHILDDETAILS', currentChild: child })
  }

  onClosedDetails = () => {
    this.setState({ currentView: 'MAIN' })
  }

  onAddJob = () => {
    console.log('on add job click')
    this.setState({ currentView: 'ADDJOB' })
  }

  onUpdateProfile = () => {
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

  renderProfile = () => {
    if (this.state.currentView === 'PROFILE' && this.state.loaded === true) {
      return (
        <div className="KidsAwesomeText">
          <h1>"Kids are Awesome"</h1>
          <BabySitterProfile onCompleted={this.onClosedDetails} />
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
          <Button
            className="addKidButton"
            outline
            color="primary"
            onClick={this.onUpdateProfile}
          >
            Update Profile
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
        {this.state.currentView === 'PROFILE' && (
          <BabySitterProfile onClosed={this.onClosedDetails} />
        )}
        <Footer fixed="bottom" />
      </div>
    )
  }
}

export default BabySitterDashBoard
