import React from "react"
import BaseToggleButtonGroup, { IBaseToggleButtonGroupProps } from "."
import InputContainer, { IInputContainerProps } from "../../../containers/input"
import RatingToggleButton from "../../toggleButton/rating"

interface ICommonToggleButtonGroupProps
  extends IBaseToggleButtonGroupProps,
    IInputContainerProps {
  id: string
}

const options = [
  { value: "1", "aria-label": "1", title: "non -jupas" },
  { value: "2", "aria-label": "3", title: "jupas" }
]

const CommonToggleButtonGroup: React.FunctionComponent<
  ICommonToggleButtonGroupProps
> = ({
  id,
  header,
  headerRequired,
  errorMessages,
  inputContainerClassName,
  isTouched,
  subHeader,
  ...props
}) => {
  return (
    <InputContainer
      header={header}
      headerRequired={headerRequired}
      errorMessages={errorMessages}
      inputContainerClassName={inputContainerClassName}
      isTouched={isTouched}
      subHeader={subHeader}
    >
      <BaseToggleButtonGroup exclusive size="large" {...props}>
        {options.map((data, index) => {
          return (
            <RatingToggleButton
              key={index}
              id={id}
              value={data.value}
              aria-label={data.value}
            >
              {data.title}
            </RatingToggleButton>
          )
        })}
      </BaseToggleButtonGroup>
    </InputContainer>
  )
}

export default CommonToggleButtonGroup
