import React from "react"
import { useDispatch } from "react-redux"
import BaseFilter, { IBaseFilterPorps } from "."

import { IGradJobFilterActionTypes } from "../../../state/filters/gradJob/actions"

import GradJobFilterInputGroup from "../groups/filter/gradJob"

export interface IGradJobFilterPorps extends Partial<IBaseFilterPorps> {}

const GradJobFilter: React.FunctionComponent<IGradJobFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useDispatch()

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
