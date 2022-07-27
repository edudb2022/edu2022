import React from "react"
import BaseFilterDrawer, { IBaseFilterDrawerProps } from "."
import BaseDrawer, { IBaseDrawerProps } from ".."
import AdmissionFilter, { IAdmissionFilterPorps } from "../../filters/admission"

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
