import {Marker, Popup} from "react-leaflet";
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ManIcon from '@mui/icons-material/Man';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import {Box, Stack} from "@mui/material";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {generateGoogleMapUrl} from "../../thirdparty/googleMap/urlGenerator"
import L from 'leaflet';
import categories from '../../sample_data/categories.json'
import {generateJakDojadeUrl} from "../../thirdparty/jakdojade/urlGenerator"
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';

function MapMarker(props) {
    const markerIcon = L.icon({
        iconUrl: categories[props.product.category].icon,
        iconSize: L.point(24, 24),
        className: props.inSearchRange ? "" : "inactive-marker"
    })

    return (
        <Marker position={props.product.coords} icon={markerIcon}>
            <Popup>
                <Stack spacing={2}>
                    <Box>
                        <CategoryIcon />
                        <p style={{display:"inline", fontSize: "20px", fontFamily: "Arial"}}>
                            {categories[props.product.category].name}
                        </p>
                    </Box>
                    <Box>
                        <TitleIcon />
                        <p style={{display:"inline", fontSize: "30px", fontFamily: "Arial"}}>
                            {props.product.title}
                        </p>
                    </Box>
                    <Box>
                        <DescriptionIcon />  {props.product.description}
                    </Box>
                    <Box>
                        <LocationOnIcon />
                        <p style={{display:"inline", fontSize: "15px", fontFamily: "Arial"}}>
                            <a target="_blank" href={generateGoogleMapUrl("", props.product.adress)}>
                                {props.product.adress}
                            </a>
                        </p>
                    </Box>
                    <Box>
                        <ManIcon />
                        <p style={{display:"inline", fontSize: "15px", fontFamily: "Arial"}}>
                             {props.product.owner}
                        </p>
                    </Box>
                    <Box>
                        <ContactPageIcon />
                        <p style={{display:"inline", fontSize: "15px", fontFamily: "Arial"}}>
                            {props.product.contact}
                        </p>
                    </Box>
                    <Box>
                        <DirectionsBusIcon />
                        <p style={{display:"inline", fontSize: "15px", fontFamily: "Arial"}}>
                            <a target="_blank" href={generateJakDojadeUrl("Krakow", [50.066632, 19.990106], props.product.coords)}>
                                JakDojade
                            </a>
                        </p>
                    </Box>
                    <Box>
                        <AssistantDirectionIcon />
                        <p style={{display:"inline", fontSize: "15px", fontFamily: "Arial"}}>
                            {Math.round(props.distanceFromCenter * 10) / 10000} km
                        </p>
                    </Box>
                </Stack>
            </Popup>
        </Marker>
    );
}

export default MapMarker;