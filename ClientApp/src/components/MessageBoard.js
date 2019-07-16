import React, { Component } from 'react'
import './MessageBoard.css'
import firebase from './firebase.js'
import { Button } from 'reactstrap'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentItem: '',
      username: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const itemsRef = firebase.database().ref('items')
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item)
    this.setState({
      currentItem: '',
      username: ''
    })
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items')
    itemsRef.on('value', snapshot => {
      let items = snapshot.val()
      let newState = []
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        })
      }
      this.setState({
        items: newState
      })
    })
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`)
    itemRef.remove()
  }
  render() {
    return (
      <div className="MassageApp d-flex align-center f-d-column">
        <div className="containerMassageApp mobileResize">
          <section className="add-item">
            <form className="loginMassageForm" onSubmit={this.handleSubmit}>
              <input
                className="whatsGoingOnInput"
                type="text"
                name="currentItem"
                placeholder="Whats Going on?"
                onChange={this.handleChange}
                value={this.state.currentItem}
              />
              <input
                type="text"
                name="username"
                placeholder="Kids name?"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <Button
                className="sendButton d-flex align-center f-d-column"
                outline
                color="primary"
              >
                Send
              </Button>
            </form>
          </section>
          <section className="display-item">
            <div className="messageWrapper">
              <ul className="MessageUl mobileResize">
                {this.state.items.map(item => {
                  return (
                    <li className="MessageList mobileResize" key={item.id}>
                      <h3>{item.title}</h3>
                      <p>{item.user}</p>
                      <div className="addAndChildButtons d-flex align-center f-d-column">
                        <Button
                          className="removeButton"
                          outline
                          color="primary"
                          onClick={() => this.removeItem(item.id)}
                        >
                          Remove Item
                        </Button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
export default App
