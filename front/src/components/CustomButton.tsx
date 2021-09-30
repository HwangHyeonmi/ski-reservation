import { Button, FormControl } from '@mui/material';
import React from 'react';

interface props{
    name:string;
    onClick?:()=>void;
}

const CustomButton = ({name,onClick}:props) => {
    return (
        <FormControl sx={{ m: 1, minWidth: 120,height:"auto" }}>
      <Button variant="contained" onClick={onClick} style={{height:"auto",minHeight:'1.4375em',padding:"16.5px 14px"}}>
          {name}</Button>
      </FormControl>
    );
};

export default CustomButton;