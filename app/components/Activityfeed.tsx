'use client'

import { useWebSocket } from '@/app/context/WebSocketContext'

export default function ActivityFeed() {
  const { activityFeed, isConnected } = useWebSocket()

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {isConnected ? 'Real-time updates' : 'Connection lost'}
        </span>
      </div>
      <div className="h-40 overflow-y-auto">
        {activityFeed.length > 0 ? (
          <ul className="space-y-1">
            {activityFeed.map((activity, index) => (
              <li key={index} className="text-sm p-2 bg-gray-100 dark:bg-gray-700 rounded">
                {activity.message} - {new Date(activity.timestamp).toLocaleTimeString()}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No activity yet
          </div>
        )}
      </div>
    </div>
  )
}