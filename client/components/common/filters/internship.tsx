import React from "react"
import BaseFilter, { IBaseFilterProps } from "."
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"

import { IInternshipFilterActionTypes } from "../../../state/filters/internship/actions"

import InternshipFilterInputGroup from "../groups/filter/internship"

export interface IInternshipFilterProps extends Partial<IBaseFilterProps> {}

const InternshipFilter: React.FunctionComponent<IInternshipFilterProps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch({ type: IInternshipFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={handleClick} onSearch={onSearch!} isMobile={isMobile}>
      <InternshipFilterInputGroup />
    </BaseFilter>
  )
}

export default InternshipFilter
