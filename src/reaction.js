// react component that renders a list of messages

// Path: src/App.js
// import React, { useState } from "react";
// import "./App.css";
// import Messages from "./Messages";
//
// function App() {
//   const [messages, setMessages] = useState([
//     { text: "Hi there!", sender: "received" },
//     { text: "How are you doing today?", sender: "received" },
//     { text: "I'm doing great, thanks for asking!", sender: "sent" },
//     { text: "What have you been up to lately?", sender: "sent" },
//     {
//       text: "Not much, just staying busy with work. Any plans for the weekend?",
//       sender: "received",
//     },
//   ]);
//
//   const [newMessage, setNewMessage] = useState("");
//
//   const handleMessageSubmit = (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) {
//       return; // If the input is empty or contains only white space, don't send the message
//     }
//     setMessages([...messages, { text: newMessage, sender: "sent" }]);
//     setNewMessage("");
//   };
//
//   return (
//     <div className="App">
//       <Messages messages={messages} />
//       <div className="form">
//         <form onSubmit={handleMessageSubmit} className="input-container">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//           />
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// }
//
// export default App;
