import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  SelectProps
} from "@mui/material"
import React from "react"
import {
  CategoryA,
  CategoryB,
  CategoryC
} from "../../../../constants/admission"
import ErrorMessage, { IErrorMessageProps } from "../../messages/error"

interface IDseSubjectsSelectProps extends SelectProps, IErrorMessageProps {
  //   inputLabel?: string;
  //   inputLabelClassName?: string;
  //   selectLabel: string;
  selecClassName?: string
  selectValue: string
  selectId?: string
  itemsClassName?: string
  inputLabelClassName?: string
  inputLabel?: string
  // items: ISelectMenuItems[];
}

const DseSubjectsSelect: React.FunctionComponent<IDseSubjectsSelectProps> = ({
  //   inputLabel,
  //   inputLabelClassName,
  //   selectLabel,
  selectValue,
  selecClassName,
  selectId,
  //   items,
  errorMessages,
  isTouched,
  itemsClassName,
  inputLabelClassName,
  inputLabel,
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
        value={selectValue}
        label={inputLabel}
        labelId={selectId}
        className={`${selecClassName}`}
        variant="outlined"
        {...props}
      >
        <ListSubheader>甲類：高中科目</ListSubheader>
        {CategoryA.map((data, index) => {
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
        <ListSubheader>乙類：應用學習科目</ListSubheader>
        {CategoryB.map((data, index) => {
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
        <ListSubheader>丙類：其他語言科目</ListSubheader>
        {CategoryC.map((data, index) => {
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

export default DseSubjectsSelect
