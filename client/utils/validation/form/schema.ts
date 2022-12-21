import * as yup from "yup"
import { ContactMethodTypeId } from "../../../types/common"
import { ERROR_FORM_MESSAGES } from "../errorMessages/form"
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const TitleValidationSchema = yup
  .string()
  .max(25, ERROR_FORM_MESSAGES.TOO_LONG)
  .required("必須填寫")

const RatingValidationSchema = yup.number().required("必須選擇").nullable(true)

const DateValidationSchema = yup.date().required("必須填寫").nullable(true)

const longQuestionValidationSchema = yup
  .string()
  .max(3000, ERROR_FORM_MESSAGES.TOO_LONG)

const contactDetailValidationSchema = yup
  .string()
  .when("contactMethod", (contactMethod, schema) => {
    if (contactMethod === ContactMethodTypeId.EMAIL)
      return yup
        .string()
        .email(ERROR_FORM_MESSAGES.NOT_A_VALID_EMAIL)
        .required(ERROR_FORM_MESSAGES.REQUIRED)
    else if (
      contactMethod === ContactMethodTypeId.SIGNAL ||
      contactMethod === ContactMethodTypeId.WHATSAPP
    )
      return yup
        .string()
        .matches(phoneRegExp, ERROR_FORM_MESSAGES.NOT_A_VALID_PHONE_NUMBER)
        .required(ERROR_FORM_MESSAGES.REQUIRED)
    else return yup.string()
  })
  .nullable(true)

const SelectCommonValidationSchema = yup
  .string()
  .required("必須選擇")
  .nullable(true)

const SalaryValidationSchema = yup
  .number()
  .min(0, ERROR_FORM_MESSAGES.SALARY_NEGATIVE)

export {
  TitleValidationSchema,
  RatingValidationSchema,
  SelectCommonValidationSchema,
  SalaryValidationSchema,
  DateValidationSchema,
  longQuestionValidationSchema,
  contactDetailValidationSchema
}
