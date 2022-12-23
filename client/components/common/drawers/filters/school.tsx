import React from "react"
import BaseFilterDrawer, { IBaseFilterDrawerProps } from "."
import SchoolFilter from "../../filters/school"

interface ISchoolFilterDrawerProps extends IBaseFilterDrawerProps {}

const SchoolFilterDrawer: React.FunctionComponent<ISchoolFilterDrawerProps> = ({
  ...props
}) => {
  return (
    <BaseFilterDrawer {...props}>
      <SchoolFilter isMobile={true} />
    </BaseFilterDrawer>
  )
}

export default SchoolFilterDrawer
