import './App.css';
import "leaflet/dist/leaflet.css";
import sample_data from "./sample_data/sample_data.json"
import {useEffect, useState} from 'react';
import Stack from "@mui/material/Stack"
import AddProductMenu from './components/addProduct/AddProductMenu';
import Map from "./components/map/Map";
import SearchBar from "./components/mapSearch/SearchBar";
import {currentPosition} from "./thirdparty/positionstack/coordinates";
import {Box} from "@mui/material";

function App() {
    const [centerPos, setCenterPos] = useState([50.067849, 19.9909743])
    const [products, setProducts] = useState(sample_data);
    const [searchRadius, setSearchRadius] = useState(1000)
    const [chosenCategories, setChosenCategories] = useState([])

    const addNewProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    }

    const onSuccessFetchCurrentPosition = (position) => {
        setCenterPos([position.coords.latitude, position.coords.longitude])
    }

    useEffect(() => {
        currentPosition(onSuccessFetchCurrentPosition)
    }, []);

    return (
        <div style={{position:"relative"}}>
            <Stack direction="row">
                <Map products={products} centerPosition={centerPos} searchRadius={searchRadius} chosenCategories={chosenCategories}/>
                <AddProductMenu onAddNewProduct={addNewProduct}/>
                <Stack spacing={2} sx={{ zIndex: 10001, position: "absolute", top: "1vh", left:10, width: "25%"}}>
                    <div style={{position:"relative"}}>
                        <Box
                            component="img"
                            sx={{
                                position:"absolute",
                                left:"2vw",
                                borderRadius: 5,
                                height: 233,
                                width: 350,
                                maxHeight: { xs: 100, md: 100 },
                                maxWidth: { xs: 100, md: 100 },
                            }}
                            alt="Company logo."
                            src="icons/logo.png"
                        />
                        <SearchBar setSearchRadius={setSearchRadius} setChosenCategories={setChosenCategories} chosenCategories={chosenCategories}/>
                    </div>
                </Stack>
            </Stack>
        </div>
    );
}

export default App;