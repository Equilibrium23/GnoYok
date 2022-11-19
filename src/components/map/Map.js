import {Circle, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import sample_data from "../../sample_data/sample_data.json";
import MapMarker from "./MapMarker";

function Map(props) {
    const greenOptions = { color: '#94C973' }

    return(
        <MapContainer center={props.centerPosition} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={props.centerPosition} pathOptions={greenOptions} radius={props.searchRadius} />
            <Marker position={props.centerPosition} >
                <Popup>
                    This me!
                </Popup>
            </Marker>
            {sample_data.filter(item => props.chosenCategories.includes(item.category))
                .map(product => (
                <MapMarker product={product} />
            ))}
        </MapContainer>
    )
}

export default Map;