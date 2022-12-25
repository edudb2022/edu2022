export const schoolReviewRatingQuestionsMapper = {
  [1 as number]: { id: 1, question: "學校設施及環境" },
  [2 as number]: {
    id: 2,
    question: "資源及支援",
    helpertext: "例如Scholarship數量，Exchange支援，就業及情緒輔導等等"
  },
  [3 as number]: { id: 3, question: "學校政策" },
  [4 as number]: { id: 4, question: "校內膳食" },
  [5 as number]: { id: 5, question: "歸屬感" },
  [6 as number]: { id: 6, question: "推薦指數" }
}

export const programmeReviewRatingQuestionsMapper = {
  [1 as number]: {
    id: 1,
    question: "課程結構",
    helpertext: "各科內容質素，連貫性等"
  },
  [2 as number]: {
    id: 2,
    question: "爛龜(Grade)指數"
  },
  [3 as number]: { id: 3, question: "爆肝指數" },
  [4 as number]: {
    id: 4,
    question: "學習經歷",
    helpertext: "例如學習氣氛，教師質素等"
  },
  [5 as number]: {
    id: 5,
    question: "資源",
    helpertext: "例如學習資源，如免費影印紙張上限，Exchange 支援等等"
  },
  [6 as number]: { id: 6, question: "推薦指數" }
}

export const interviewReviewRatingQuestionsMapper = {
  [1 as number]: {
    id: 1,
    question: "面試體驗"
  },
  [2 as number]: {
    id: 2,
    question: "面試難度"
  }
}
