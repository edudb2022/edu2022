import { TextField } from "@mui/material"
import {
  DatePicker,
  LocalizationProvider,
  MobileDatePicker,
  PickersDay
} from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import React, { FocusEvent } from "react"
import InputContainer, { IInputContainerProps } from "../../../containers/input"

interface IBaseDatePickerProps extends IInputContainerProps {
  value: any
  onChange: any
  label: string
  className?: string
  maxDate?: Date
  minDate?: Date
}

const BaseDatePicker: React.FunctionComponent<IBaseDatePickerProps> = ({
  value,
  onChange,
  label,
  className,
  errorMessages,
  headerClassName,
  header,
  headerRequired,
  helpText,
  inputContainerClassName,
  isTouched,
  subHeader,
  subHeaderClassName,
  maxDate,
  minDate,
  ...props
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <InputContainer
          errorMessages={errorMessages}
          header={header}
          headerClassName={headerClassName}
          headerRequired={headerRequired}
          helpText={helpText}
          inputContainerClassName={inputContainerClassName}
          isTouched={isTouched}
          subHeader={subHeader}
          subHeaderClassName={subHeaderClassName}
        >
          <MobileDatePicker
            inputFormat="dd/MM/yyyy"
            label={label}
            value={value}
            onChange={onChange}
            className={` ${className}`}
            maxDate={maxDate}
            minDate={minDate}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  svg: { color: "white" },
                  "& label.Mui-focused": {
                    color: "#F2994A"
                  },
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#F2994A"
                    },
                    "& .Mui-focused fieldset": {
                      borderColor: "#F2994A"
                    }
                  }
                }}
              />
            )}
            {...props}
          />
        </InputContainer>
      </LocalizationProvider>
    </>
  )
}

export default BaseDatePicker
