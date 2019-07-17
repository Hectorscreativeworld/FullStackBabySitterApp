import React, { Component } from 'react'
import ParentProfile from './ParentProfile'
import ChildrenRow from './ChildrenRow'
import ChildDashBoard from './ChildDashBoard'
import MessageBoard from './MessageBoard'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import { Button } from 'reactstrap'

class ParentDashBoard extends Component {
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
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  // api/Child/5
  removeChild(childId) {
    console.log(childId, 'CHildId Pass')
    axios.delete(`api/Child/${childId}`).then(function() {
      let self = this
      let user = JSON.parse(localStorage.getItem('user'))

      axios
        .get(`api/child/all/${user.id}`)
        .then(function(response) {
          self.setState({
            loaded: true,
            children: response.data
          })

          console.log(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
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
            <ChildrenRow
              child={x}
              key={i}
              onViewChild={this.onViewChild}
              removeChild={this.removeChild}
            />
          )
        })
      }
      return (
        <div>
          {childrenRows}
          <div className="kidsStatPage d-flex align-center f-d-column">
            <h2> How are things going:</h2>
            <MessageBoard />
            <div className="SpecialNotes">
              {/* <p>{child.currentStatus}</p> */}
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
          <Button
            className="addKidButton"
            outline
            color="primary"
            onClick={this.onAddChild}
          >
            Add Child
          </Button>
          <Button
            className="childrenPageButton"
            outline
            color="primary"
            onClick={this.onClosedDetails}
          >
            Children Page
          </Button>
        </div>

        {this.renderGrid()}

        {this.renderAddChild()}
        {this.state.currentView === 'CHILDDETAILS' && (
          <ChildDashBoard
            onClosed={this.onClosedDetails}
            child={this.state.currentChild}
          />
        )}

        <Footer fixed="bottom" />
      </div>
    )
  }
}

export default ParentDashBoard
