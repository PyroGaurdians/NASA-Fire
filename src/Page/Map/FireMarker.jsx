import { Marker, Popup } from "react-leaflet";
// {
//   "latitude": 19.4097,
//   "longitude": -155.2743,
//   "brightness": 391.9,
//   "scan": 1.4,
//   "track": 1.2,
//   "acq_date": "1/1/2022",
//   "acq_time": 1224,
//   "satellite": "Aqua",
//   "instrument": "MODIS",
//   "confidence": 100,
//   "version": 6.03,
//   "bright_t31": 299.7,
//   "frp": 340.6,
//   "daynight": "N",
//   "type": 1
// },
export default function FireMarker(fire) {
  return (
    <Marker position={[fire.latitude, fire.longitude]}>
      <Popup>
        <h3>MODIS Data</h3>
        <ul>
          <li>Latitude: {fire.latitude}</li>
          <li>Longitude: {fire.longitude}</li>
        </ul>
      </Popup>
    </Marker>
  );
}
