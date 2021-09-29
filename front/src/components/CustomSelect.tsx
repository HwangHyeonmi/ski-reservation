import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface props {
  name: string;
  selectArray: Array<string>;
  getSelectVal: (val: string, id: number) => void;
  id: number;
  currentVal: string;
}

export default function CustomSelect({
  name,
  selectArray,
  getSelectVal,
  id,
  currentVal,
}: props) {
  const [state, setState] = React.useState(currentVal);

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
    getSelectVal(event.target.value, id);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state}
        defaultValue={currentVal}
        label="Age"
        onChange={handleChange}
      >
        {selectArray.map((val, key) => {
          return (
            <MenuItem value={val} key={key}>
              {val}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
