import React from "react"
import BaseFilterDrawer, { IBaseFilterDrawerProps } from "."
import BaseDrawer, { IBaseDrawerProps } from ".."
import AdmissionFilter, { IAdmissionFilterPorps } from "../../filters/admission"
import InterviewFilter from "../../filters/interview"

interface IInterviewFilterDrawerProps extends IBaseFilterDrawerProps {}

const InterviewFilterDrawer: React.FunctionComponent<
  IInterviewFilterDrawerProps
> = ({ ...props }) => {
  return (
    <BaseFilterDrawer {...props}>
      <InterviewFilter isMobile={true} />
    </BaseFilterDrawer>
  )
}

export default InterviewFilterDrawer
