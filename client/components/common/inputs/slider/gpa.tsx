import React from "react"
import { Slider } from "@mui/material"
import InputContainer, { IInputContainerProps } from "../../../containers/input"
import { IInputHeaderProps } from "../../header/input"

interface IGpaSliderProps extends IInputContainerProps {
  onChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void
  name?: string
}

const GpaSlider: React.FunctionComponent<IGpaSliderProps> = ({
  onChange,
  errorMessages,
  headerClassName,
  headerRequired,
  subHeader,
  isTouched,
  subHeaderClassName,
  inputContainerClassName,
  name,
  ...props
}) => {
  const marks = [
    {
      value: 0,
      label: "0"
    },

    {
      value: 4.3,
      label: "4.3"
    }
  ]
  return (
    <InputContainer
      errorMessages={errorMessages}
      headerClassName={headerClassName}
      headerRequired={headerRequired}
      subHeader={subHeader}
      isTouched={isTouched}
      subHeaderClassName={subHeaderClassName}
      inputContainerClassName={inputContainerClassName}
    >
      <Slider
        name={name}
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
    </InputContainer>
  )
}

export default GpaSlider
