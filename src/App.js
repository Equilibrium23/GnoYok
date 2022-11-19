import './App.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import { Circle, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./components/map/MapMarker";
import sample_data from "./sample_data/sample_data.json"
import { useEffect, useState } from 'react';
import L from 'leaflet';

function filterProductsByRadius(centerPos, radius, coords) {
    if (radius == null)
        return false;

    var lat1 = centerPos[0]
    var lon1 = centerPos[1]
    var lat2 = coords[0]
    var lon2 = coords[1]

    const R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c * 1000;

    return d <= radius;
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
    var radius = 260; //TODO: configurable in Search interface

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

    var meMarkerIcon = L.icon({
        iconUrl: 'icons/me.svg',
        iconSize: L.point(24, 24)
    })

    return (
        <MapContainer center={centerPos} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Circle center={centerPos} pathOptions={greenOptions} radius={radius} />
            <Marker position={centerPos} icon={meMarkerIcon} >
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