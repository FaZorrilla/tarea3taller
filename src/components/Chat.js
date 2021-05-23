// https://medium.com/swlh/build-a-real-time-chat-app-with-react-hooks-and-socket-io-4859c9afecb0

import React from "react";

import useChat from "./useChat";

const Chat = (props) => {
  const { messages, sendMessage } = useChat(); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const [username, setUsername] = React.useState(""); //Nuevo username

  const handleNewUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage, username);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
      <h2>Chat Global</h2>
      <div className="messages-container">
        <ul className="messages-list">
          {messages.map((message, i) => (
            <li key={i} className={`message-item ${"received-message"}`}>
              {message.name} ({new Date(message.date).toLocaleString()}):{" "}
              {message.message}
            </li>
          ))}
        </ul>
      </div>
      <textarea
        value={username}
        onChange={handleNewUsername}
        placeholder="Write username..."
      />
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

export default Chat;

// import React from "react";
// import { socketIOClient, socketio } from "socket.io-client";
// import { useState, useEffect } from "react";

// const Chat = () => {
//   const socket = socketio.connect(
//     "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",
//     {
//       transports: ["websocket"],
//       path: "/flights",
//     }
//   );
//   useEffect(() => {}, []);

//   return (
//     <div>
//       <h2>Chat Global</h2>
//     </div>
//   );
// };

// export default Chat;
