import * as yup from "yup"
import {
  ApplicationTypeId,
  ContactMethodTypeId,
  CurrentSchoolTypeId
} from "../../../types/common"
import { ERROR_FORM_MESSAGES } from "../errorMessages/form"
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const titleValidationSchema = yup
  .string()
  .max(25, ERROR_FORM_MESSAGES.TOO_LONG)
  .required("必須填寫")

const ratingValidationSchema = yup.string().required("必須選擇").nullable(true)

const dateValidationSchema = yup.date().required("必須填寫").nullable(true)

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
        .max(30, ERROR_FORM_MESSAGES.TOO_LONG)
    else if (
      contactMethod === ContactMethodTypeId.SIGNAL ||
      contactMethod === ContactMethodTypeId.WHATSAPP
    )
      return yup
        .string()
        .matches(phoneRegExp, ERROR_FORM_MESSAGES.NOT_A_VALID_PHONE_NUMBER)
        .required(ERROR_FORM_MESSAGES.REQUIRED)
        .max(30, ERROR_FORM_MESSAGES.TOO_LONG)
    else return yup.string().max(30, ERROR_FORM_MESSAGES.TOO_LONG).nullable()
  })

const selectCommonValidationSchema = yup
  .string()
  .required("必須選擇")
  .nullable(true)

const currentSchoolValidationSchema = yup
  .number()
  .when("currentSchoolType", (currentSchoolType, schema) => {
    if (
      currentSchoolType == CurrentSchoolTypeId.UNIVERSITY ||
      currentSchoolType == CurrentSchoolTypeId.COLLEGE
    )
      return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
  })
  .nullable()

const currentFacultyValidationSchema = currentSchoolValidationSchema

const currentProgrammeValidationSchema = currentSchoolValidationSchema

const yearOfStudyValidationSchema = currentSchoolValidationSchema

//dse
const dseSubjectOneValidationSchema = yup
  .number()
  .test(
    "dseSubjectOneValidation",
    "Check subject duplication",
    (value, validationContext) => {
      const {
        createError,
        parent: {
          dseSubjectOne,
          dseSubjectTwo,
          dseSubjectThree,
          dseSubjectFour,
          dseSubjectFive,
          dseSubjectSix
        }
      } = validationContext as any

      const subjects = [
        dseSubjectTwo,
        dseSubjectThree,
        dseSubjectFour,
        dseSubjectFive,
        dseSubjectSix
      ]

      for (let i = 0; i < subjects.length; i++) {
        if (dseSubjectOne == subjects[i] && subjects[i] !== null) {
          return createError({
            message: ERROR_FORM_MESSAGES.NOT_SUBJECT_DUPLICATION
          })
        }
      }
      return true
    }
  )
  .nullable()

const dseSubjectTwoValidationSchema = yup
  .number()
  .test(
    "dseSubjectTwoValidation",
    "Check subject duplication",
    (value, validationContext) => {
      const {
        createError,
        parent: {
          dseSubjectOne,
          dseSubjectTwo,
          dseSubjectThree,
          dseSubjectFour,
          dseSubjectFive,
          dseSubjectSix
        }
      } = validationContext as any

      const subjects = [
        dseSubjectOne,
        dseSubjectThree,
        dseSubjectFour,
        dseSubjectFive,
        dseSubjectSix
      ]

      for (let i = 0; i < subjects.length; i++) {
        if (dseSubjectTwo == subjects[i] && subjects[i] !== null) {
          return createError({
            message: ERROR_FORM_MESSAGES.NOT_SUBJECT_DUPLICATION
          })
        }
      }
      return true
    }
  )
  .nullable()

//subject three

const dseSubjectThreeValidationSchema = yup
  .number()
  .test(
    "dseSubjectThreeValidation",
    "Check subject duplication",
    (value, validationContext) => {
      const {
        createError,
        parent: {
          dseSubjectOne,
          dseSubjectTwo,
          dseSubjectThree,
          dseSubjectFour,
          dseSubjectFive,
          dseSubjectSix
        }
      } = validationContext as any

      const subjects = [
        dseSubjectOne,
        dseSubjectTwo,
        dseSubjectFour,
        dseSubjectFive,
        dseSubjectSix
      ]

      for (let i = 0; i < subjects.length; i++) {
        if (dseSubjectThree == subjects[i] && subjects[i] !== null) {
          return createError({
            message: ERROR_FORM_MESSAGES.NOT_SUBJECT_DUPLICATION
          })
        }
      }
      return true
    }
  )
  .nullable()
//subject four
const dseSubjectFourValidationSchema = yup
  .number()
  .test(
    "dseSubjectFourValidation",
    "Check subject duplication",
    (value, validationContext) => {
      const {
        createError,
        parent: {
          dseSubjectOne,
          dseSubjectTwo,
          dseSubjectThree,
          dseSubjectFour,
          dseSubjectFive,
          dseSubjectSix
        }
      } = validationContext as any

      const subjects = [
        dseSubjectOne,
        dseSubjectTwo,
        dseSubjectThree,
        dseSubjectFive,
        dseSubjectSix
      ]

      for (let i = 0; i < subjects.length; i++) {
        if (dseSubjectFour == subjects[i] && subjects[i] !== null) {
          return createError({
            message: ERROR_FORM_MESSAGES.NOT_SUBJECT_DUPLICATION
          })
        }
      }
      return true
    }
  )
  .nullable()
