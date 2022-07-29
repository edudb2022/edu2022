import React from "react"
import BaseFilterDrawer, { IBaseFilterDrawerProps } from "."
import IntershipFilter from "../../filters/internship"

interface IIntershipFilterDrawerProps extends IBaseFilterDrawerProps {}

const IntershipFilterDrawer: React.FunctionComponent<
  IIntershipFilterDrawerProps
> = ({ ...props }) => {
  return (
    <BaseFilterDrawer {...props}>
      <IntershipFilter isMobile={true} />
    </BaseFilterDrawer>
  )
}

export default IntershipFilterDrawer
