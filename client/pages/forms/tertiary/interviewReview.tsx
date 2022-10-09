import { useFormik } from "formik"
import { NextPage } from "next"
import React, { useEffect } from "react"
import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import GpaNumberInput from "../../../components/common/inputs/number/gpa"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import BaseSelect from "../../../components/common/inputs/select"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import DseGradeSelect from "../../../components/common/inputs/select/dseGrade"
import DseSubjectsSelect from "../../../components/common/inputs/select/dseSubjects"
import BaseTextInput from "../../../components/common/inputs/text"
import TitleTextInput from "../../../components/common/inputs/text/title"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import InputContainer from "../../../components/containers/input"
import FormPageLayout from "../../../components/layouts/form"

import {
  dressCodeTypesList,
  schoolTypesList,
  applicationTypesList
} from "../../../constants/common"

import {
  InterviewDifficultyRating,
  InterviewExperienceRating
} from "../../../constants/rating"
import * as yup from "yup"
import {
  DateValidationSchema,
  longQuestionValidationSchema,
  RatingValidationSchema,
  SlectCommonValidationSchema,
  TitleValidationSchema
} from "../../../utils/validation/form/schema"
import { ERROR_FORM_MESSAGES } from "../../../utils/validation/errorMessages/form"
import { ADMISSION_TYPE, ApplicationTypeId } from "../../../types/common"
import InputHeader from "../../../components/common/header/input"
import { interviewReviewLongQuestionsMapper } from "../../../mappers/longQuestion"
import dayjs from "dayjs"

