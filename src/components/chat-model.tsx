'use client'

import { useState } from 'react'

export default function AntenheChat() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setMessages((prev) => [...prev, `🧑‍💻 You: ${question}`])
    setLoading(true)
    setMessages((prev) => [...prev, `🤔 Let me think...`])

    try {
      const res = await fetch('https://my-ai-assistant-bot.onrender.com/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      })

      const data = await res.json()
      console.log("API response:", data)
  
      setMessages((prev) => [...prev.slice(0, -1), `🤖 Antenhe Assistant: ${data.answer}`])
    } catch (err) {
      setMessages((prev) => [...prev.slice(0, -1), `❌ Error: Could not fetch response.`])
    }

    setLoading(false)
    setQuestion('')
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-10 p-4 border rounded-xl shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-semibold mb-4 text-[#0B1DE6]">💬 Ask Antenhe Assistant</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 px-4 py-2 rounded-md border dark:bg-gray-800"
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-[#0B1DE6] text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
          disabled={loading}
        >
          Ask
        </button>
      </form>

      <div className="space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
            {msg}
          </div>
        ))}
      </div>
    </div>
  )
}
