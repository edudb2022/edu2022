import React from "react"
import BaseFilterDrawer, { IBaseFilterDrawerProps } from "."
import AdmissionFilter from "../../filters/admission"

interface IAdmissionFilterDrawerProps extends IBaseFilterDrawerProps {}

const AdmissionFilterDrawer: React.FunctionComponent<
  IAdmissionFilterDrawerProps
> = ({ ...props }) => {
  return (
    <BaseFilterDrawer {...props}>
      <AdmissionFilter isMobile={true} />
    </BaseFilterDrawer>
  )
}

export default AdmissionFilterDrawer
