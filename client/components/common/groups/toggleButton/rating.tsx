import { ThemeProvider } from "@emotion/react"
import { createTheme, ToggleButton } from "@mui/material"
import React from "react"
import BaseToggleButtonGroup, { IBaseToggleButtonGroupProps } from "."
import InputHeader from "../../header/input"
import InputContainer, { IInputHeaderProps } from "../../header/input"
import ErrorMessage, { IErrorMessageProps } from "../../messages/error"
import RatingToggleButton from "../../toggleButton/rating"

interface IRatingToggleButtonGroupProps
  extends IBaseToggleButtonGroupProps,
    IErrorMessageProps,
    IInputHeaderProps {
  ratingTitle: any
}

const theme = createTheme({
  palette: {
    error: {
      main: "#f43f5e"
    },
    warning: {
      main: "#ec4899"
    },
    success: { main: "#f59e0b" },
    info: {
      main: "#eab308"
    },
    secondary: {
      main: "#14b8a6"
    },
    primary: {
      main: "#22c55e"
    }
  }
})

const RatingToggleButtonGroup: React.FunctionComponent<
  IRatingToggleButtonGroupProps
> = ({
  id,
  ratingTitle,
  isTouched,
  errorMessages,
  header,
  headerRequired,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col">
        <InputHeader header={header} headerRequired={headerRequired} />
        <div className="flex flex-row justify-center items-center gap-x-6 ">
          <h6>0</h6>
          <BaseToggleButtonGroup
            exclusive
            {...props}
            // size={{ xs: "small", md: "large" }}
            // sx={{ size: { sx: "small", md: "large" } }}
          >
            <RatingToggleButton
              color="error"
              id={id!}
              value={"1"}
              aria-label={"1"}
            >{`${ratingTitle[0].label}`}</RatingToggleButton>
            <RatingToggleButton
              color="warning"
              id={id!}
              value={"2"}
              aria-label={"2"}
            >
              {`${ratingTitle[1].label}`}
            </RatingToggleButton>
            <RatingToggleButton
              color="success"
              id={id!}
              value={"3"}
              aria-label={"3"}
            >
              {`${ratingTitle[2].label}`}
            </RatingToggleButton>
            <RatingToggleButton
              color="info"
              id={id!}
              value={"4"}
              aria-label={"4"}
            >
              {`${ratingTitle[3].label}`}
            </RatingToggleButton>
            <RatingToggleButton
              color="secondary"
              id={id!}
              value={"5"}
              aria-label={"5"}
            >
              {`${ratingTitle[4].label}`}
            </RatingToggleButton>
            <RatingToggleButton
              color="primary"
              id={id!}
              value={"6"}
              aria-label={"6"}
            >
              {`${ratingTitle[5].label}`}
            </RatingToggleButton>
          </BaseToggleButtonGroup>
          <h6>5</h6>
        </div>
        <ErrorMessage isTouched={isTouched} errorMessages={errorMessages} />
      </div>
    </ThemeProvider>
  )
}

export default RatingToggleButtonGroup