//subject five

const dseSubjectFiveValidationSchema = yup
  .number()
  .test(
    "dseSubjectFiveValidation",
    "Check subject duplication",
    (value, validationContext) => {
      const {
        createError,
        parent: {
          dseSubjectOne,
          dseSubjectTwo,
          dseSubjectThree,
          dseSubjectFour,
          dseSubjectFive,
          dseSubjectSix
        }
      } = validationContext as any

      const subjects = [
        dseSubjectOne,
        dseSubjectTwo,
        dseSubjectThree,
        dseSubjectFour,

        dseSubjectSix
      ]

      for (let i = 0; i < subjects.length; i++) {
        if (dseSubjectFive == subjects[i] && subjects[i] !== null) {
          return createError({
            message: ERROR_FORM_MESSAGES.NOT_SUBJECT_DUPLICATION
          })
        }
      }
      return true
    }
  )
  .nullable()
//subject six

const dseSubjectSixValidationSchema = yup
  .number()
  .test(
    "dseSubjectSixValidation",
    "Check subject duplication",
    (value, validationContext) => {
      const {
        createError,
        parent: {
          dseSubjectOne,
          dseSubjectTwo,
          dseSubjectThree,
          dseSubjectFour,
          dseSubjectFive,
          dseSubjectSix
        }
      } = validationContext as any

      const subjects = [
        dseSubjectOne,
        dseSubjectTwo,
        dseSubjectThree,
        dseSubjectFour,
        dseSubjectFive
      ]

      for (let i = 0; i < subjects.length; i++) {
        if (dseSubjectSix == subjects[i] && subjects[i] !== null) {
          return createError({
            message: ERROR_FORM_MESSAGES.NOT_SUBJECT_DUPLICATION
          })
        }
      }
      return true
    }
  )
  .nullable()

// dse grade
const dseSubjectGradeOneValidationSchema = yup
  .string()
  .when("dseSubjectOne", (dseSubjectOne, schema) => {
    if (dseSubjectOne) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
  })
  .nullable(true)

const dseSubjectGradeTwoValidationSchema = yup
  .string()
  .when("dseSubjectTwo", (dseSubjectTwo, schema) => {
    if (dseSubjectTwo) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
  })
  .nullable(true)

const dseSubjectGradeThreeValidationSchema = yup
  .string()
  .when("dseSubjectThree", (dseSubjectThree, schema) => {
    if (dseSubjectThree) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
  })
  .nullable(true)
const dseSubjectGradeFourValidationSchema = yup
  .string()
  .when("dseSubjectFour", (dseSubjectFour, schema) => {
    if (dseSubjectFour) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
  })
  .nullable(true)
const dseSubjectGradeFiveValidationSchema = yup
  .string()
  .when("dseSubjectFive", (dseSubjectFive, schema) => {
    if (dseSubjectFive) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
  })
  .nullable(true)
const dseSubjectGradeSixValidationSchema = yup
  .string()
  .when("dseSubjectSix", (dseSubjectSix, schema) => {
    if (dseSubjectSix) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
  })
  .nullable(true)

//gpa

const gpaCommonValidationSchema = yup
  .number()
  .min(0, ERROR_FORM_MESSAGES.GPA_NEGATIVE)
  .max(4.3, ERROR_FORM_MESSAGES.GPA_TOO_LARGE)
  .nullable(true)

const gpaCheckApplicationTypeValidationSchema = gpaCommonValidationSchema.when(
  "applicationType",
  (applicationType, schema) => {
    if (
      applicationType == ApplicationTypeId.NON_JUPAS ||
      applicationType == ApplicationTypeId.BACHELOR
    )
      return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
  }
)

const SalaryValidationSchema = yup
  .number()
  .min(0, ERROR_FORM_MESSAGES.SALARY_NEGATIVE)

export {
  titleValidationSchema,
  ratingValidationSchema,
  selectCommonValidationSchema,
  SalaryValidationSchema,
  dateValidationSchema,
  longQuestionValidationSchema,
  contactDetailValidationSchema,
  currentSchoolValidationSchema,
  currentFacultyValidationSchema,
  currentProgrammeValidationSchema,
  yearOfStudyValidationSchema,
  dseSubjectOneValidationSchema,
  dseSubjectTwoValidationSchema,
  dseSubjectThreeValidationSchema,
  dseSubjectFourValidationSchema,
  dseSubjectFiveValidationSchema,
  dseSubjectSixValidationSchema,
  dseSubjectGradeOneValidationSchema,
  dseSubjectGradeTwoValidationSchema,
  dseSubjectGradeThreeValidationSchema,
  dseSubjectGradeFourValidationSchema,
  dseSubjectGradeFiveValidationSchema,
  dseSubjectGradeSixValidationSchema,
  gpaCommonValidationSchema,
  gpaCheckApplicationTypeValidationSchema
}
