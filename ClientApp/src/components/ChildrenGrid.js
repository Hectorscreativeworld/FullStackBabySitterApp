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
          // name: response.data.firstName,

          // notes: response.data.notes,
          // allergy: response.data.allergy,
          // allergyInstruction: response.data.allergyInstruction,
          // emergencyContactId: response.data.emergencyContactId,
          // emergencyContact: response.data.emergencyContact,
          // photo: response.data.photo,
          // currentStatus: response.data.currentStatus,
          // checkList: response.data.checkList
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
  render() {
    let childrenRows = null
    if (this.state.currentView === 'GRID' && this.state.loaded) {
      childrenRows = this.state.children.map((x, i) => {
        return <ChildrenRow child={x} key={i} onViewChild={this.onViewChild} />
      })
    }

    return (
      <div>
        <Header />

        <button onClick={this.onAddChild}>Add Child</button>
        <button onClick={this.onClosedDetails}>Children Page</button>
        <hr />
        {childrenRows}
        {childrenRows}
        {(this.state.currentView === 'ADDCHILD' ||
          this.state.loaded === false) && (
          <ParentProfile onCompleted={this.onAddedChild} />
        )}
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
