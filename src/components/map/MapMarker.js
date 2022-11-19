import {Marker, Popup} from "react-leaflet";
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ManIcon from '@mui/icons-material/Man';
import {Box, Stack} from "@mui/material";
import {generateGoogleMapUrl} from "../../thirdparty/googleMap/urlGenerator"



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
                        <a target="_blank" href={generateGoogleMapUrl("", props.product.adress)}>
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