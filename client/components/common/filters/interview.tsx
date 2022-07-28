import React from "react"
import { useDispatch } from "react-redux"
import BaseFilter, { IBaseFilterPorps } from "."
import { IInterviewFilterActionTypes } from "../../../state/filters/interview/actions"
import InterviewFilterInputGroup from "../groups/filter/interview"

export interface IInterviewFilterFilterPorps
  extends Partial<IBaseFilterPorps> {}

const InterviewFilter: React.FunctionComponent<IInterviewFilterFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useDispatch()

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
