'use client'

import { useState } from 'react'

type Message = {
  role: 'user' | 'assistant' | 'error'
  content: string
}

export default function AntenheChat() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    const userMessage: Message = { role: 'user', content: question }
    setMessages(prev => [...prev, userMessage])
    setLoading(true)

    try {
      const response = await fetch('https://my-ai-assistant-bot.onrender.com/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.status === 'success' && data.answer) {
        const assistantMessage: Message = { role: 'assistant', content: data.answer }
        setMessages(prev => [...prev, assistantMessage])
      } else {
        throw new Error('Unexpected response format')
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to get response'
      const errorMsg: Message = { role: 'error', content: errorMessage }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setLoading(false)
      setQuestion('')
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-10 p-4 border rounded-xl shadow-md bg-white dark:bg-gray-900 dark:text-gray-800">
      <h2 className="text-2xl font-semibold mb-4 text-[#0B1DE6]">💬 Ask Antenhe Assistant</h2>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 px-4 py-2 rounded-md border dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B1DE6]"
          disabled={loading}
          aria-label="Ask a question"
        />
        <button
          type="submit"
          className="bg-[#0B1DE6] text-white px-4 py-2 rounded-md hover:bg-blue-800 transition disabled:opacity-50"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </form>

      {/* <div className="space-y-2 max-h-96 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm p-3 rounded ${
              msg.role === 'user'
                ? 'bg-blue-50 dark:bg-blue-900/30'
                : msg.role === 'error'
                ? 'bg-red-50 dark:bg-red-900/30'
                : 'bg-gray-100 dark:bg-gray-800'
            }`}
          >
            {msg.role === 'user' && <strong>You:</strong>}{" "}
            {msg.role === 'assistant' && <strong>Assistant:</strong>}{" "}
            {msg.role === 'error' && <strong>Error:</strong>}{" "}
            {msg.content}
          </div>
        ))}
      </div> */}
<div className="space-y-4 max-h-96 overflow-y-auto">
  {messages.map((msg, i) => (
    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex items-start gap-2 max-w-[80%] px-4 py-2 rounded-xl shadow 
          ${msg.role === 'user' 
            ? 'bg-blue-600 text-white rounded-br-none' 
            : msg.role === 'assistant' 
              ? 'bg-gray-100 text-black dark:bg-gray-800 dark:text-white rounded-bl-none' 
              : 'bg-red-100 text-red-800'}`}
      >
        <span className="text-lg">
          {msg.role === 'user' ? '🧑 you' : msg.role === 'assistant' ? '🤖' : '⚠️'}
        </span>
        <p className="text-sm leading-relaxed">{msg.content}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  )
}
