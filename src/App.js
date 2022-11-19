import './App.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import {Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import MapMarker from "./components/map/MapMarker";
import sample_data from "./sample_data/sample_data.json"

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


function App() {
    const centerPos = [50.049, 19.94]
  return (
      <MapContainer center={centerPos} zoom={13} scrollWheelZoom={true}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {sample_data.map(product => (
              <MapMarker product={product}/>
          ))}
      </MapContainer>
  );
}

export default App;
