import React, { Component } from 'react'
import './MessageBoard.css'
import { PropTypes } from 'prop-types'
import { Button } from 'reactstrap'
import PubNubReact from 'pubnub-react'

class MessageBoard extends Component {
  constructor() {
    super()
    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-e958872a-449a-4bcf-b997-7c05ad366b4d',
      subscribeKey: 'sub-c-13a09a4c-a8f4-11e9-b39e-aa7241355c4e'
    })

    this.state = {
      currentMessage: '',
      messages: []
    }
    this.pubnub.init(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount() {
    let self = this
    this.pubnub.subscribe({
      channels: ['channel1'],
      withPresence: true
    })
    this.pubnub.getMessage('channel1', message => {
      self.setState({ messages: [...self.state.messages, message.message] })
    })
  }

  removeItem(index) {
    console.log('remove item')
    console.log(index)
    let messages = [...this.state.messages]
    this.setState({
      messages: messages.filter((m, i) => {
        if (i !== index) {
          return true
        }
        return false
      })
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('handle submit')
    console.log(this.state)
    this.pubnub.publish({
      channel: 'channel1',
      message: {
        description: this.state.currentMessage,
        user: this.props.who
      }
    })
  }

  render() {
    let messages = this.state.messages
    console.log(this.state.messages)
    return (
      <div className="MassageApp d-flex align-center f-d-column">
        <div className="containerMassageApp mobileResize">
          <section className="add-item">
            <form className="loginMassageForm" onSubmit={this.handleSubmit}>
              <label htmlFor="currentMessage">Message</label>
              <input
                className="MessageInput"
                type="text"
                name="currentMessage"
                placeholder="Whats Going on?"
                onChange={this.handleChange}
                value={this.state.currentMessage}
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
                {messages.map((m, i) => {
                  let n = i
                  return (
                    <li className="MessageList mobileResize" key={n}>
                      <h3>
                        <Button
                          className="removeButton"
                          color="danger"
                          onClick={() => this.removeItem(n)}
                        >
                          Remove Item
                        </Button>
                        {m.user}
                      </h3>
                      <p>{m.description}</p>
                      <div className="addAndChildButtons d-flex align-center f-d-column" />
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

MessageBoard.protoType = {
  who: PropTypes.string.isRequired
}
export default MessageBoard
