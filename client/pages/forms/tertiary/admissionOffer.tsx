import { Grid } from "@mui/material"
import { useFormik } from "formik"
import moment from "moment"
import React from "react"
import FormSumitButton from "../../../components/common/buttons/formSubmit"
import CommonToggleButtonGroup from "../../../components/common/groups/toggleButton/common"
import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import GpaNumberInput from "../../../components/common/inputs/number/gpa"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import BaseSelect from "../../../components/common/inputs/select"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import DseGradeSelect from "../../../components/common/inputs/select/dseGrade"
import DseSubjectsSelect from "../../../components/common/inputs/select/dseSubjects"
import SchoolTypeSelect from "../../../components/common/inputs/select/schoolType"
import BaseTextInput from "../../../components/common/inputs/text"
import TitleTextInput from "../../../components/common/inputs/text/title"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import InputContainer from "../../../components/containers/input"
import FormPageLayout from "../../../components/layouts/form"
import * as yup from "yup"
import {
  admissionCondition,
  admissionLevel,
  admissionType
} from "../../../constants/admission"

import { recommendRating } from "../../../constants/rating"
import { schoolTypeOptions } from "../../../constants/school"
import {
  DateValidationSchema,
  SlectCommonValidationSchema,
  TitleValidationSchema
} from "../../../utils/validation/form/schema"
import { ERROR_FORM_MESSAGES } from "../../../utils/validation/errorMessages/form"
import { ADMISSION_TYPE } from "../../../types/common"

import { ISystemActionTypes } from "../../../state/system/actions"
import InputHeader from "../../../components/common/header/input"
import { useEffect } from "react"
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import {
  admissionLevelTypesList,
  admissionOfferTypesList,
  applicationTypesList,
  DSEJupasChoicePriorityTypesList,
  schoolTypesList
} from "../../../constants/common"

