import React from "react"

import BaseFilter, { IBaseFilterPorps } from "."
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"

import { IGradJobFilterActionTypes } from "../../../state/filters/gradJob/actions"

import GradJobFilterInputGroup from "../groups/filter/gradJob"

export interface IGradJobFilterPorps extends Partial<IBaseFilterPorps> {}

const GradJobFilter: React.FunctionComponent<IGradJobFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const hanldeClick = () => {
    dispatch({ type: IGradJobFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={hanldeClick} onSearch={onSearch!} isMobile={isMobile}>
      <GradJobFilterInputGroup />
    </BaseFilter>
  )
}

export default GradJobFilter
