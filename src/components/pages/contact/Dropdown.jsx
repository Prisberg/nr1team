import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="name-select-label">Who to contact</InputLabel>
        <Select
          labelId="name-select-label"
          id="name-select"
          value={name}
          label="Who to contact"
          onChange={handleChange}
        >
          <MenuItem value={"Philip Risberg"}>Philip Risberg</MenuItem>
          <MenuItem value={"Elin Arntén"}>Elin Arntén</MenuItem>
          <MenuItem value={"Hazem Kawas"}>Hazem Kawas</MenuItem>
          <MenuItem value={"Erik Matsgård"}>Erik Matsgård</MenuItem>
          <MenuItem value={"Isaaq Guleed"}>Isaaq Guleed</MenuItem>
              </Select>
      </FormControl>
    </Box>
  );
}
