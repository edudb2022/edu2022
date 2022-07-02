import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps
} from "@mui/material"
import React from "react"
import ErrorMessage, { IErrorMessageProps } from "../../messages/error"

interface ISelectMenuItems {
  value: string
  title: string
}

export interface IBaseSelectProps extends SelectProps, IErrorMessageProps {
  inputLabel?: string
  inputLabelClassName?: string
  selectLabel?: string
  selectClassName?: string
  selectValue: string
  selectId?: string
  itemsClassName?: string
  items: ISelectMenuItems[]
}

const BaseSelect: React.FunctionComponent<IBaseSelectProps> = ({
  inputLabel,
  inputLabelClassName,
  selectLabel,
  selectValue,
  selectClassName,
  selectId,
  items,
  itemsClassName,
  errorMessages,
  isTouched,
  id,
  ...props
}) => {
  return (
    <FormControl>
      {inputLabel && (
        <InputLabel id={selectId} className={`${inputLabelClassName}`}>
          {inputLabel}
        </InputLabel>
      )}
      <Select
        id={selectId}
        label={inputLabel}
        labelId={selectId}
        value={selectValue}
        className={`${selectClassName}`}
        variant="outlined"
        {...props}
      >
        {items.map((data, index) => {
          return (
            <MenuItem
              key={index}
              className={`${itemsClassName}`}
              value={data.value}
            >
              {data.title}
            </MenuItem>
          )
        })}
      </Select>
      <ErrorMessage errorMessages={errorMessages} isTouched={isTouched} />
    </FormControl>
  )
}

export default BaseSelect
