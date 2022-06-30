export interface IRating {
  value: string
  label: string
}

export const commonRating: IRating[] = [
  { value: "1", label: "極之垃圾" },
  { value: "2", label: "垃圾" },
  { value: "3", label: "普通" },
  { value: "4", label: "幾好" },
  { value: "5", label: "Firm啊!" }
]

export const recommendRating: IRating[] = [
  { value: "1", label: "絕對不建議" },
  { value: "2", label: "不建議" },
  { value: "3", label: "中立" },
  { value: "4", label: "應該會" },
  { value: "5", label: "絕對會" },
  { value: "6", label: "絕對會2" }
]

export const workLoadRating: IRating[] = [
  { value: "1", label: "讀死人" },
  { value: "2", label: "幾辛苦" },
  { value: "3", label: "ok啦" },
  { value: "4", label: "冇乜野Do" },
  { value: "5", label: "輕鬆過" }
]

export const gpaRating: IRating[] = [
  { value: "1", label: "爛到Sir" },
  { value: "2", label: "爛爛地" },
  { value: "3", label: "普通" },
  { value: "4", label: "不錯" },
  { value: "5", label: "靚𠹌到Sir" }
]

export const difficultyRating: IRating[] = [
  { value: "1", label: "0識" },
  { value: "2", label: "難難地" },
  { value: "3", label: "普通" },
  { value: "4", label: "幾輕鬆" },
  { value: "5", label: "太易了" }
]

// export const interviewExperienceRating: IRating[] = [
//   { value: "1", label: "極差" },
//   { value: "2", label: "唔多好" },
//   { value: "3", label: "普通" },
//   { value: "4", label: "幾輕鬆" },
//   { value: "5", label: "太易了" },
// ];
export const hopeRating: IRating[] = [
  { value: "1", label: "0希望" },
  { value: "2", label: "前路崎嶇" },
  { value: "3", label: "ok啦" },
  { value: "4", label: "幾掂" },
  { value: "5", label: "急不及待好好玩玩了" }
]
