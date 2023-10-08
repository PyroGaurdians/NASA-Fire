import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import classes from "./Map.module.css";
import data from "./data.json";
import FireMarker from "./FireMarker";

export default function Map() {
  const position = [51.505, -0.09];
  // console.log(data);

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {data.map((fire) => {
        return (
          <FireMarker
            key={[fire.latitude, fire.longitude].join()}
            {...fire}
          ></FireMarker>
        );
      })}
    </MapContainer>
  );
}
