import React from "react"
import BaseFilter, { IBaseFilterPorps } from "."
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import { IProgrammeFilterActionTypes } from "../../../state/filters/programme/actions"
import ProgrammeFilterInputGroup from "../groups/filter/programme"

export interface IProgrammeFilterFilterPorps
  extends Partial<IBaseFilterPorps> {}

const ProgrammeFilter: React.FunctionComponent<IProgrammeFilterFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const hanldeClick = () => {
    dispatch({ type: IProgrammeFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={hanldeClick} onSearch={onSearch!} isMobile={isMobile}>
      <ProgrammeFilterInputGroup />
    </BaseFilter>
  )
}

export default ProgrammeFilter
