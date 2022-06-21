import { ClassNames } from "@emotion/react"
import React from "react"
import { ADMISSION_TYPE, SCORE_TYPE } from "../../../../types/common"
import AdmissionScoreCircularBarProps from "../../circularBar/admissionScore"

export interface IAdmissionScoreCircularBarGroupProps {
  jupasBestFiveValue: number
  jupasBestSixValue: number
  nonJupasBestGpaValue: number
  nonJupasBestFiveValue: number
  className?: string
}

const AdmissionScoreCircularBarGroup: React.FunctionComponent<
  IAdmissionScoreCircularBarGroupProps
> = ({
  jupasBestFiveValue,
  jupasBestSixValue,
  nonJupasBestGpaValue,
  nonJupasBestFiveValue,
  className,
}) => {
  return (
    <div
      className={`flex flex-row justify-around items-center gap-y-2 gap-x-2  mt-8  ${className}`}
    >
      <AdmissionScoreCircularBarProps
        admissionType={ADMISSION_TYPE.JUPAS}
        scoreType={SCORE_TYPE.BEST_FIVE}
        currentValue={jupasBestFiveValue}
        maxValue={35}
      />

      <AdmissionScoreCircularBarProps
        admissionType={ADMISSION_TYPE.JUPAS}
        scoreType={SCORE_TYPE.BEST_SIX}
        currentValue={jupasBestSixValue}
        maxValue={42}
      />

      <AdmissionScoreCircularBarProps
        admissionType={ADMISSION_TYPE.NON_JUPAS}
        scoreType={SCORE_TYPE.GPA}
        currentValue={nonJupasBestGpaValue}
        maxValue={4.3}
      />

      <AdmissionScoreCircularBarProps
        admissionType={ADMISSION_TYPE.NON_JUPAS}
        scoreType={SCORE_TYPE.BEST_FIVE}
        currentValue={nonJupasBestFiveValue}
        maxValue={35}
      />
    </div>
  )
}

export default AdmissionScoreCircularBarGroup
