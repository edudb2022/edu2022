import React from "react"

import BaseFilter, { IBaseFilterProps } from "."
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"

import { IGradJobFilterActionTypes } from "../../../state/filters/gradJob/actions"

import GradJobFilterInputGroup from "../groups/filter/gradJob"

export interface IGradJobFilterPorps extends Partial<IBaseFilterProps> {}

const GradJobFilter: React.FunctionComponent<IGradJobFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch({ type: IGradJobFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={handleClick} onSearch={onSearch!} isMobile={isMobile}>
      <GradJobFilterInputGroup />
    </BaseFilter>
  )
}

export default GradJobFilter
