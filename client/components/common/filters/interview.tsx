import React from "react"
import BaseFilter, { IBaseFilterPorps } from "."
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import { IInterviewFilterActionTypes } from "../../../state/filters/interview/actions"
import InterviewFilterInputGroup from "../groups/filter/interview"

export interface IInterviewFilterFilterPorps
  extends Partial<IBaseFilterPorps> {}

const InterviewFilter: React.FunctionComponent<IInterviewFilterFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const hanldeClick = () => {
    dispatch({ type: IInterviewFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={hanldeClick} onSearch={onSearch!} isMobile={isMobile}>
      <InterviewFilterInputGroup />
    </BaseFilter>
  )
}

export default InterviewFilter
