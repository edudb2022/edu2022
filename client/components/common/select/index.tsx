import { InputLabel, MenuItem, Select, SelectProps } from "@mui/material"
import React from "react"

interface ISelectMenuItems {
  value: string
  title: string
}

export interface IBaseSelectProps extends SelectProps {
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
  ...props
}) => {
  return (
    <div className="flex flex-col  w-auto">
      {inputLabel && (
        <InputLabel className={`${inputLabelClassName}`}>
          {inputLabel}
        </InputLabel>
      )}
      <InputLabel className={`${inputLabelClassName}`}>{inputLabel}</InputLabel>
      <Select
        id={selectId}
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
    </div>
  )
}

export default BaseSelect
