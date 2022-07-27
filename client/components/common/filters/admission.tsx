import React from "react"
import { useDispatch } from "react-redux"
import BaseFilter, { IBaseFilterPorps } from "."
import { IAdmissionFilterActionTypes } from "../../../state/filters/admission/actions"
import BaseFilterContainer from "../../containers/filters"
import AdmissionFilterInputGroup from "../groups/filter/admission"

export interface IAdmissionFilterPorps extends Partial<IBaseFilterPorps> {}

const AdmissionFilter: React.FunctionComponent<IAdmissionFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useDispatch()

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
