import React from "react"
import BaseFilterDrawer, { IBaseFilterDrawerProps } from "."

import ProgrammeFilter from "../../filters/programme"

interface IProgrammeFilterDrawerProps extends IBaseFilterDrawerProps {}

const ProgrammeFilterDrawer: React.FunctionComponent<
  IProgrammeFilterDrawerProps
> = ({ ...props }) => {
  return (
    <BaseFilterDrawer {...props}>
      <ProgrammeFilter isMobile={true} />
    </BaseFilterDrawer>
  )
}

export default ProgrammeFilterDrawer
