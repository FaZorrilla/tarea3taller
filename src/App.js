import Mapa from "./components/Mapa";
import InfoVuelos from "./components/InfoVuelos";
import Chat from "./components/Chat";
import { useState } from "react";

function App() {
  return (
    <div className="Hola">
      <div>
        <Mapa title="Mapa En Vivo" />
      </div>
      <div className="container">
        <InfoVuelos />
      </div>
      <div className="container">
        <Chat />
      </div>
    </div>
  );
}

export default App;
