import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useMapa from "./useMapa";

const Mapa = (props) => {
  const { infoPos } = useMapa(); // Creates a websocket and manages messaging

  return (
    <header height={500}>
      <h1>{props.title}</h1>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""
      ></script>
      <div id="mapid">
        <MapContainer center={[-30, -70]} zoom={3} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {infoPos.map((flight, i) => (
            <Marker position={[flight.position[0], flight.position[1]]}>
              <Popup>Code: {flight.code}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </header>
  );
};

Mapa.defaultProps = {
  title: "Websocket",
};

Mapa.propTypes = {
  title: PropTypes.string,
};

//const style = {
//  color: "purple",
//};

export default Mapa;
