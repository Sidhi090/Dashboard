'use client';

import { useState, useEffect } from 'react';

export default function ChatWindow() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessages((prev) => [...prev, "Hi! How can I assist you today?"]);
    }, 5000); // Inactivity timer

    return () => clearTimeout(timeout);
  }, [messages]);

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages((prev) => [...prev, input]);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 p-4 rounded shadow">
      <div className="h-64 overflow-y-scroll mb-4 p-2 border rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-2">{msg}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
