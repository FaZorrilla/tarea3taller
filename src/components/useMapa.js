import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_INFO_EVENT = "POSITION"; // Name of the event

const useInfo = () => {
  const [infoFlights, setInfo] = useState([]); // Sent and received messages
  const socketRefMap = useRef();

  useEffect(() => {
    // Creates a WebSocket connection
    socketRefMap.current = socketIOClient(
      "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",
      {
        transports: ["websocket"],
        path: "/flights",
      }
    );

    // Listens for incoming messages
    socketRefMap.current.on(NEW_INFO_EVENT, (info) => {
      setInfo([...info]);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRefMap.current.disconnect();
    };
  }, [infoFlights]);

  const getPosition = () => {
    socketRefMap.current.emit(NEW_INFO_EVENT, {});
  };

  return { infoFlights, getPosition };
};

export default useInfo;
