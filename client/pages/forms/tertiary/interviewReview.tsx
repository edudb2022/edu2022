import { useFormik } from "formik"
import moment from "moment"
import { NextPage } from "next"
import React from "react"
import FormSumitButton from "../../../components/common/buttons/formSubmit"
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
import { admissionType } from "../../../constants/admission"
import {
  dressCodeTypesList,
  dressCodeOptions,
  schoolTypesList,
  applicationTypesList
} from "../../../constants/common"

import {
  InterviewDifficultyRating,
  InterviewExperienceRating,
  recommendRating
} from "../../../constants/rating"
import * as yup from "yup"
import {
  DateValidationSchema,
  RatingValidationSchema,
  SlectCommonValidationSchema,
  TitleValidationSchema
} from "../../../utils/validation/form/schema"
import { schoolTypeOptions } from "../../../constants/school"
import { ERROR_FORM_MESSAGES } from "../../../utils/validation/errorMessages/form"
import { ADMISSION_TYPE } from "../../../types/common"
import InputHeader from "../../../components/common/header/input"

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
    gpa: null,
    applicaiotnType: "",
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
    applicaiotnType: SlectCommonValidationSchema,

    gpa: yup
      .number()
      .min(0, ERROR_FORM_MESSAGES.GPA_NEGATIVE)
      .max(4.3, ERROR_FORM_MESSAGES.GPA_TOO_LARGE)
      .when("applicaiotnType", (applicaiotnType, schema) => {
        if (applicaiotnType === ADMISSION_TYPE.NON_JUPAS)
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

  return (
    <FormPageLayout
      title="????????????"
      subTitle="??????????????????????????????"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
        <BaseSelect
          name="schoolType"
          items={schoolTypesList}
          selectId="schoolType"
          inputLabel="????????????"
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
          inputLabel="??????"
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
          inputLabel="??????/??????"
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
          inputLabel="??????"
          selectValue={formik.values.programme}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.programme}
          isTouched={formik.touched.programme}
          isRequired
        />
      </div>

      <InputContainer header="?????????????????????/??????">
        <div className="grid md:grid-cols-4 md:gap-x-9  gap-y-2 mt-2">
          <BaseSelect
            items={schoolTypesList}
            name="currentSchoolType"
            selectId="currentSchoolType"
            inputLabel="????????????/????????????"
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
            inputLabel="??????"
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
            inputLabel="??????/??????"
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
            inputLabel="??????"
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
            // style={{ width: "100%" }}
          />
        </div>

        <div className="grid">
          <BaseDatePicker
            label="interviewDate (YYYY-MM-DD)"
            value={formik.values.interviewDate}
            onChange={(newValue: any) => {
              formik.setFieldValue(
                "interviewDate",
                moment(newValue).format("YYYY-MM-DD")
              )
            }}
            errorMessages={formik.errors.interviewDate}
            isTouched={formik.touched.interviewDate}
            // onChange={(newValue: any) => {
            //   formik.setFieldValue(
            //     "admissionDate",
            //     moment(newValue).format("YYYY-MM-DD")
            //   )
            // }}
            helpText="????????????MM/YYYY"
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
          header="????????????"
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
          header="????????????"
          headerRequired={true}
        />
      </div>

      <div className="grid  md:grid-cols-4 md:gap-x-9 gap-y-2">
        <BaseSelect
          name="dressCode"
          items={dressCodeTypesList}
          selectId="dressCode"
          inputLabel="????????????(Dress Code)"
          selectValue={formik.values.dressCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.dressCode}
          isTouched={formik.touched.dressCode}
        />
        <BaseSelect
          name="applicaiotnType"
          items={applicationTypesList}
          selectId="applicaiotnType"
          inputLabel="??????"
          selectValue={formik.values.applicaiotnType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.applicaiotnType}
          isTouched={formik.touched.applicaiotnType}
          isRequired
        />

        <GpaNumberInput
          value={formik.values.gpa}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.gpa}
          isTouched={formik.touched.gpa}
          disabled={
            formik.values.applicaiotnType === ADMISSION_TYPE.JUPAS ||
            formik.values.applicaiotnType === ""
          }
          helpText="Non-Jupas/???????????????"
        />
      </div>

      <InputContainer header="DSE??????" subHeader="??????????????????????????? (Best 5)">
        <div className="grid  grid-cols-3 md:grid-cols-4 md:gap-x-9 gap-y-2">
          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="?????????"
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
              inputLabel="?????????"
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
              inputLabel="?????????"
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
              inputLabel="?????????"
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
              inputLabel="?????????"
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
              inputLabel="?????????"
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
        header="????????????"
        subHeader="??????????????????????????????????????????"
      >
        <div className="grid   md:grid-cols-4  md:gap-x-9 md:items-end gap-y-2 mt-2">
          <div className="grid  md:col-span-1">
            <ContactSelect
              name="contactMethod"
              selectId="contactMethod"
              inputLabel="????????????"
              selectValue={formik.values.contactMethod}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.contactMethod}
              isTouched={formik.touched.contactMethod}
            />
          </div>
          <div className="md:col-span-3 ">
            <BaseTextInput
              label="Email/????????????/Username"
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
        header="???????????? !"
        headerClassName="text-2xl font-black"
        subHeader="???????????????????????????????????????????????????????????????????????????"
        subHeaderClassName="text-base"
      />
      <LongQuestionsSection
        name="longQ"
        header="???????????????????????????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="???????????????????????????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="??????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="?????????????????????"
        placeholder="??????/??????????????????????????????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="?????????????????????"
        placeholder="??????:????????????/????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="?????????????"
        placeholder={``}
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
export default InterviewReviewPage
