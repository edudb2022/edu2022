import { DSEGradeTypesId } from "../types/common"

export const DseGradeToScoreMapper = {
  [DSEGradeTypesId.ONE]: 1,
  [DSEGradeTypesId.TWO]: 2,
  [DSEGradeTypesId.THREE]: 3,
  [DSEGradeTypesId.FOUR]: 4,
  [DSEGradeTypesId.FIVE]: 5,
  [DSEGradeTypesId.FIVE_START]: 6,
  [DSEGradeTypesId.FIVE_DOUBLE_STAR]: 7,
  [DSEGradeTypesId.PASS]: 0,
  [DSEGradeTypesId.FAIL]: 0,
  [DSEGradeTypesId.UNCLASSIFIED]: 0
}
