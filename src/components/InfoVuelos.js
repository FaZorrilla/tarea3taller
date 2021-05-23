import React from "react";

import useInfo from "./useInfo";

const InfoVuelos = (props) => {
  const { infoFlights, resetInfo } = useInfo(); // Creates a websocket and manages messaging

  const handleInfo = () => {
    resetInfo();
  };

  return (
    <div>
      <h2>Info Vuelos</h2>
      <ul className="messages-container">
        {infoFlights.map((flight, i) => (
          <li key={i} className="info-container">
            {flight.code}
            {flight.airline}
            {flight.origin}
            {flight.destination}
            {flight.plane}
            {flight.seats}
            {flight.passengers}
          </li>
        ))}
      </ul>
      <button onClick={handleInfo} className="reset-info">
        Get Info
      </button>
    </div>
  );
};

export default InfoVuelos;

// const InfoVuelos = () => {
//   return (
//     <div>
//       <h2>Info Vuelos</h2>
//     </div>
//   );
// };

// export default InfoVuelos;
