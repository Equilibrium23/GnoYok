import './App.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import { Circle, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./components/map/MapMarker";
import sample_data from "./sample_data/sample_data.json"
import { useEffect, useState } from 'react';
import { filterProductsByRadius, getDistance } from "./utils/radiusFilter.js"
import Stack from "@mui/material/Stack"
import L from 'leaflet';
import AddProductMenu from './components/AddProductMenu';
import Map from "./components/map/Map";
import SearchBar from "./components/SearchBar";

const fetchUserLocationOptions = {
    enableHighAccuracy: true,
    timeout: 6000,
    maximumAge: 0
};

function error(err) {
    console.warn(`Error during fetching your location: ERROR(${err.code}): ${err.message}`);
}

function App() {
    var radius = 2000; //TODO: configurable in Search interface

    const [centerPos, setCenterPos] = useState([50.067849, 19.9909743])
    const [products, setProducts] = useState(sample_data);

    const addNewProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    }
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

    const [searchRadius, setSearchRadius] = useState(1000)
    const [chosenCategories, setChosenCategories] = useState([])

    return (
        <div style={{position:"relative"}}>
            <Stack direction="row">
                <Map products={products} centerPosition={centerPos} searchRadius={searchRadius} chosenCategories={chosenCategories}/>
                <AddProductMenu onAddNewProduct={addNewProduct}/>
                <Stack sx={{borderRadius: 2, zIndex: 10001, position: "absolute", top: "10vh", left:10, width: "25%", backgroundColor:"white"}}>
                    <SearchBar setSearchRadius={setSearchRadius} setChosenCategories={setChosenCategories} chosenCategories={chosenCategories}/>
                </Stack>
            </Stack>
        </div>
    );
}

export default App;