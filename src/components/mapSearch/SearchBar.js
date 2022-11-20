import {Slider, Stack} from "@mui/material";
import MultipleSelect from "../MultipleSelect";

function displayInKilometers(value){
    return value/1000 + " km"
}

function SearchBar(props){
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
        >
            <p style={{fontSize: "2em", left: "10%", fontFamily: "Arial"}}>
                Choose search radius:
            </p>
            <Slider
                defaultValue={1000}
                aria-label="Default"
                valueLabelDisplay="auto"
                min={0}
                max={20000}
                step={1000}
                marks
                valueLabelFormat={displayInKilometers}
                onChange={(event, value) => props.setSearchRadius(value)}
            />
            <p style={{fontSize: "2em", left: "10%", fontFamily: "Arial"}}>
                Choose category:
            </p>
            <MultipleSelect setChosenCategories={props.setChosenCategories} chosenCategories={props.chosenCategories}/>
        </Stack>
    )
}

export default SearchBar;