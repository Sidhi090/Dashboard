'use client'

import { useWebSocket } from '@/app/context/WebSocketContext'

export default function LiveUserCounter() {
  const { userCount, isConnected } = useWebSocket()

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Live Users: <span className="font-bold">{userCount}</span>
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