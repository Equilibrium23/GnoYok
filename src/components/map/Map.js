import {Circle, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import MapMarker from "./MapMarker";
import L from 'leaflet';

function Map(props) {
    const greenOptions = { color: '#94C973' }
    const meMarkerIcon = L.icon({
        iconUrl: 'icons/me.svg',
        iconSize: L.point(24, 24)
    })
    return(
        <MapContainer center={props.centerPosition} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={props.centerPosition} pathOptions={greenOptions} radius={props.searchRadius} />
            <Marker position={props.centerPosition} icon={meMarkerIcon} >
                <Popup>
                    This me!
                </Popup>
            </Marker>
            {props.products.filter(item => props.chosenCategories.includes(item.category))
                .map(product => (
                    <MapMarker product={product} />
                ))}
        </MapContainer>
    )
}

export default Map;