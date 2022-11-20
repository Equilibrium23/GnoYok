import React from 'react'
import { AddCircle, CancelRounded } from "@mui/icons-material"; 
import { Box, Collapse, Stack, IconButton} from "@mui/material";
import AddProduct from './AddProduct';
import { useState } from 'react';

export default function AddProductMenu (props) {
    const [showAddProduct, setShowAddProduct] = useState(false);
    
    const handleChange = () => {
        setShowAddProduct((prev) => !prev);
      };
    
    const handleNewProduct = (data) => {
        props.onAddNewProduct(data);
        handleChange();
    };
    
    const getButton = () => {
        if (showAddProduct)
            return <CancelRounded color="secondary" sx={{ fontSize: 40 }} />;
        return <AddCircle color="primary" sx={{ fontSize: 40 }} />;
    };

    return (
    <Box>
        <Box sx={{margin:'5px'}} >
            <Collapse orientation="horizontal" in={showAddProduct}>
                <AddProduct onAddProduct={handleNewProduct}/>
            </Collapse>
        </Box>
        <div style={{position:"absolute", top:0, right:"0%", zIndex:"1000"}}>
            <IconButton onClick={handleChange}>
                {getButton()}
            </IconButton>
        </div>
    </Box>
    );
  
}
