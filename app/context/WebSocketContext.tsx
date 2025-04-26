'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type WebSocketContextType = {
  socket: WebSocket | null
  isConnected: boolean
  userCount: number
  activityFeed: any[]
}

const WebSocketContext = createContext<WebSocketContextType>({
  socket: null,
  isConnected: false,
  userCount: 0,
  activityFeed: []
})

export const WebSocketProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [userCount, setUserCount] = useState(0)
  const [activityFeed, setActivityFeed] = useState<any[]>([])

  useEffect(() => {
    // Connect to WebSocket server
    const ws = new WebSocket('ws://localhost:3001')

    ws.onopen = () => {
      setIsConnected(true)
      setSocket(ws)
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      
      if (data.type === 'userCount') {
        setUserCount(data.count)
      } else if (data.type === 'activity') {
        setActivityFeed(prev => [...prev.slice(-9), data.activity]) // Keep last 10 items
      }
    }

    ws.onclose = () => {
      setIsConnected(false)
      setSocket(null)
    }

    return () => {
      ws.close()
    }
  }, [])

  return (
    <WebSocketContext.Provider value={{ socket, isConnected, userCount, activityFeed }}>
      {children}
    </WebSocketContext.Provider>
  )
}

export const useWebSocket = () => useContext(WebSocketContext)