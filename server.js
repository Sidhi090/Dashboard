const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3001 })

let userCount = 0
const activities = []

wss.on('connection', (ws) => {
  userCount++
  broadcastUserCount()
  
  // Send initial data
  ws.send(JSON.stringify({
    type: 'userCount',
    count: userCount
  }))
  
  // Simulate random activities
  const activityInterval = setInterval(() => {
    const activityTypes = [
      'New user registered',
      'Dashboard viewed',
      'Chart interacted',
      'Settings updated'
    ]
    const activity = {
      type: 'activity',
      activity: {
        message: activityTypes[Math.floor(Math.random() * activityTypes.length)],
        timestamp: Date.now()
      }
    }
    ws.send(JSON.stringify(activity))
    activities.push(activity.activity)
  }, 3000)

  ws.on('close', () => {
    userCount--
    broadcastUserCount()
    clearInterval(activityInterval)
  })
})

function broadcastUserCount() {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        type: 'userCount',
        count: userCount
      }))
    }
  })
}

console.log('WebSocket server running on ws://localhost:3001')