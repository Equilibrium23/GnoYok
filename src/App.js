import './App.css';
import "leaflet/dist/leaflet.css";
import sample_data from "./sample_data/sample_data.json"
import {useEffect, useState} from 'react';
import Stack from "@mui/material/Stack"
import AddProductMenu from './components/addProduct/AddProductMenu';
import Map from "./components/map/Map";
import SearchBar from "./components/mapSearch/SearchBar";
import {currentPosition} from "./thirdparty/positionstack/coordinates";

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
                <Stack sx={{opacity: "85%", borderRadius: 2, zIndex: 10001, position: "absolute", top: "10vh", left:10, width: "25%", backgroundColor:"white"}}>
                    <SearchBar setSearchRadius={setSearchRadius} setChosenCategories={setChosenCategories} chosenCategories={chosenCategories}/>
                </Stack>
            </Stack>
        </div>
    );
}

export default App;