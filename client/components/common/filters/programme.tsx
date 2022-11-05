import React from "react"
import BaseFilter, { IBaseFilterProps } from "."
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import { IProgrammeFilterActionTypes } from "../../../state/filters/programme/actions"
import ProgrammeFilterInputGroup from "../groups/filter/programme"

export interface IProgrammeFilterFilterPorps
  extends Partial<IBaseFilterProps> {}

const ProgrammeFilter: React.FunctionComponent<IProgrammeFilterFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch({ type: IProgrammeFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={handleClick} onSearch={onSearch!} isMobile={isMobile}>
      <ProgrammeFilterInputGroup />
    </BaseFilter>
  )
}

export default ProgrammeFilter
