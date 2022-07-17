import * as yup from "yup"
import { ERROR_FORM_MESSAGES } from "../errorMessages/form"
const TitleValidationSchema = yup
  .string()
  .max(20, ERROR_FORM_MESSAGES.TOO_LONG)
  .required("Required")

const RatingValidationSchema = yup.number().required("Required").nullable(true)

const SlectCommonValidationSchema = yup
  .string()
  .required("Required")
  .nullable(true)

const SalaryValidationSchema = yup
  .number()
  .min(0, ERROR_FORM_MESSAGES.SALARY_NEGATIVE)

export {
  TitleValidationSchema,
  RatingValidationSchema,
  SlectCommonValidationSchema,
  SalaryValidationSchema
}
