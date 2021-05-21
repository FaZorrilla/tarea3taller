import Mapa from "./components/Mapa";
import InfoVuelos from "./components/InfoVuelos";
import Chat from "./components/Chat";
import { useState } from "react";

function App() {
  return (
    <div className="Hola">
      <Mapa title="Mapa En Vivo" />
      <InfoVuelos />
      <Chat />
    </div>
  );
}

export default App;
