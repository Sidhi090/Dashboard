import LiveUserCounter from '@/app/components/LiveUserCounter'
import ActivityFeed from '@/app/components/Activityfeed'
import Chart from '@/app/components/chart'

export default async function DashboardPage() {
  return (
    <div className="p-4 md:p-8 bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white"> Dashboard</h1>
        <LiveUserCounter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-white">Active Users</h2>
          <Chart type="line" />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-white">Activity Metrics</h2>
          <Chart type="bar" />
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
        <h2 className="text-lg font-semibold mb-4 text-white">Activity Feed</h2>
        <ActivityFeed />
      </div>
    </div>
  )
}