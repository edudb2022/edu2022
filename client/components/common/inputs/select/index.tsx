import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps
} from "@mui/material"
import React from "react"
import {
  AdmissionLevelTypeId,
  admissionOfferSortingTypes,
  AdmissionOfferTypeId,
  ApplicationTypeId,
  gradJobOfferSortingTypes,
  InternshipOfferSortingTypes,
  InternshipTypeId,
  InterviewSortingTypes,
  ISelectMenuItemsType,
  JobSourceTypeId,
  ProgrammeSortingTypes,
  SchoolSortingTypes,
  SchoolTypeId,
  YearOfStudyTypeId
} from "../../../../types/common"
import InputContainer, { IInputContainerProps } from "../../../containers/input"
import ErrorMessage, { IErrorMessageProps } from "../../messages/error"

export interface IBaseSelectProps extends SelectProps, IInputContainerProps {
  inputLabel?: string
  inputLabelClassName?: string
  selectLabel?: string
  selectClassName?: string
  selectValue:
    | null
    | string
    | SchoolTypeId
    | JobSourceTypeId
    | YearOfStudyTypeId
    | AdmissionLevelTypeId
    | AdmissionOfferTypeId
    | InternshipTypeId
    | ApplicationTypeId
    | SchoolSortingTypes
    | undefined
  selectId?: string
  itemsClassName?: string
  items:
    | ISelectMenuItemsType<number, string>[]
    | ISelectMenuItemsType<SchoolSortingTypes, string>[]
    | ISelectMenuItemsType<ProgrammeSortingTypes, string>[]
    | ISelectMenuItemsType<InterviewSortingTypes, string>[]
    | ISelectMenuItemsType<admissionOfferSortingTypes, string>[]
    | ISelectMenuItemsType<InternshipOfferSortingTypes, string>[]
    | ISelectMenuItemsType<gradJobOfferSortingTypes, string>[]
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
  helpText,
  ...props
}) => {
  return (
    <InputContainer
      helpText={helpText}
      errorMessages={errorMessages}
      isTouched={isTouched}
    >
      <FormControl>
        {inputLabel && (
          <InputLabel
            id={selectId}
            className={`${inputLabelClassName}`}
            // style={{ color: "#F2994A" }}
            sx={{
              "&.Mui-focused": {
                color: "#F2994A"
              }
            }}
          >
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
          fullWidth
          sx={{
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F2994A"
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F2994A"
            }
          }}
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
      </FormControl>
    </InputContainer>
  )
}

export default BaseSelect
