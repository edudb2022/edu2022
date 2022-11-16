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
  value?: JobCategoryTypeId
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
    padding: "4px 20px",
    // color: "#BE4B00",
    // backgroundColor: "#FFBF9F"
    backgroundColor: "rgb(203 213 225)"
  }))

  const GroupItems = styled("ul")({
    padding: 0
    // color: "#F2994A"
    // backgroundColor: "#FFF5EC"
    // backgroundColor: " rgb(203 213 225)"
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
        id="grouped-demo"
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
            label="工作類型"
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
            onChange={(e) => {
              console.log(232, e)
            }}
            onBlur={onBlur}
            required={isRequired}
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
