import React from "react"
import BaseFilter, { IBaseFilterProps } from "."
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import { ISchoolFilterActionTypes } from "../../../state/filters/school/actions"
import SchoolFilterInputGroup from "../groups/filter/school"

export interface ISchoolFilterFilterProps extends Partial<IBaseFilterProps> {}

const SchoolFilter: React.FunctionComponent<ISchoolFilterFilterProps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch({ type: ISchoolFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={handleClick} onSearch={onSearch!} isMobile={isMobile}>
      <SchoolFilterInputGroup />
    </BaseFilter>
  )
}

export default SchoolFilter
