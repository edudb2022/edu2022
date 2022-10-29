import { DSEGradeTypeId } from "../types/common"

export const DseGradeToScoreMapper = {
  [DSEGradeTypeId.ONE]: 1,
  [DSEGradeTypeId.TWO]: 2,
  [DSEGradeTypeId.THREE]: 3,
  [DSEGradeTypeId.FOUR]: 4,
  [DSEGradeTypeId.FIVE]: 5,
  [DSEGradeTypeId.FIVE_START]: 6,
  [DSEGradeTypeId.FIVE_DOUBLE_STAR]: 7,
  [DSEGradeTypeId.PASS]: 0,
  [DSEGradeTypeId.FAIL]: 0,
  [DSEGradeTypeId.UNCLASSIFIED]: 0
}
