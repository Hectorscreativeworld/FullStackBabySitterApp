import { func } from 'prop-types'
import PubNub from 'pubnub-react'

const pubnub = new PubNub({
  publishKey: 'pub-c-e958872a-449a-4bcf-b997-7c05ad366b4d',
  subscribeKey: 'sub-c-13a09a4c-a8f4-11e9-b39e-aa7241355c4e'
})

function publish(channel, message) {
  pubnub.publish(
    {
      channel: channel,
      message: message
    },
    function(status, response) {
      console.log(status)
      console.log(response)
    }
  )
}

function subscribe(channel) {
  pubnub.subscribe({
    channels: [channel]
  })
}

function addListener(onMessage) {
  pubnub.addListener({
    message: function(event) {
      onMessage(event.message)
    }
  })
}

export default {
  publish: publish,
  subscribe: subscribe,
  addListener: addListener
}
