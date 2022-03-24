import React, { useState } from "react";

import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function Range() {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Slider
        size="small"
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{ color: "#FFA500" }}
      />
    </div>
  );
}
