import {Circle, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import MapMarker from "./MapMarker";
import L from 'leaflet';
import {getDistance, productInSearchRange} from "../../utils/radiusFilter";

function Map(props) {
    const greenOptions = { color: '#94C973' }
    const meMarkerIcon = L.icon({
        iconUrl: 'icons/me.svg',
        iconSize: L.point(24, 24)
    })

    const filterChosenCategories = (item) => {
        return props.chosenCategories.includes(item.category)
    }

    return(
        <MapContainer center={props.centerPosition} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={props.centerPosition} pathOptions={greenOptions} radius={props.searchRadius} />
            <Marker position={props.centerPosition} icon={meMarkerIcon} >
                <Popup>
                    <p style={{display:"inline", fontSize: "20px", fontFamily: "Arial"}}>
                        You are here
                    </p>
                </Popup>
            </Marker>
            {props.products
                .filter(filterChosenCategories)
                .map(product => (
                    <MapMarker distanceFromCenter={getDistance(props.centerPosition, product.coords)} inSearchRange={productInSearchRange(props.centerPosition, props.searchRadius, product.coords)} product={product} />
                ))}
        </MapContainer>
    )
}

export default Map;