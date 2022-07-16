import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps
} from "@mui/material"
import React from "react"
import InputContainer from "../../../containers/input"
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
  selectValue: string | null
  selectId?: string
  itemsClassName?: string
  items: ISelectMenuItems[]
  equired?: boolean
  isRequired?: boolean
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
  isRequired,
  ...props
}) => {
  return (
    <InputContainer errorMessages={errorMessages} isTouched={isTouched}>
      <FormControl>
        {inputLabel && (
          <InputLabel id={selectId} className={`${inputLabelClassName}`}>
            {inputLabel}
            {isRequired && "*"}
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
        <ErrorMessage />
      </FormControl>
    </InputContainer>
  )
}

export default BaseSelect
