// https://medium.com/swlh/build-a-real-time-chat-app-with-react-hooks-and-socket-io-4859c9afecb0

import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "CHAT"; // Name of the event
const SOCKET_SERVER_URL =
  "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl";

const useChat = () => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const socketRef = useRef();

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(
      "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",
      {
        transports: ["websocket"],
        path: "/flights",
      }
    );

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
      };
      setMessages((messages) => [...messages, incomingMessage]);
      console.log(incomingMessage);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = async (messageBody) => {
    var a = await socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      name: "Pancho",
      date: Date.now(),
      message: messageBody,
    });
    console.log(a);
  };

  return { messages, sendMessage };
};

export default useChat;
