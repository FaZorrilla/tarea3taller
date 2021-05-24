import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_INFO_EVENT = "POSITION"; // Name of the event

const useInfo = () => {
  const [infoPos, setInfo] = useState([]); // Sent and received messages
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
      const filtrado = infoPos.filter((flight) => flight.code === info.code);
      console.log(filtrado);
      if (!filtrado.length) {
        setInfo([...infoPos, info]);
      } else {
        filtrado[0].position = info.position;
        const otros = infoPos.filter((flight) => flight.code !== info.code);
        setInfo([...otros, filtrado[0]]);
      }
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRefMap.current.disconnect();
    };
  }, [infoPos]);

  return { infoPos };
};

export default useInfo;
