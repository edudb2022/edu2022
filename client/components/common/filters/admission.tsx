import React from "react"

import BaseFilter, { IBaseFilterProps } from "."
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import { IAdmissionFilterActionTypes } from "../../../state/filters/admission/actions"
import BaseFilterContainer from "../../containers/filters"
import AdmissionFilterInputGroup from "../groups/filter/admission"

export interface IAdmissionFilterPorps extends Partial<IBaseFilterProps> {}

const AdmissionFilter: React.FunctionComponent<IAdmissionFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const hanldeClick = () => {
    dispatch({ type: IAdmissionFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={hanldeClick} onSearch={onSearch!} isMobile={isMobile}>
      <AdmissionFilterInputGroup />
    </BaseFilter>
  )
}

export default AdmissionFilter
