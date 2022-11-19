import {Slider} from "@mui/material";

function displayInKilometers(value){
    return value/1000 + " km"
}


function SearchBar(props){
    return (
        <>
            <p>Choose search radius:</p>
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

            sdfsd<br/>
            sdfsd<br/>
            sdfsd<br/>
        </>
    )
}

export default SearchBar;