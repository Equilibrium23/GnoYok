import './App.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./components/map/MapMarker";
import sample_data from "./sample_data/sample_data.json"

//TODO: change sync to async call:
// getCoordinates("Osiedle Avia 6,Kraków, Poland");
function getCoordinates(address) {
    const apiKey = "326804ffeb1e7c6bac46e2c520a0ea75"
    var url = "http://api.positionstack.com/v1/forward?access_key=" + apiKey + "&query=" + address;

    const request = new XMLHttpRequest();

    request.open('GET', url, false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        console.log(request.responseText);
        var actualData = JSON.parse(request.responseText);

        return [actualData.data[0].latitude, actualData.data[0].longitude];
    } else
        return null
}


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