import { number } from "yup"

export type longQuestionType = {
  id: number
  question: string
}
// export const schoolReviewLongQuestions = [
//   { id: 1, question: "對校園環境同設施既評價有冇補充?" },
//   { id: 2, question: "對資源及支援嘅評價有冇補充？" },
//   { id: 3, question: "對學校政策嘅評價有冇補充？" },
//   { id: 4, question: "對校內膳食嘅評價有冇補充？" },
//   { id: 5, question: "對歸屬感嘅評價有冇補充？" },
//   { id: 6, question: "有咩想向校方反映？" },
//   { id: 7, question: "喺到讀書，你快樂嗎？" },
//   { id: 8, question: "對後人嘅忠告？" },
//   { id: 9, question: "最後補充?" }
// ]

export const schoolReviewLongQuestions = {
  [1 as number]: { id: 1, question: "對校園環境同設施既評價有冇補充?" },
  [2 as number]: { id: 2, question: "對資源及支援嘅評價有冇補充？" },
  [3 as number]: { id: 3, question: "對學校政策嘅評價有冇補充？" },
  [4 as number]: { id: 4, question: "對校內膳食嘅評價有冇補充？" },
  [5 as number]: { id: 5, question: "對歸屬感嘅評價有冇補充？" },
  [6 as number]: { id: 6, question: "有咩想向校方反映？" },
  [7 as number]: { id: 7, question: "喺到讀書，你快樂嗎？" },
  [8 as number]: { id: 8, question: "對後人嘅忠告？" },
  [9 as number]: { id: 9, question: "最後補充?" }
}
//     { id: 1, question: "對校園環境同設施既評價有冇補充?" },
//     { id: 2, question: "對資源及支援嘅評價有冇補充？" },
//     { id: 3, question: "對學校政策嘅評價有冇補充？" },
//     { id: 4, question: "對校內膳食嘅評價有冇補充？" },
//     { id: 5, question: "對歸屬感嘅評價有冇補充？" },
//     { id: 6, question: "有咩想向校方反映？" },
//     { id: 7, question: "喺到讀書，你快樂嗎？" },
//     { id: 8, question: "對後人嘅忠告？" },
//     { id: 9, question: "最後補充?" }
//   ]
