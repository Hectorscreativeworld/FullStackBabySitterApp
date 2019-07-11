import React, { Component } from 'react'
import '../BabysitterLogin.css'
import TodoList from './TodoList'
import axios from 'axios'
import PropTypes from 'prop-types'

class ParentProfileForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameValue: '',
      contactNumberValue: '',
      aboutKidsValue: '',
      allergicValue: '',
      specialInstructionsValue: '',
      lastNotesValue: '',
      todoList: [],
      imageUrl: ''
    }
    this.handleToDoListChange = this.handleToDoListChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }
  handleToDoListChange(list) {
    this.setState({ todoList: list.slice(0) })
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({ nameValue: event.target.value })
  }

  handleNumberChange(event) {
    console.log(event.target.value)
    this.setState({ contactNumberValue: event.target.value })
  }

  handleKidsChange(event) {
    console.log(event.target.value)
    this.setState({ aboutKidsValue: event.target.value })
  }

  handleAllergicChange(event) {
    console.log(event.target.value)
    this.setState({ allergicValue: event.target.value })
  }

  handleInstructionsChange(event) {
    console.log(event.target.value)
    this.setState({ specialInstructionsValue: event.target.value })
  }

  handleLastNoteChange(event) {
    console.log(event.target.value)
    this.setState({ lastNotesValue: event.target.value })
  }

  handleBtnClick(event) {
    event.preventDefault()
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'dck5acco0',
        upload_preset: 'mmsxpzkt',
        folder: 'SafeSitter/KidsPhoto'
      },
      (error, results) => {
        if (error) {
          console.log(results[0].secure_url)
        }
        this.setState({ imageUrl: results[0].secure_url })
      }
    )
  }

  handleSubmit(event) {
    event.preventDefault()

    const self = this
    var user = null
    try {
      user = JSON.parse(localStorage.getItem('user'))
    } catch (error) {
      console.log(error)
    }
    console.log(this.state.todoList)
    axios({
      method: 'post',
      url: '/api/Child',
      data: {
        parentId: user.id,
        dateOfBirth: '2018-02-03T00:00:00',
        firstName: self.state.nameValue,
        lastName: 'TBT',
        gender: 'TBT',
        bio: '',
        notes: self.state.lastNotesValue,
        allergy: self.state.allergicValue,
        allergyInstruction: self.state.specialInstructionsValue,
        emergencyContactId: 3,
        emergencyContact: '',
        photo: self.state.imageUrl,
        // currentStatus: '',
        checkList: self.state.todoList.map((x, i) => {
          return {
            description: x.text,
            orderSequence: i
          }
        })
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(function(response) {
        console.log(response)
        console.log('successfully added child info')
        self.setState({ registered: true })
        self.props.onCompleted(response.data)
      })
      .catch(function(error) {
        console.log(error)
        console.log('Error add child')
      })
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <hr />
        <fieldset>
          <legend>
            <span className="section" />
            Your Profile:
          </legend>
          <label htmlFor="avatar">Choose a profile picture:</label>
          <button
            id="avatar-btn"
            name="avatar"
            style={{ backgroundImage: 'url(' + this.state.imageUrl + ')' }}
            onClick={this.handleBtnClick}
          >
            Insert Image
          </button>
          <label className="" htmlFor="name">
            Kids Name:
          </label>
          <input
            type="text"
            name="nameValue"
            value={this.state.nameValue}
            onChange={this.handleChange.bind(this)}
          />
          <label className="" htmlFor="name">
            Contact Number:
          </label>
          <input
            type="text"
            name="contactNumber"
            value={this.state.contactNumberValue}
            onChange={this.handleNumberChange.bind(this)}
          />
          <label className="" htmlFor="bio">
            Tells us about your little one
          </label>
          <textarea
            type="text"
            name="kidsBio"
            value={this.state.aboutKidsValue}
            onChange={this.handleKidsChange.bind(this)}
          />
          <label className="" htmlFor="bio">
            Is your little one allergic to anything?
          </label>
          <textarea
            name="allegic"
            type="text"
            value={this.state.allergicValue}
            onChange={this.handleAllergicChange.bind(this)}
          />

          <label className="" htmlFor="bio">
            Any special instructions in case of an allergic reaction?
          </label>
          <textarea
            name="specialInstructions"
            type="text"
            value={this.state.specialInstructionsValue}
            onChange={this.handleInstructionsChange.bind(this)}
          />
        </fieldset>
        <hr />
        <h2 className="AlmostDoneText">"Almost Done"</h2>
        <hr />

        <label className="" htmlFor="checkList">
          Create a check list: Use commons to separate items.
        </label>
        <TodoList onChange={this.handleToDoListChange} />

        <label className="" htmlFor="checkList">
          Special Notes:
        </label>
        <textarea
          name="checkList"
          value={this.state.lastNotesValue}
          onChange={this.handleLastNoteChange.bind(this)}
        />
        <button type="submit" className="payButton">
          Submit
        </button>

        <hr />
        <h2 className="welcomeText">"Welcome"</h2>
        <hr className="ParentsHrYellowLineBottom" />
      </form>
    )
  }
}

ParentProfileForm.propTypes = {
  onCompleted: PropTypes.func.isRequired
}
export default ParentProfileForm
