import { useFormik } from "formik"
import React, { useState } from "react"

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
import * as yup from "yup"
import {
  DateValidationSchema,
  longQuestionValidationSchema,
  SelectCommonValidationSchema
} from "../../../utils/validation/form/schema"
import { ERROR_FORM_MESSAGES } from "../../../utils/validation/errorMessages/form"
import { ApplicationTypeId, CurrentSchoolTypeId } from "../../../types/common"

import { ISystemActionTypes } from "../../../state/system/actions"
import InputHeader from "../../../components/common/header/input"
import { useEffect } from "react"
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import {
  admissionLevelTypesList,
  admissionOfferTypesList,
  applicationTypesList,
  DSEJupasChoicePriorityTypesList,
  schoolTypesList,
  yearOfStudyTypesList,
  SITENAME,
  currentSchoolTypesList
} from "../../../constants/common"
import SEO from "../../../components/seo"

import { CommonHelpers } from "../../../helpers"
import { admissionOfferReviewLongQuestionsMapper } from "../../../mappers/longQuestion"
import dayjs from "dayjs"

const AdmissionOfferFormPage: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const initialValues = {
    schoolType: "",
    school: "",
    faculty: "",
    programme: "",
    title: "",
    offerDate: null,
    currentSchoolType: null,
    currentSchool: null,
    currentFaculty: null,
    currentProgramme: null,
    yearofStudy: null,
    offerType: "",
    jupasBanding: "",
    applicationType: undefined,
    admissionLevel: "",
    gpa: "",
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
    longQThree: ""
  }

  const handleSubmit = () => {
    console.log("Submit")
    // dispatch({ type: ISystemActionTypes.SYSTEM_IS_LOADING, payload: true })
  }

  const admissionOfferFormSchema = yup.object().shape({
    schoolType: SelectCommonValidationSchema,
    school: SelectCommonValidationSchema,
    faculty: SelectCommonValidationSchema,
    programme: SelectCommonValidationSchema,
    currentSchoolType: SelectCommonValidationSchema,
    currentSchool: yup
      .number()
      .when("currentSchoolType", (currentSchoolType, schema) => {
        if (
          currentSchoolType === CurrentSchoolTypeId.UNIVERSITY ||
          currentSchoolType === CurrentSchoolTypeId.COLLEGE
        )
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(),
    currentFaculty: yup
      .number()
      .when("currentSchoolType", (currentSchoolType, schema) => {
        if (
          currentSchoolType === CurrentSchoolTypeId.UNIVERSITY ||
          currentSchoolType === CurrentSchoolTypeId.COLLEGE
        )
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(),
    currentProgramme: yup
      .number()
      .when("currentSchoolType", (currentSchoolType, schema) => {
        if (
          currentSchoolType === CurrentSchoolTypeId.UNIVERSITY ||
          currentSchoolType === CurrentSchoolTypeId.COLLEGE
        )
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(),
    yearofStudy: yup
      .number()
      .when("currentSchoolType", (currentSchoolType, schema) => {
        if (
          currentSchoolType === CurrentSchoolTypeId.UNIVERSITY ||
          currentSchoolType === CurrentSchoolTypeId.COLLEGE
        )
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(),
    offerDate: DateValidationSchema,
    offerType: SelectCommonValidationSchema,
    applicationType: SelectCommonValidationSchema,
    admissionLevel: SelectCommonValidationSchema,
    longQOne: longQuestionValidationSchema,
    longQTwo: longQuestionValidationSchema,
    longQThree: longQuestionValidationSchema,
    gpa: yup
      .number()
      .min(0, ERROR_FORM_MESSAGES.GPA_NEGATIVE)
      .max(4.3, ERROR_FORM_MESSAGES.GPA_TOO_LARGE)
      .when("applicationType", (applicationType, schema) => {
        if (
          applicationType == ApplicationTypeId.NON_JUPAS ||
          applicationType == ApplicationTypeId.BACHELOR
        )
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectOne: yup
      .string()
      .when("applicationType", (applicationType, schema) => {
        if (applicationType == ApplicationTypeId.JUPAS)
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectTwo: yup
      .string()
      .when("applicationType", (applicationType, schema) => {
        if (applicationType == ApplicationTypeId.JUPAS)
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectThree: yup
      .string()
      .when("applicationType", (applicationType, schema) => {
        if (applicationType == ApplicationTypeId.JUPAS)
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectFour: yup
      .string()
      .when("applicationType", (applicationType, schema) => {
        if (applicationType == ApplicationTypeId.JUPAS)
          return schema.required(ERROR_FORM_MESSAGES.REQUIRED)
      })
      .nullable(true),
    desSubjectFive: yup
      .string()
      .when("applicationType", (applicationType, schema) => {
        if (applicationType == ApplicationTypeId.JUPAS)
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
      formik.values.applicationType === ApplicationTypeId.BACHELOR ||
      ApplicationTypeId.NON_JUPAS
    ) {
      formik.values.jupasBanding = ""
    }

    if (formik.values.applicationType === ApplicationTypeId.JUPAS) {
      formik.values.gpa = ""
    }
  }, [formik.values.applicationType])
  // const gradeMeta = [
  //   formik.values.desSubjectGradeOne,
  //   formik.values.desSubjectGradeTwo,
  //   formik.values.desSubjectGradeThree,
  //   formik.values.desSubjectGradeFour,
  //   formik.values.desSubjectGradeFive,
  //   formik.values.desSubjectGradeSix
  // ]
  // useMemo(() => {

  // }, [])
  const [bestFive, setBestFive] = useState(0)
  const [bestSix, setBestSix] = useState<number | "/">(0)
  const [isInProgress, setIsInProgress] = useState(false)
  useEffect(() => {
    const res = CommonHelpers.DseGradeToScore([
      formik.values.desSubjectGradeOne,
      formik.values.desSubjectGradeTwo,
      formik.values.desSubjectGradeThree,
      formik.values.desSubjectGradeFour,
      formik.values.desSubjectGradeFive,
      formik.values.desSubjectGradeSix
    ])

    setBestFive(res.bestFiveScore)
    setBestSix(res.bestSixScore)
  }, [
    formik.values.desSubjectGradeOne,
    formik.values.desSubjectGradeTwo,
    formik.values.desSubjectGradeThree,
    formik.values.desSubjectGradeFour,
    formik.values.desSubjectGradeFive,
    formik.values.desSubjectGradeSix
  ])

  // console.log(123, formik.values.desSubjectGradeOne)

  const isNotTertiarySchool =
    formik.values.currentSchoolType == CurrentSchoolTypeId.SECONDARY_SCHOOL ||
    formik.values.currentSchoolType == CurrentSchoolTypeId.RETAKER ||
    formik.values.currentSchoolType === null

  useEffect(() => {
    if (isNotTertiarySchool) {
      formik.values.currentSchool = null
      formik.values.currentProgramme = null
      formik.values.currentFaculty = null
      formik.values.yearofStudy = null
    }
  }, [formik.values.currentSchoolType])
  return (
    <>
      <SEO
        title="填寫入學情報"
        description="分享你嘅入學分數，幫助其他莘莘學子！!"
        openGraph={{
          title: "填寫入學情報",
          description: "分享你嘅入學分數，幫助其他莘莘學子！！",
          site_name: SITENAME
        }}
      />

      <FormPageLayout
        title="入學情報"
        subTitle="可以提交多次入學情報"
        onSubmit={formik.handleSubmit}
        isInProgress={isInProgress}
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
          <div className="grid md:grid-cols-5 md:gap-x-9  gap-y-2 mt-2">
            <BaseSelect
              items={currentSchoolTypesList}
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
              disabled={isNotTertiarySchool}
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
              disabled={isNotTertiarySchool}
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

            <BaseSelect
              name="yearofStudy"
              items={yearOfStudyTypesList}
              selectId="yearofStudy"
              inputLabel="現時學業年級"
              selectValue={formik.values.yearofStudy}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.yearofStudy}
              isTouched={formik.touched.yearofStudy}
              isRequired
              disabled={isNotTertiarySchool}
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
              valueLength={formik.values.title.length}
              maxLength={25}
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
                dayjs(newValue).format("YYYY-MM-DD")
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

        <div className="grid  md:grid-cols-4  md:gap-x-9  gap-y-2">
          <BaseSelect
            name="applicationType"
            items={applicationTypesList}
            selectId="applicationType"
            inputLabel="入學類型"
            selectValue={formik.values.applicationType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.applicationType}
            isTouched={formik.touched.applicationType}
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
              formik.values.applicationType === ApplicationTypeId.NON_JUPAS ||
              formik.values.applicationType === ApplicationTypeId.BACHELOR ||
              formik.values.applicationType === ""
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
              formik.values.applicationType === ApplicationTypeId.JUPAS ||
              formik.values.applicationType === undefined
            }
            helpText="Non-Jupas/學士請填寫"
          />
        </div>

        <div className="flex flex-row justify-between items-center">
          <InputHeader
            header="DSE成績(如適用)"
            subHeader="請至少填寫五科成績 (Best 5)"
          />
          <div>
            <p className="text-md font-bold">{`Best 5: ${bestFive}`}</p>
            <p className="text-md font-bold">{`Best 6: ${bestSix}`}</p>
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
          header={admissionOfferReviewLongQuestionsMapper[1].question}
          placeholder="優點?缺點？對比其他offer？"
          value={formik.values.longQOne}
          valueLength={formik.values.longQOne.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQOne}
          isTouched={formik.touched.longQOne}
        />

        <LongQuestionsSection
          name="longQTwo"
          header={admissionOfferReviewLongQuestionsMapper[2].question}
          placeholder="優點?缺點？對比其他offer？"
          value={formik.values.longQTwo}
          valueLength={formik.values.longQTwo.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQTwo}
          isTouched={formik.touched.longQTwo}
        />

        <LongQuestionsSection
          name="longQThree"
          header={admissionOfferReviewLongQuestionsMapper[3].question}
          value={formik.values.longQThree}
          valueLength={formik.values.longQThree.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQThree}
          isTouched={formik.touched.longQThree}
        />
      </FormPageLayout>
    </>
  )
}

export default AdmissionOfferFormPage
