import React, { Component } from 'react'
import Header from './Header'
import '../ChildDashBoard.css'
import Safety from '../Images/Safety.png'
import CheckMark from '../Images/Check_Sample.png'
import axios from 'axios'

class ChildDashBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childId: props.Id,
      name: '',
      notes: '',
      allergy: '',
      allergyInstruction: '',
      emergencyContactId: 0,
      emergencyContact: '',
      photo: '',
      currentStatus: '',
      checkList: [],
      loaded: false
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
      .get(`api/child/first/${user.id}`)
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
  render() {
    if (this.state.loaded === false) {
      return <div>loading....</div>
    }

    let todos = this.state.checkList.map((x, i) => {
      return <li key={i}>{x.description}</li>
    })

    return (
      <div className="d-flex align-center f-d-column">
        <div className="childMainContainer">
          <Header />
          <hr />
          <div className="stillAndName">
            <button id="avatar-btn" name="avatar" onClick={this.handleBtnClick}>
              Insert Image
            </button>

            <h2>Hello I'm {this.state.name}</h2>
          </div>
          <div>
            <h3>Kids Bio</h3>
            <p>Needs to fixed</p>
          </div>
          <hr />
          <div className="medBag">
            <h3>Kids allergy:</h3>

            <img className="safetyStill" src={Safety} alt="Safety Still" />
          </div>
          <ul>
            {/* New fixed code */}
            {this.state.children.map(child => {
              return (
                <li>
                  {child.firstName} has {child.allergy}
                </li>
              )
            })}
          </ul>
          <p>{this.state.allergyInstruction}</p>
          <hr />
          <div className="KidsMark">
            <h2>Kids Check:</h2>
            <img className="CheckMark" src={CheckMark} alt="Check Mark Still" />
          </div>
          <ul>{todos}</ul>
          <hr />
          <h2>Special Notes</h2>
          <div className="SpecialNotes">
            <p>{this.state.notes}</p>
          </div>
          <hr />
          <h2> How are things going:</h2>
          <div className="SpecialNotes">
            <p>{this.state.currentStatus}</p>
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
          <hr />
          <h1 className="KidsAwesomeText">"Kids are Awesome"</h1>
          <hr className="lastYellowLine" />
        </div>
      </div>
    )
  }
}

export default ChildDashBoard
