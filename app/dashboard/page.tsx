'use client'

import { WebSocketProvider } from '@/app/context/WebSocketContext'
import LiveUserCounter from '@/app/components/LiveUserCounter'
import ActivityFeed from '@/app/components/Activityfeed'
import Chart from '@/app/components/chart'
import ThemeToggle from '@/app/components/ThemeToggle'

export default function DashboardPage() {
  return (
    <WebSocketProvider>
      <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white"> Dashboard</h1>
            <LiveUserCounter />
          </div>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Active Users</h2>
            <Chart type="line" />
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Activity Metrics</h2>
            <Chart type="bar" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Activity Feed</h2>
          <ActivityFeed />
        </div>
      </div>
    </WebSocketProvider>
  )
}