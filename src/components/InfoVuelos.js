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
        {console.log(infoFlights)}
        {infoFlights.map((flight, i) => (
          <li key={i} className="info-container">
            <li>Code: {flight.code}</li>
            <li>Airline: {flight.airline}</li>
            <li>Origin: {flight.origin}</li>
            <li>Destination: {flight.destination}</li>
            <li>Plane: {flight.plane}</li>
            <li>Seats: {flight.seats}</li>
            <ul>
              Passengers:{" "}
              {flight.passengers.map((passenger, i) => (
                <li key={i}>
                  Name: {passenger.name}
                  Age: {passenger.age}
                </li>
              ))}
            </ul>
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
