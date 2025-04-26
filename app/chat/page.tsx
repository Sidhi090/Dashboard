import ChatWindow from '@/app/components/chatwindow'

export default function ChatPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold">Support Chat</h2>
        </div>
        <ChatWindow />
      </div>
    </div>
  )
}