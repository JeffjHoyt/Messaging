import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hi there!", sender: "received" },
    { text: "How are you doing today?", sender: "received" },
    { text: "I'm doing great, thanks for asking!", sender: "sent" },
    { text: "What have you been up to lately?", sender: "sent" },
    { text: "Not much, just staying busy with work.", sender: "received" },
    {
      text: "That sounds interesting. What kind of work do you do?",
      sender: "sent",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { text: newMessage, sender: "sent" }]);
    setNewMessage("");
  };

  return (
    <div className="App">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
