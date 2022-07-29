import React from "react"
import { useDispatch } from "react-redux"
import BaseFilter, { IBaseFilterPorps } from "."
import { IAdmissionFilterActionTypes } from "../../../state/filters/admission/actions"
import { IIntershipFilterActionTypes } from "../../../state/filters/intership/actions"
import BaseFilterContainer from "../../containers/filters"
import AdmissionFilterInputGroup from "../groups/filter/admission"
import InternshipFilterInputGroup from "../groups/filter/intership"

export interface IIntershipFilterPorps extends Partial<IBaseFilterPorps> {}

const IntershipFilter: React.FunctionComponent<IIntershipFilterPorps> = ({
  onSearch,
  isMobile
}) => {
  const dispatch = useDispatch()

  const hanldeClick = () => {
    dispatch({ type: IIntershipFilterActionTypes.RESET })
  }
  return (
    <BaseFilter onClick={hanldeClick} onSearch={onSearch!} isMobile={isMobile}>
      <InternshipFilterInputGroup />
    </BaseFilter>
  )
}

export default IntershipFilter
