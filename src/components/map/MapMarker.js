import {Marker, Popup} from "react-leaflet";
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ManIcon from '@mui/icons-material/Man';
import {Box, Stack} from "@mui/material";

function gmapsDirectionsLink(origin, destination)
{
    if(origin)
        return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`
    else
        return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
}

function MapMarker(props) {
    return (
        <Marker position={props.product.coords}>
            <Popup>
                <Stack spacing={2}>
                    <Box>
                       <CategoryIcon/> {props.product.category}
                    </Box>
                    <Box>
                       <TitleIcon/> {props.product.title}
                    </Box>
                    <Box>
                      <DescriptionIcon/>  {props.product.description}
                    </Box>
                    <Box>
                      <LocationOnIcon/>
                      <a href={gmapsDirectionsLink("", props.product.adress)}>
                        {props.product.adress}
                      </a>
                    </Box>
                    <Box>
                       <ManIcon/> {props.product.owner}
                    </Box>
                </Stack>
            </Popup>
        </Marker>
    );
}

export default MapMarker;