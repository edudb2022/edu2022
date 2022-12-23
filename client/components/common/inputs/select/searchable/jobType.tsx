import styled from "@emotion/styled"
import { Autocomplete, AutocompleteProps, TextField } from "@mui/material"
import React, { ChangeEvent, ChangeEventHandler } from "react"
import { jobTypeList } from "../../../../../constants/common"
import { JobCategoryMapper } from "../../../../../mappers/jobCategory"
import { JobCategoryTypeId } from "../../../../../types/common"
import InputContainer, {
  IInputContainerProps
} from "../../../../containers/input"

import shortid from "shortid"

interface IJobTypeSearchableSelectProps extends IInputContainerProps {
  name?: string
  value?: JobCategoryTypeId | null
  onChange?: any
  onBlur?: any
  isRequired?: boolean
}

const JobTypeSearchableSelect: React.FunctionComponent<
  IJobTypeSearchableSelectProps
> = ({
  errorMessages,
  header,
  headerRequired,
  inputContainerClassName,
  isTouched,
  helpText,
  value,
  name,
  onChange,
  onBlur,
  isRequired,
  ...props
}) => {
  const GroupHeader = styled("div")(({ theme }) => ({
    position: "sticky",
    top: "-8px",
    padding: "4px 12px",
    backgroundColor: "rgb(203 213 225)"
  }))

  const GroupItems = styled("ul")({
    padding: 0
  })

  const options = jobTypeList

  return (
    <InputContainer
      errorMessages={errorMessages}
      inputContainerClassName={inputContainerClassName}
      header={header}
      headerRequired={headerRequired}
      isTouched={isTouched}
      helpText={helpText}
    >
      <Autocomplete
        id="jobtype"
        options={options}
        groupBy={(option: any) => option.JobCategoryId}
        getOptionLabel={(option) =>
          `${option.chineseDisplayText} | ${option.englishDisplayText}`
        }
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            id="jobType"
            label={`工作類型${isRequired && "*"}`}
            sx={{
              "& label.Mui-focused": {
                color: "#F2994A"
              },
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#F2994A"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#F2994A"
                }
              }
            }}
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            {...props}
          />
        )}
        renderGroup={(params) => (
          <li>
            <GroupHeader key={shortid.generate()}>
              {`${JobCategoryMapper[params.group].chineseDisplayText} | ${
                JobCategoryMapper[params.group].englishDisplayText
              }`}
            </GroupHeader>
            <GroupItems key={shortid.generate()}>{params.children}</GroupItems>
          </li>
        )}
      />
    </InputContainer>
  )
}

export default JobTypeSearchableSelect
