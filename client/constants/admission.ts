import { ADMISSION_TYPE } from "../types/common"

const admissionType = [
  { value: ADMISSION_TYPE.JUPAS, title: "Jupas" },
  { value: ADMISSION_TYPE.NON_JUPAS, title: "Non-jupas" },
  { value: ADMISSION_TYPE.BACHELOR, title: "Bachelor" }
]

const admissionCondition = [
  { value: "conditional", title: "Conditional Offer" },
  { value: "direct", title: "Direct Offer" }
]

const admissionLevel = [
  { value: "1", title: "Year 1" },
  { value: "2", title: "Year 2" },
  { value: "3", title: "Year 3" },
  { value: "4", title: "Year 4" },
  { value: "5+", title: "Year 5+" }
]

const dseScore = [
  { value: "0", title: "U" },
  { value: "1", title: "1" },
  { value: "2", title: "2" },
  { value: "3", title: "3" },
  { value: "4", title: "4" },
  { value: "5", title: "5" },
  { value: "6", title: "5*" },
  { value: "7", title: "5**" }
]

const CategoryA = [
  { value: "chinese-language", title: "中國語文" },
  { value: "English Language", title: "英國語文" },
  { value: "mathematics-compulsory-part", title: "數學必修部分" },
  { value: "citizenship-and-social-development", title: "公民與社會發展" },
  { value: "liberal-studies", title: "通識教育" },
  { value: "biology", title: "生物" },
  { value: "chemistry", title: "化學" },
  { value: "economics", title: "經濟" },
  {
    value: "business-accounting-and-financial-studies",
    title: "企業、會計與財務概論"
  },
  { value: "physics", title: "物理" },
  { value: "geography", title: "地理" },
  { value: "m1", title: "M1" },
  { value: "m2", title: "M2" },
  { value: "chinese-history", title: "中國歷史" },
  {
    value: "Information-and-communication-technology",
    title: "資訊及通訊科技"
  },
  { value: "tourism-and-hospitality-studies", title: "旅遊與款待" },
  { value: "visual-arts", title: "視覺藝術" },
  { value: "chinese-literature", title: "中國文學" },
  { value: "physical-education", title: "體育" },
  { value: "health-management-and-social-care", title: "健康管理與社會關懷" },
  { value: "ethics-and-religious-studies", title: "倫理與宗教" },
  { value: "design-and-applied-technology", title: "設計與應用科技" },
  { value: "combined-science", title: "組合科學" },
  { value: "literature-in-english", title: "英語文學" },
  { value: "technology-and-living", title: "科技與生活" },
  { value: "music", title: "音樂" },
  { value: "integrated-science", title: "綜合科學" }
]

