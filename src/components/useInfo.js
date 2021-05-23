// https://medium.com/swlh/build-a-real-time-chat-app-with-react-hooks-and-socket-io-4859c9afecb0

import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_INFO_EVENT = "FLIGHTS"; // Name of the event

const useInfo = () => {
  const [infoFlights, setInfo] = useState([]); // Sent and received messages
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

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [infoFlights]);

  const resetInfo = () => {
    socketRef.current.on(NEW_INFO_EVENT, (info) => {
      const incomingInfo = {
        ...info,
      };
      setInfo((infoFlights) => [...infoFlights, incomingInfo]);
    });
  };

  return { infoFlights, resetInfo };
};

export default useInfo;
