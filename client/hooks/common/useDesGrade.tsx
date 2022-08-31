import React, { useEffect, useMemo, useState } from "react"
import { DSEGradeTypesId } from "../../types/common"

type IGradeMeta = {
  SubjectOne: DSEGradeTypesId | null
  subjectTwo: DSEGradeTypesId | null
  subjectThree: DSEGradeTypesId | null
  subjectFour: DSEGradeTypesId | null
  subJectFive: DSEGradeTypesId | null
  subjectSix: DSEGradeTypesId | null
}
interface IUseDesGradeProps {
  gradeMeta: IGradeMeta{}
}

const useDesGrade: React.FunctionComponent<IUseDesGradeProps> = ({
  gradeMeta
}): { bestSix: number; bestFive: number } => {
  const [bestFive, SetBestFive] = useState(0)
  const [bestSix, SetBestSix] = useState(0)

  useEffect(() => {
    for (const [key, value] of Object.entries(gradeMeta)) {
      if (value !== null) {
        SetBestSix(bestSix + value)
      }
      if (gradeMeta.subjectSix !== null) {
        SetBestFive(bestSix - gradeMeta.subjectSix)
      }
    }
  }, [])

  return { bestSix, bestFive }
}

export default useDesGrade
