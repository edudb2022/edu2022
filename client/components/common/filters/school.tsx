import React from "react"
import BaseFilter, { IBaseFilterPorps } from "."
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import { ISchoolFilterActionTypes } from "../../../state/filters/school/actions"
import ProgrammeFilterInputGroup from "../groups/filter/programme"

export interface ISchoolFilterFilterPorps extends Partial<IBaseFilterPorps> {}

const SchoolFilter: React.FunctionComponent<ISchoolFilterFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const hanldeClick = () => {
    dispatch({ type: ISchoolFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={hanldeClick} onSearch={onSearch!} isMobile={isMobile}>
      <ProgrammeFilterInputGroup />
    </BaseFilter>
  )
}

export default SchoolFilter
