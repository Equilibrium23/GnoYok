import {Marker, Popup} from "react-leaflet";
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ManIcon from '@mui/icons-material/Man';
import {Box, Stack} from "@mui/material";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {generateGoogleMapUrl} from "../../thirdparty/googleMap/urlGenerator"
import L from 'leaflet';
import categories from '../../sample_data/categories.json'
import {generateJakDojadeUrl} from "../../thirdparty/jakdojade/urlGenerator"


function MapMarker(props) {
    var markerIcon = L.divIcon({
        className: 'custom-icon',
        html: `<img src="${categories[props.product.category].icon}"/>`,
    })
    return (
        <Marker position={props.product.coords} icon={markerIcon}>
            <Popup>
                <Stack spacing={2}>
                    <Box>
                       <CategoryIcon/> {categories[props.product.category].name}
                    </Box>
                    <Box>
                       <TitleIcon/> {props.product.title}
                    </Box>
                    <Box>
                      <DescriptionIcon/>  {props.product.description}
                    </Box>
                    <Box>
                        <LocationOnIcon/>
                        <a target="_blank" href={generateGoogleMapUrl("", props.product.adress)}>
                            {props.product.adress}
                        </a>
                    </Box>
                    <Box>
                       <ManIcon/> {props.product.owner}
                    </Box>
                    <Box>
                        <DirectionsBusIcon/>
                        <a target="_blank" href={generateJakDojadeUrl("Krakow",[50.066632, 19.990106], props.product.coords)}>
                            JakDojade
                        </a>
                    </Box>
                </Stack>
            </Popup>
        </Marker>
    );
}

export default MapMarker;