const AdmissionOfferFormPage: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const initialValues = {
    schoolType: "",
    school: "",
    faculty: "",
    programme: "",
    title: "",
    offerDate: null,
    currentSchoolType: "",
    currentSchool: "",
    currentFaculty: "",
    currentProgramme: "",
    offerType: "",
    jupasBanding: "",
    admissionType: "",
    admissionLevel: "",
    gpa: null,
    desSubjectOne: "",
    desSubjectGradeOne: "",
    desSubjectTwo: "",
    desSubjectGradeTwo: "",
    desSubjectThree: "",
    desSubjectGradeThree: "",
    desSubjectFour: "",
    desSubjectGradeFour: "",
    desSubjectFive: "",
    desSubjectGradeFive: "",
    desSubjectSix: "",
    desSubjectGradeSix: "",
    contactMethod: "",
    contactDetail: "",
    isAnonymous: false,
    longQ: ""
  }

  const handleSubmit = () => {
    dispatch({ type: ISystemActionTypes.SYSTEM_IS_LOADING, payload: true })
  }

  const admissionOfferFormSchema = yup.object().shape({
    schoolType: SlectCommonValidationSchema,
    school: SlectCommonValidationSchema,
    faculty: SlectCommonValidationSchema,
    programme: SlectCommonValidationSchema,
    currentSchoolType: SlectCommonValidationSchema,
    currentSchool: SlectCommonValidationSchema,
    currentFaculty: SlectCommonValidationSchema,
    currentProgramme: SlectCommonValidationSchema,
    // applicaiotnType: SlectCommonValidationSchema,
    offerDate: DateValidationSchema,
    offerType: SlectCommonValidationSchema,
    admissionType: SlectCommonValidationSchema,
    admissionLevel: SlectCommonValidationSchema,
    gpa: yup
      .number()
      .min(0, ERROR_FORM_MESSAGES.GPA_NEGATIVE)
      .max(4.3, ERROR_FORM_MESSAGES.GPA_TOO_LARGE)
      .when("admissionType", (admissionType, schema) => {
        if (
          admissionType === ADMISSION_TYPE.NON_JUPAS ||
          ADMISSION_TYPE.BACHELOR
        )
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectGradeOne: yup
      .string()
      .when("desSubjectOne", (desSubjectOne, schema) => {
        if (desSubjectOne) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),

    desSubjectGradeTwo: yup
      .string()
      .when("desSubjectTwo", (desSubjectTwo, schema) => {
        if (desSubjectTwo) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),

    desSubjectGradeThree: yup
      .string()
      .when("desSubjectThree", (desSubjectThree, schema) => {
        if (desSubjectThree)
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),

    desSubjectGradeFour: yup
      .string()
      .when("desSubjectFour", (desSubjectFour, schema) => {
        if (desSubjectFour) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),

    desSubjectGradeFive: yup
      .string()
      .when("desSubjectFive", (desSubjectFive, schema) => {
        if (desSubjectFive) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),

    desSubjectGradeSix: yup
      .string()
      .when("desSubjectSix", (desSubjectSix, schema) => {
        if (desSubjectSix) return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true)
  })
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: admissionOfferFormSchema
  })

  useEffect(() => {
    if (
      formik.values.admissionType === ADMISSION_TYPE.BACHELOR ||
      ADMISSION_TYPE.NON_JUPAS
    ) {
      formik.values.jupasBanding = ""
    }

    if (formik.values.admissionType === ADMISSION_TYPE.JUPAS) {
      formik.values.gpa = null
    }
  }, [formik.values.admissionType])

  return (
    <FormPageLayout
      title="入學情報"
      subTitle="可以提交多次入學情報"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
        <BaseSelect
          name="schoolType"
          items={schoolTypesList}
          selectId="schoolType"
          inputLabel="學校類型"
          selectValue={formik.values.schoolType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.schoolType}
          isTouched={formik.touched.schoolType}
          isRequired
        />

        <BaseSelect
          name="school"
          items={schoolTypesList}
          selectId="school"
          inputLabel="學校"
          selectValue={formik.values.school}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.school}
          isTouched={formik.touched.school}
          isRequired
        />

        <BaseSelect
          name="faculty"
          items={schoolTypesList}
          selectId="faculty"
          inputLabel="學院/分類"
          selectValue={formik.values.faculty}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.faculty}
          isTouched={formik.touched.faculty}
          isRequired
        />

        <BaseSelect
          name="programme"
          items={schoolTypesList}
          selectId="programme"
          inputLabel="課程"
          selectValue={formik.values.programme}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.programme}
          isTouched={formik.touched.programme}
          isRequired
        />
      </div>
      <InputContainer header="最近的教育程度/狀態">
        <div className="grid md:grid-cols-4 md:gap-x-9  gap-y-2 mt-2">
          <BaseSelect
            items={schoolTypesList}
            name="currentSchoolType"
            selectId="currentSchoolType"
            inputLabel="學校類型/學習狀態"
            selectValue={formik.values.currentSchoolType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.currentSchoolType}
            isTouched={formik.touched.currentSchoolType}
            isRequired
          />
          <BaseSelect
            name="currentSchool"
            items={schoolTypesList}
            selectId="currentSchool"
            inputLabel="學校"
            selectValue={formik.values.currentSchool}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.currentSchool}
            isTouched={formik.touched.currentSchool}
            isRequired
          />

          <BaseSelect
            name="currentFaculty"
            items={schoolTypesList}
            selectId="currentFaculty"
            inputLabel="學院/分類"
            selectValue={formik.values.currentFaculty}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.currentFaculty}
            isTouched={formik.touched.currentFaculty}
            isRequired
          />

          <BaseSelect
            name="currentProgramme"
            items={schoolTypesList}
            selectId="currentProgramme"
            inputLabel="課程"
            selectValue={formik.values.currentProgramme}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.currentProgramme}
            isTouched={formik.touched.currentProgramme}
            isRequired
          />
        </div>
      </InputContainer>
      <div className="grid md:grid-cols-4 md:gap-x-9   gap-y-2">
        <div className="grid md:col-span-2">
          <TitleTextInput
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.title}
            isTouched={formik.touched.title}
            // style={{ width: "100%" }}
            isRequired
          />
        </div>

        <BaseDatePicker
          label="收Offer日期"
          value={formik.values.offerDate}
          onChange={(newValue: any) => {
            formik.setFieldValue(
              "offerDate",
              moment(newValue).format("YYYY-MM-DD")
            )
          }}
          errorMessages={formik.errors.offerDate}
          isTouched={formik.touched.offerDate}
          helpText="只會顯示MM/YYYY"
        />
        <BaseSelect
          name="admissionLevel"
          items={admissionLevelTypesList}
          selectId="admissionLevel"
          inputLabel="入學年級"
          selectValue={formik.values.admissionLevel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.admissionLevel}
          isTouched={formik.touched.admissionLevel}
          isRequired
        />
      </div>
      {/* 
  <div className="flex flex-wrap flex-row justify-center items-center gap-x-10 gap-y-5"> */}

      <div className="grid  md:grid-cols-4  md:gap-x-9 md:items-end gap-y-2">
        <BaseSelect
          name="admissionType"
          items={applicationTypesList}
          selectId="admissionType"
          inputLabel="入學類型"
          selectValue={formik.values.admissionType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.admissionType}
          isTouched={formik.touched.admissionType}
          isRequired
        />
        <BaseSelect
          name="jupasBanding"
          items={DSEJupasChoicePriorityTypesList}
          selectId="jupasBanding"
          inputLabel="Jupas志願排名"
          selectValue={formik.values.jupasBanding}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.jupasBanding}
          isTouched={formik.touched.jupasBanding}
          disabled={
            formik.values.admissionType === ADMISSION_TYPE.NON_JUPAS ||
            formik.values.admissionType === ADMISSION_TYPE.BACHELOR ||
            formik.values.admissionType === ""
          }
        />

        <BaseSelect
          name="offerType"
          items={admissionOfferTypesList}
          selectId="offerType"
          inputLabel="Offer類型"
          selectValue={formik.values.offerType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.offerType}
          isTouched={formik.touched.offerType}
          isRequired
        />

        <GpaNumberInput
          value={formik.values.gpa}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.gpa}
          isTouched={formik.touched.gpa}
          disabled={
            formik.values.admissionType === ADMISSION_TYPE.JUPAS ||
            formik.values.admissionType === ""
          }
          // helpText="Non-Jupas/學士請填寫"
        />
      </div>

      {/* <InputContainer
          header="DSE results (if applicable)"
          subHeader="Please at least enter best 5 subjects"
        > */}
      <div className="flex flex-row justify-between items-center">
        <InputHeader
          header="DSE results (if applicable)"
          subHeader="Please at least enter best 5 subjects"
        />
        <div>
          <p className="text-md font-bold">{"Best 5: 34"}</p>
          <p className="text-md font-bold">{"Best 6: 32"}</p>
        </div>
      </div>

      <div className="grid  grid-cols-3 md:grid-cols-4 md:gap-x-9 gap-y-2">
        <div className="grid col-span-2 md:col-span-1">
          <DseSubjectsSelect
            inputLabel="科目一"
            name="desSubjectOne"
            selectId="desSubjectOne"
            selectValue={formik.values.desSubjectOne}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.desSubjectOne}
            isTouched={formik.touched.desSubjectOne}
          />
        </div>

        <div className="grid col-span-1">
          <DseGradeSelect
            name="desSubjectGradeOne"
            selectId="desSubjectGradeOne"
            selectValue={formik.values.desSubjectGradeOne}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.desSubjectGradeOne}
            isTouched={formik.touched.desSubjectGradeOne}
            disabled={!!!formik.values.desSubjectOne}
          />
        </div>

        <div className="grid col-span-2 md:col-span-1">
          <DseSubjectsSelect
            inputLabel="科目二"
            name="desSubjectTwo"
            selectId="desSubjectTwo"
            selectValue={formik.values.desSubjectTwo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.desSubjectTwo}
            isTouched={formik.touched.desSubjectTwo}
          />
        </div>

        <DseGradeSelect
          name="desSubjectGradeTwo"
          selectId="desSubjectGradeTwo"
          selectValue={formik.values.desSubjectGradeTwo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.desSubjectGradeTwo}
          isTouched={formik.touched.desSubjectGradeTwo}
          disabled={!!!formik.values.desSubjectTwo}
        />
        <div className="grid col-span-2 md:col-span-1">
          <DseSubjectsSelect
            inputLabel="科學三"
            name="desSubjectThree"
            selectId="desSubjectThree"
            selectValue={formik.values.desSubjectThree}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.desSubjectThree}
            isTouched={formik.touched.desSubjectThree}
          />
        </div>
        <DseGradeSelect
          name="desSubjectGradeThree"
          selectId="desSubjectGradeThree"
          selectValue={formik.values.desSubjectGradeThree}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.desSubjectGradeThree}
          isTouched={formik.touched.desSubjectGradeThree}
          disabled={!!!formik.values.desSubjectThree}
        />
        <div className="grid col-span-2 md:col-span-1">
          <DseSubjectsSelect
            inputLabel="科目四"
            name="desSubjectFour"
            selectId="desSubjectFour"
            selectValue={formik.values.desSubjectFour}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.desSubjectFour}
            isTouched={formik.touched.desSubjectFour}
          />
        </div>
        <DseGradeSelect
          name="desSubjectGradeFour"
          selectId="desSubjectGradeFour"
          selectValue={formik.values.desSubjectGradeFour}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.desSubjectGradeFour}
          isTouched={formik.touched.desSubjectGradeFour}
          disabled={!!!formik.values.desSubjectFour}
        />
        <div className="grid col-span-2 md:col-span-1">
          <DseSubjectsSelect
            inputLabel="科目五"
            name="desSubjectFive"
            selectId="desSubjectFive"
            selectValue={formik.values.desSubjectFive}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.desSubjectFive}
            isTouched={formik.touched.desSubjectFive}
          />
        </div>
        <DseGradeSelect
          name="desSubjectGradeFive"
          selectId="desSubjectGradeFive"
          selectValue={formik.values.desSubjectGradeFive}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.desSubjectGradeFive}
          isTouched={formik.touched.desSubjectGradeSix}
          disabled={!!!formik.values.desSubjectFive}
        />

        <div className="grid col-span-2 md:col-span-1">
          <DseSubjectsSelect
            inputLabel="科目六"
            name="desSubjectSix"
            selectId="desSubjectSix"
            selectValue={formik.values.desSubjectSix}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.desSubjectSix}
            isTouched={formik.touched.desSubjectSix}
          />
        </div>
        <DseGradeSelect
          name="desSubjectGradeSix"
          selectId="desSubjectGradeSix"
          selectValue={formik.values.desSubjectGradeSix}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.desSubjectGradeSix}
          isTouched={formik.touched.desSubjectGradeSix}
          disabled={!!!formik.values.desSubjectSix}
        />
      </div>

      {/* </InputContainer> */}

      <InputContainer
        header="聯絡資訊"
        subHeader="有疑問者可以直接搵你了解詳情"
      >
        <div className="grid   md:grid-cols-4  md:gap-x-9 md:items-end gap-y-2 mt-2">
          <div className="grid  md:col-span-1">
            <ContactSelect
              name="contactMethod"
              selectId="contactMethod"
              inputLabel="聯絡方式"
              selectValue={formik.values.contactMethod}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.contactMethod}
              isTouched={formik.touched.contactMethod}
            />
          </div>
          <div className="md:col-span-3 ">
            <BaseTextInput
              label="Email/電話號碼/Username"
              name="contactDetail"
              value={formik.values.contactDetail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.contactDetail}
              isTouched={formik.touched.contactDetail}
              disabled={formik.values.contactMethod === ""}
            />
          </div>
        </div>
      </InputContainer>

      <AnonymousSwitch
        className="ml-8"
        value={formik.values.isAnonymous}
        onChange={formik.handleChange}
      />
      <h1 className="font-black ml-6">Long Question</h1>
      <LongQuestionsSection
        name="longQ"
        header="HWta doasdasdoin thabtp oandiosanidoans"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />
    </FormPageLayout>
  )
}

export default AdmissionOfferFormPage