const CategoryB = [
  { value: "display-and-jewellery-design", title: "展示及首飾設計" },
  { value: "fashion-and-image-design", title: "時裝及形象設計" },
  { value: "interior-design", title: "室內設計" },
  { value: "computer-game-and-animation-design", title: "電腦遊戲及動畫設計" },
  { value: "digital-comic-design-and-production", title: "數碼漫畫設計與製作" },
  { value: "popular-music-roduction", title: "流行音樂製作" },
  { value: "taking-a-chance-on-dance", title: "舞出新機 － 舞蹈藝術" },
  { value: "the-essentials-of-dramatic-artss", title: "由戲開始 • 劇藝縱橫" },
  {
    value: "digital-media-and-radio-production",
    title: "數碼媒體及電台製作"
  },
  { value: "film-and-transmedia", title: "電影及超媒體" },
  { value: "pr-and-Multimedia-communication", title: "公關及媒體傳訊" },
  { value: "accounting-for-e-Business", title: "電子商務會計" },
  { value: "data-application-for-business", title: "商業數據應用" },
  { value: "marketing-and-online-promotion", title: "市場營銷及網上推廣" },
  {
    value: "law-Enforcement-in-hong-kong",
    title: "香港執法實務"
  },
  { value: "patisserie-and-cafe-operations", title: "甜品及咖啡店營運" },
  { value: "western-cuisine", title: "西式食品製作" },
  { value: "airport-passenger-terminal-operations", title: "機場客運大樓運作" },
  { value: "hospitality-services-in-practice", title: "酒店服務營運" },
  { value: "hotel-operations", title: "酒店營運" },
  { value: "child-care-and-development", title: "幼兒發展" },
  { value: "child-care-and-education", title: "幼兒教育" },
  { value: "fundamental-cosmetology", title: "美容學基礎" },
  { value: "food-innovation-and-science", title: "食品創新與科學" },
  { value: "animal-care", title: "動物護理" },
  { value: "foundation-in-chinese-medicine", title: "中醫藥學基礎" },
  { value: "health-care-practice", title: "健康護理實務" },
  { value: "medical-laboratory-science", title: "醫務化驗科學" },
  { value: "rehabilitation-care-practice", title: "復康護理實務" },
  { value: "applied-psychology", title: "應用心理學" },
  { value: "practical-psychology", title: "實用心理學" },
  { value: "exercise-science-and-health-fitness", title: "運動科學及體適能" },
  { value: "sports-and-fitness-coaching", title: "運動及體適能教練" },
  { value: "constructing-smart-cities", title: "建構智慧城市" },
  { value: "electrical-and-energy-engineering", title: "電機及能源工程" },
  { value: "computer-forensic-technology", title: "電腦鑑證科技" },
  { value: "esports-technology", title: "電競科技" },
  { value: "tech-basics", title: "資訊科技棈要" },
  { value: "aviation-studies", title: "航空學" },
  { value: "railway-studies", title: "鐵路學" },
  { value: "english-communication", title: "英文傳意" },
  { value: "english-for-service-professionals", title: "服務業專業英語" },
  { value: "chinese-in-business-service", title: "商業服務中文" },
  { value: "chinese-in-practical-context", title: "實用情境中文" },
  { value: "practical-chinese", title: "實務中文" }
]

const CategoryC = [
  { value: "french", title: "法語" },
  { value: "german", title: "德語" },
  { value: "japanese", title: "日語" },
  { value: "spanish", title: "西班牙語" },
  { value: "hindi", title: "印地語" },
  { value: "urdu", title: "烏爾都語" }
]
// { value: "7", title: "" },
// const dseSubjects = [
//   {
//     CategoryA: [
//       { value: "chinese-language", title: "中國語文" },
//       { value: "English Language", title: "英國語文" },
//       { value: "mathematics-compulsory-part", title: "數學必修部分" },
//       { value: "citizenship-and-social-development", title: "公民與社會發展" },
//       { value: "liberal-studies", title: "通識教育" },
//       { value: "biology", title: "生物" },
//       { value: "chemistry", title: "化學" },
//       { value: "economics", title: "經濟" },
//       {
//         value: "business-accounting-and-financial-studies",
//         title: "企業、會計與財務概論",
//       },
//       { value: "physics", title: "物理" },
//       { value: "geography", title: "地理" },
//       { value: "m1", title: "M1" },
//       { value: "m2", title: "M2" },
//       { value: "chinese-history", title: "中國歷史" },
//       {
//         value: "Information-and-communication-technology",
//         title: "資訊及通訊科技",
//       },
//       { value: "tourism-and-hospitality-studies", title: "旅遊與款待" },
//       { value: "visual-arts", title: "視覺藝術" },
//       { value: "chinese-literature", title: "中國文學" },
//       { value: "physical-education", title: "體育" },
//       {
//         value: "health-management-and-social-care",
//         title: "健康管理與社會關懷",
//       },
//       { value: "ethics-and-religious-studies", title: "倫理與宗教" },
//       { value: "design-and-applied-technology", title: "設計與應用科技" },
//       { value: "combined-science", title: "組合科學" },
//       { value: "literature-in-english", title: "英語文學" },
//       { value: "technology-and-living", title: "科技與生活" },
//       { value: "music", title: "音樂" },
//       { value: "integrated-science", title: "綜合科學" },
//       { value: "7", title: "" },
//     ],
//   },
// ];

export {
  //   dseSubjects,
  CategoryA,
  dseScore,
  admissionLevel,
  admissionType,
  admissionCondition,
  CategoryB,
  CategoryC
}
