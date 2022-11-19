import './App.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import { Circle, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import MapMarker from "./components/map/MapMarker";
import sample_data from "./sample_data/sample_data.json"
import { useEffect, useState } from 'react';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


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

//filterProductsByRadius(centerPos, radius, product.coords)
function filterProductsByRadius(centerPos, radius, coords) {
    if (radius == null)
        return false;

    const DEGREE_2_METER_RATIO = 111139;

    var rad = Math.sqrt(
        Math.pow(centerPos[0] - coords[0], 2) +
        Math.pow(centerPos[1] - coords[1], 2)) * DEGREE_2_METER_RATIO;

    return rad <= radius;
}

const greenOptions = { color: '#94C973' }

const fetchUserLocationOptions = {
    enableHighAccuracy: true,
    timeout: 6000,
    maximumAge: 0
};

function error(err) {
    console.warn(`Error during fetching your location: ERROR(${err.code}): ${err.message}`);
}

function App() {
    var radius = 2600; //TODO: configurable in Search interface

    const [centerPos, setCenterPos] = useState([50.090786, 19.988419])

    function success(pos) {
        const crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        setCenterPos([crd.latitude, crd.longitude])
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, fetchUserLocationOptions);
    }, []);

    return (
        <MapContainer center={centerPos} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Circle center={centerPos} pathOptions={greenOptions} radius={radius} />
            <Marker position={centerPos} >
                <Popup>
                    This me!
                </Popup>
            </Marker>
            {sample_data.map(product => (
                <MapMarker product={product} />
            ))}
        </MapContainer>
    );
}

export default App;