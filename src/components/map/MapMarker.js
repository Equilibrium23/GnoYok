import {Marker, Popup} from "react-leaflet";


function MapMarker(props) {
    return (
        <Marker position={props.markerPosition}>
            <Popup>
                {props.category} <br/>
                {props.title} <br/>
                {props.description} <br/>
                {props.adress} <br/>
                {props.owner} <br/>
            </Popup>
        </Marker>
    );
}

export default MapMarker;
