import React from "react"
import BaseFilterDrawer, { IBaseFilterDrawerProps } from "."
import GradJobFilter from "../../filters/gradJob"

interface IGradJobDrawerProps extends IBaseFilterDrawerProps {}

const GradJobFilterDrawer: React.FunctionComponent<IGradJobDrawerProps> = ({
  ...props
}) => {
  return (
    <BaseFilterDrawer {...props}>
      <GradJobFilter isMobile={true} />
    </BaseFilterDrawer>
  )
}

export default GradJobFilterDrawer