const InterviewReviewPage: NextPage = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    faculty: "",
    programme: "",
    title: "",
    interviewDate: null,
    currentSchoolType: "",
    currentSchool: "",
    currentFaculty: "",
    currentProgramme: "",
    academicStatus: "",
    exprience: 0,
    difficulty: 0,
    dressCode: "",
    gpa: "",
    admissionType: null,
    desSubjectOne: null,
    desSubjectGradeOne: null,
    desSubjectTwo: null,
    desSubjectGradeTwo: null,
    desSubjectThree: null,
    desSubjectGradeThree: null,
    desSubjectFour: null,
    desSubjectGradeFour: null,
    desSubjectFive: null,
    desSubjectGradeFive: null,
    desSubjectSix: null,
    desSubjectGradeSix: null,
    contactMethod: null,
    contactDetail: null,
    isAnonymous: false,
    longQOne: "",
    longQTwo: "",
    longQThree: "",
    longQFour: "",
    longQFive: "",
    longQSix: "",
    longQSeven: ""
  }

  const handleSubmit = () => {
    console.log("sumit")
  }

  const interviewReviewFormSchema = yup.object().shape({
    schoolType: SlectCommonValidationSchema,
    school: SlectCommonValidationSchema,
    faculty: SlectCommonValidationSchema,
    programme: SlectCommonValidationSchema,
    title: TitleValidationSchema,
    interviewDate: DateValidationSchema,
    exprience: RatingValidationSchema,
    difficulty: RatingValidationSchema,
    currentSchoolType: SlectCommonValidationSchema,
    currentSchool: SlectCommonValidationSchema,
    currentFaculty: SlectCommonValidationSchema,
    currentProgramme: SlectCommonValidationSchema,
    admissionType: SlectCommonValidationSchema,
    longQOne: longQuestionValidationSchema,
    longQTwo: longQuestionValidationSchema,
    longQThree: longQuestionValidationSchema,
    longQFour: longQuestionValidationSchema,
    longQFive: longQuestionValidationSchema,
    longQSix: longQuestionValidationSchema,
    longQSeven: longQuestionValidationSchema,

    gpa: yup
      .number()
      .min(0, ERROR_FORM_MESSAGES.GPA_NEGATIVE)
      .max(4.3, ERROR_FORM_MESSAGES.GPA_TOO_LARGE)
      .when("applicaiotnType", (applicaiotnType, schema) => {
        if (applicaiotnType === ADMISSION_TYPE.NON_JUPAS)
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectOne: yup
      .string()
      .when("admissionType", (admissionType, schema) => {
        if (admissionType == ApplicationTypeId.JUPAS)
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectTwo: yup
      .string()
      .when("admissionType", (admissionType, schema) => {
        if (admissionType == ApplicationTypeId.JUPAS)
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectThree: yup
      .string()
      .when("admissionType", (admissionType, schema) => {
        if (admissionType == ApplicationTypeId.JUPAS)
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectFour: yup
      .string()
      .when("admissionType", (admissionType, schema) => {
        if (admissionType == ApplicationTypeId.JUPAS)
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectFive: yup
      .string()
      .when("admissionType", (admissionType, schema) => {
        if (admissionType == ApplicationTypeId.JUPAS)
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
    validationSchema: interviewReviewFormSchema
  })

  useEffect(() => {
    if (formik.values.admissionType === ApplicationTypeId.JUPAS) {
      formik.values.gpa = ""
    }
  }, [formik.values.admissionType])

  return (
    <FormPageLayout
      title="面試情報"
      subTitle="可以提交多次面試情報"
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
            inputLabel="學校類型/學業狀態"
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
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-9 gap-y-2">
        <div className="col-span-3">
          <TitleTextInput
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.title}
            isTouched={formik.touched.title}
            valueLength={formik.values.title.length}
            maxLength={25}
            // style={{ width: "100%" }}
          />
        </div>

        <div className="grid">
          <BaseDatePicker
            label="面試日期"
            value={formik.values.interviewDate}
            onChange={(newValue: any) => {
              formik.setFieldValue(
                "interviewDate",
                dayjs(newValue).format("YYYY-MM-DD")
              )
            }}
            errorMessages={formik.errors.interviewDate}
            isTouched={formik.touched.interviewDate}
            helpText="只會顯示MM/YYYY"
            // format="DD/MM/YYYY"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-6 justify-center items-center">
        <RatingToggleButtonGroup
          id="exprience"
          value={formik.values.exprience}
          onChange={formik.handleChange}
          ratingTitle={InterviewExperienceRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.exprience}
          isTouched={formik.touched.exprience}
          header="面試體驗"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="difficulty"
          value={formik.values.difficulty}
          onChange={formik.handleChange}
          ratingTitle={InterviewDifficultyRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.difficulty}
          isTouched={formik.touched.difficulty}
          header="面試難度"
          headerRequired={true}
        />
      </div>

      <div className="grid  md:grid-cols-4 md:gap-x-9 gap-y-2">
        <BaseSelect
          name="dressCode"
          items={dressCodeTypesList}
          selectId="dressCode"
          inputLabel="衣著要求(Dress Code)"
          selectValue={formik.values.dressCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.dressCode}
          isTouched={formik.touched.dressCode}
        />
        <BaseSelect
          name="admissionType"
          items={applicationTypesList}
          selectId="admissionType"
          inputLabel="類型"
          selectValue={formik.values.admissionType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.admissionType}
          isTouched={formik.touched.admissionType}
          isRequired
        />

        <GpaNumberInput
          value={formik.values.gpa}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.gpa}
          isTouched={formik.touched.gpa}
          disabled={
            formik.values.admissionType === ApplicationTypeId.JUPAS ||
            formik.values.admissionType === null
          }
          helpText="Non-Jupas/學士請填寫"
        />
      </div>

      <InputContainer header="DSE成績" subHeader="請至少填寫五科成績 (Best 5)">
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
      </InputContainer>

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

      <InputHeader
        header="詳細問題 !"
        headerClassName="text-2xl font-black"
        subHeader="內容愈詳盡愈能夠幫到其他人，歡迎大家寫千字文！！！"
        subHeaderClassName="text-base"
      />
      <LongQuestionsSection
        name="longQOne"
        header={interviewReviewLongQuestionsMapper[1].question}
        value={formik.values.longQOne}
        valueLength={formik.values.longQOne.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQOne}
        isTouched={formik.touched.longQOne}
      />

      <LongQuestionsSection
        name="longQTwo"
        header={interviewReviewLongQuestionsMapper[2].question}
        value={formik.values.longQTwo}
        valueLength={formik.values.longQTwo.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQTwo}
        isTouched={formik.touched.longQTwo}
      />

      <LongQuestionsSection
        name="longQThree"
        header={interviewReviewLongQuestionsMapper[3].question}
        value={formik.values.longQThree}
        valueLength={formik.values.longQThree.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQThree}
        isTouched={formik.touched.longQThree}
      />

      <LongQuestionsSection
        name="longQFour"
        header={interviewReviewLongQuestionsMapper[4].question}
        placeholder="個人/小組？題目內容？面試咗幾耐？"
        value={formik.values.longQFour}
        valueLength={formik.values.longQFour.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQFour}
        isTouched={formik.touched.longQFour}
      />

      <LongQuestionsSection
        name="longQFive"
        header={interviewReviewLongQuestionsMapper[5].question}
        placeholder="例如:入學準備/選課策略"
        value={formik.values.longQFive}
        valueLength={formik.values.longQFive.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQFive}
        isTouched={formik.touched.longQFive}
      />

      <LongQuestionsSection
        name="longQSix"
        header={interviewReviewLongQuestionsMapper[6].question}
        placeholder={``}
        value={formik.values.longQSix}
        valueLength={formik.values.longQSix.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQSix}
        isTouched={formik.touched.longQSix}
      />

      <LongQuestionsSection
        name="longQSeven"
        header={interviewReviewLongQuestionsMapper[7].question}
        placeholder={``}
        value={formik.values.longQSeven}
        valueLength={formik.values.longQSeven.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQSeven}
        isTouched={formik.touched.longQSeven}
      />
    </FormPageLayout>
  )
}
export default InterviewReviewPage
