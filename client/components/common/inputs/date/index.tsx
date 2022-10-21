import { TextField } from "@mui/material"
import {
  DatePicker,
  LocalizationProvider,
  MobileDatePicker
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
            renderInput={(params) => <TextField {...params} fullWidth />}
            onChange={onChange}
            className={` ${className}`}
            maxDate={maxDate}
            minDate={minDate}
            // minDate={
            //   new Date(new Date().setDate(new Date().getDate() - 365 * 50))
            // }
            // maxDate={new Date(new Date().setDate(new Date().getDate() + 30))}
            {...props}
          />
        </InputContainer>
      </LocalizationProvider>
    </>
  )
}

export default BaseDatePicker
