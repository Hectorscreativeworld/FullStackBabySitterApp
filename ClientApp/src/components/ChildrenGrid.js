import React, { Component } from 'react'
import ParentProfile from './ParentProfile'
import ChildrenRow from './ChildrenRow'
import ChildDashBoard from './ChildDashBoard'
import axios from 'axios'
import Header from './Header'

class ChildrenGrid extends Component {
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

  onAddChild = e => {
    e.preventDefault()
    this.setState({
      currentView: 'ADDCHILD'
    })
    console.log(this.state.currentView)
  }

  onAddedChild = child => {
    this.setState({
      currentView: 'GRID',
      children: [...this.state.children, child]
    })
  }

  onViewChild = child => {
    this.setState({ currentView: 'CHILDDETAILS', currentChild: child })
  }

  onClosedDetails = () => {
    this.setState({ currentView: 'GRID' })
  }

  renderAddChild = () => {
    if (this.state.currentView === 'ADDCHILD' || this.state.loaded === false) {
      return (
        <div className="KidsAwesomeText">
          <h1>"Kids are Awesome"</h1>
          <ParentProfile onCompleted={this.onAddedChild} />
        </div>
      )
    }
    return ' '
  }

  renderGrid = () => {
    if (this.state.currentView === 'GRID') {
      let childrenRows = null
      if (this.state.loaded) {
        childrenRows = this.state.children.map((x, i) => {
          return (
            <ChildrenRow child={x} key={i} onViewChild={this.onViewChild} />
          )
        })
      }
      return (
        <div>
          {childrenRows}
          <div className="kidsStatPage d-flex align-center f-d-column">
            <h2> How are things going:</h2>
            <div className="SpecialNotes">
              {/* <p>{child.currentStatus}</p> */}
            </div>
            <div className="sendStill">
              <label htmlFor="avatar">Choose a profile picture:</label>

              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              />
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      )
    }
    return ''
  }
  render() {
    return (
      <div>
        <Header />
        <div className="addAndChildButtons d-flex align-center f-d-column">
          <button className="addKidButton" onClick={this.onAddChild}>
            Add Child
          </button>
          <button className="childrenPageButton" onClick={this.onClosedDetails}>
            Children Page
          </button>
        </div>

        {this.renderGrid()}

        {this.renderAddChild()}
        {this.state.currentView === 'CHILDDETAILS' && (
          <ChildDashBoard
            onClosed={this.onClosedDetails}
            child={this.state.currentChild}
          />
        )}
      </div>
    )
  }
}

export default ChildrenGrid
