import React from "react";
import { Slider } from "@mui/material";

interface IGpaSliderProps {
  onChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
}

const GpaSlider: React.FunctionComponent<IGpaSliderProps> = ({
  onChange,
  ...props
}) => {
  const marks = [
    {
      value: 0,
      label: "0",
    },

    {
      value: 4.3,
      label: "4.3",
    },
  ];
  return (
    <Slider
      onChange={onChange}
      aria-label="gpa"
      color="primary"
      size="medium"
      defaultValue={0}
      min={0}
      max={4.3}
      step={0.1}
      marks={marks}
      valueLabelDisplay="on"
      {...props}
    />
  );
};

export default GpaSlider;
