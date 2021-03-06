// https://medium.com/swlh/build-a-real-time-chat-app-with-react-hooks-and-socket-io-4859c9afecb0

import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_INFO_EVENT = "FLIGHTS"; // Name of the event

const useInfo = () => {
  const [infoFlights, setInfo] = useState([]); // Sent and received messages
  const socketRefInfo = useRef();

  useEffect(() => {
    // Creates a WebSocket connection
    socketRefInfo.current = socketIOClient(
      "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",
      {
        transports: ["websocket"],
        path: "/flights",
      }
    );

    // Listens for incoming messages
    socketRefInfo.current.on(NEW_INFO_EVENT, (info) => {
      setInfo([...info]);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRefInfo.current.disconnect();
    };
  }, [infoFlights]);

  const resetInfo = () => {
    socketRefInfo.current.emit(NEW_INFO_EVENT, {});
  };

  return { infoFlights, resetInfo };
};

export default useInfo;
