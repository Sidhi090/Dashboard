'use client'

import { useEffect, useState } from 'react'

export default function LiveUserCounter() {
  const [count, setCount] = useState(0)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Simulate WebSocket connection
    const ws = new WebSocket('ws://localhost:3001')

    ws.onopen = () => {
      setIsConnected(true)
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.type === 'userCount') {
        setCount(data.count)
      }
    }

    ws.onclose = () => {
      setIsConnected(false)
    }

    return () => {
      ws.close()
    }
  }, [])

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">
        Live Users: <span className="font-bold">{count}</span>
      </span>
      <span
        className={`h-2 w-2 rounded-full ${
          isConnected ? 'bg-green-500' : 'bg-red-500'
        }`}
        title={isConnected ? 'Connected' : 'Disconnected'}
      ></span>
    </div>
  )
}