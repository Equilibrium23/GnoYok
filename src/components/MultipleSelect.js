import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";
import {useState} from "react";
import categories from "../sample_data/categories.json"

function MultipleSelect(props){
    const productCategories = Object.keys(categories)
    console.log(productCategories)
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const [chosenCategories, setChosenCategories] = useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setChosenCategories(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };
    return(
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={chosenCategories}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    sx={{width: 300}}
                >
                    {productCategories.map((productCategory) => (
                        <MenuItem key={productCategory} value={productCategory}>
                            <Checkbox checked={chosenCategories.indexOf(productCategory) > -1} />
                            <ListItemText primary={productCategory} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default MultipleSelect;