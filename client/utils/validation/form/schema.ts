import * as yup from "yup"
import { ERROR_FORM_MESSAGES } from "../errorMessages/form"
const TitleValidationSchema = yup
  .string()
  .max(20, ERROR_FORM_MESSAGES.TOO_LONG)
  .required("必須填寫")

const RatingValidationSchema = yup.number().required("必須選擇").nullable(true)

const DateValidationSchema = yup.date().required("必須填寫").nullable(true)

const longQuestionValidationSchema = yup
  .string()
  .max(3000, ERROR_FORM_MESSAGES.TOO_LONG)

const SlectCommonValidationSchema = yup
  .string()
  .required("必須選擇")
  .nullable(true)

const SalaryValidationSchema = yup
  .number()
  .min(0, ERROR_FORM_MESSAGES.SALARY_NEGATIVE)

export {
  TitleValidationSchema,
  RatingValidationSchema,
  SlectCommonValidationSchema,
  SalaryValidationSchema,
  DateValidationSchema,
  longQuestionValidationSchema
}
