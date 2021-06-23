const mqtt = require('mqtt')
const client  = mqtt.connect('ws://broker.hivemq.com:8000')
client.on('connect', function () {
  client.subscribe('florence/ultrastation', function (err) {
    if (!err) {
      client.publish('florence/ultrastation', '69')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})