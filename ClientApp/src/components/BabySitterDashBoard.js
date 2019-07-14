import React, { Component } from 'react'
import BabySitterProfile from './BabySitterProfile'
import ChildrenRow from './ChildrenRow'
import ChildDashBoard from './ChildDashBoard'
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
    } catch (error) {
      console.log(error)
    }
    console.log(user)
    let self = this
    axios
      .get(`api/child/all/${user.id}`)
      .then(function(response) {
        self.setState({
          loaded: true,
          children: response.data
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
          <Button
            className="addKidButton"
            outline
            color="primary"
            onClick={this.onJobAdded}
          >
            Close Add Job
          </Button>

          <h1>"Add Job"</h1>
          <div>to do Add form here</div>
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
