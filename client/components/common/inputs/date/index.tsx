import { TextField } from "@mui/material"
import {
  DatePicker,
  LocalizationProvider,
  MobileDatePicker
} from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import React, { FocusEvent } from "react"
import ErrorMessage, { IErrorMessageProps } from "../../messages/error"

interface IBaseDatePickerProps {
  value: any
  onChange: any
  label: string
  className?: string
}

const BaseDatePicker: React.FunctionComponent<IBaseDatePickerProps> = ({
  value,
  onChange,
  label,
  className,
  ...props
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div>
          <MobileDatePicker
            inputFormat="dd/MM/yyyy"
            label={label}
            value={value}
            renderInput={(params) => <TextField {...params} />}
            onChange={onChange}
            className={className}
            {...props}
          />
        </div>
      </LocalizationProvider>
    </>
  )
}

export default BaseDatePicker
