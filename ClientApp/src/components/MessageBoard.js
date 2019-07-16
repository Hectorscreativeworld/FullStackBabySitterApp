import React, { Component } from 'react'
import './MessageBoard.css'
import firebase from './firebase.js'

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
        <div className="containerMassageApp">
          <section className="add-item">
            <form className="loginMassageform" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Kids name?"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <input
                type="text"
                name="currentItem"
                placeholder="Whats Going on?"
                onChange={this.handleChange}
                value={this.state.currentItem}
              />
              <button className="sendButton">Send</button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul>
                {this.state.items.map(item => {
                  return (
                    <li key={item.id}>
                      <h3>{item.title}</h3>
                      <p>
                        {item.user}
                        <button onClick={() => this.removeItem(item.id)}>
                          Remove Item
                        </button>
                      </p>
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
