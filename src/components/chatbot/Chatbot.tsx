"use client";
import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;

    
    setMessages([...messages, { user: input, bot: "" }]);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer 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`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.1-8b-instruct:free",
          messages: [{ role: "user", content: input }],
        }),
      });

      const data = await response.json();

      
      const botMessage = data.choices[0].message.content;

      
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: input, bot: botMessage },
      ]);
    } catch (error) {
      console.error("Error fetching bot response:", error);

      
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          user: input,
          bot: "I'm having trouble responding at the moment. Please try again later.",
        },
      ]);
    }

    
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent">
      <div className="w-full max-w-2xl p-4 space-y-4 bg-transparent">
        {messages.map((msg, index) => (
          <div key={index} className="space-y-2">
            <div className="bg-white text-black p-3 rounded-lg shadow">
              <p><strong>You:</strong> {msg.user}</p>
            </div>
            {msg.bot && (
              <div className="bg-blue-500 text-white p-3 rounded-lg shadow">
                <p><strong>Bot:</strong> {msg.bot}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-3 border rounded-l-lg"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-3 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

