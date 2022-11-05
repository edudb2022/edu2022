import React from "react"
import BaseFilter, { IBaseFilterProps } from "."
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import { IInterviewFilterActionTypes } from "../../../state/filters/interview/actions"
import InterviewFilterInputGroup from "../groups/filter/interview"

export interface IInterviewFilterFilterPorps
  extends Partial<IBaseFilterProps> {}

const InterviewFilter: React.FunctionComponent<IInterviewFilterFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch({ type: IInterviewFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={handleClick} onSearch={onSearch!} isMobile={isMobile}>
      <InterviewFilterInputGroup />
    </BaseFilter>
  )
}

export default InterviewFilter
