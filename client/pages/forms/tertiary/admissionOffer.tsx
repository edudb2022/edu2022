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
  contactDetailValidationSchema,
  currentFacultyValidationSchema,
  currentProgrammeValidationSchema,
  currentSchoolValidationSchema,
  dateValidationSchema,
  dseSubjectFiveValidationSchema,
  dseSubjectFourValidationSchema,
  dseSubjectGradeFiveValidationSchema,
  dseSubjectGradeFourValidationSchema,
  dseSubjectGradeOneValidationSchema,
  dseSubjectGradeSixValidationSchema,
  dseSubjectGradeThreeValidationSchema,
  dseSubjectGradeTwoValidationSchema,
  dseSubjectOneValidationSchema,
  dseSubjectSixValidationSchema,
  dseSubjectThreeValidationSchema,
  dseSubjectTwoValidationSchema,
  gpaValidationSchema,
  longQuestionValidationSchema,
  selectCommonValidationSchema,
  yearOfStudyValidationSchema
} from "../../../utils/validation/form/schema"
import { ERROR_FORM_MESSAGES } from "../../../utils/validation/errorMessages/form"
import { ApplicationTypeId, CurrentSchoolTypeId } from "../../../types/common"

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

const AdmissionOfferFormPage: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const initialValues = {
    schoolType: null,
    school: null,
    faculty: null,
    programme: null,
    title: "",
    offerDate: CommonHelpers.formatData(new Date(), undefined, true),
    currentSchoolType: null,
    currentSchool: null,
    currentFaculty: null,
    currentProgramme: null,
    yearofStudy: null,
    offerType: null,
    jupasBanding: null,
    applicationType: undefined,
    admissionLevel: null,
    gpa: null,
    dseSubjectOne: null,
    dseSubjectGradeOne: null,
    dseSubjectTwo: null,
    dseSubjectGradeTwo: null,
    dseSubjectThree: null,
    dseSubjectGradeThree: null,
    dseSubjectFour: null,
    dseSubjectGradeFour: null,
    dseSubjectFive: null,
    dseSubjectGradeFive: null,
    dseSubjectSix: null,
    dseSubjectGradeSix: null,
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
    schoolType: selectCommonValidationSchema,
    school: selectCommonValidationSchema,
    faculty: selectCommonValidationSchema,
    programme: selectCommonValidationSchema,
    currentSchoolType: selectCommonValidationSchema,
    currentSchool: currentSchoolValidationSchema,
    currentFaculty: currentFacultyValidationSchema,
    currentProgramme: currentProgrammeValidationSchema,
    yearofStudy: yearOfStudyValidationSchema,
    offerDate: dateValidationSchema,
    offerType: selectCommonValidationSchema,
    contactDetail: contactDetailValidationSchema,
    applicationType: selectCommonValidationSchema,
    admissionLevel: selectCommonValidationSchema,
    longQOne: longQuestionValidationSchema,
    longQTwo: longQuestionValidationSchema,
    longQThree: longQuestionValidationSchema,
    gpa: gpaValidationSchema,
    dseSubjectOne: dseSubjectOneValidationSchema,
    dseSubjectTwo: dseSubjectTwoValidationSchema,
    dseSubjectThree: dseSubjectThreeValidationSchema,
    dseSubjectFour: dseSubjectFourValidationSchema,
    dseSubjectFive: dseSubjectFiveValidationSchema,
    dseSubjectSix: dseSubjectSixValidationSchema,
    dseSubjectGradeOne: dseSubjectGradeOneValidationSchema,
    dseSubjectGradeTwo: dseSubjectGradeTwoValidationSchema,
    dseSubjectGradeThree: dseSubjectGradeThreeValidationSchema,
    dseSubjectGradeFour: dseSubjectGradeFourValidationSchema,
    dseSubjectGradeFive: dseSubjectGradeFiveValidationSchema,
    dseSubjectGradeSix: dseSubjectGradeSixValidationSchema
  })
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: admissionOfferFormSchema
  })

  const [bestFive, setBestFive] = useState(0)
  const [bestSix, setBestSix] = useState<number | "/">(0)
  const [isInProgress, setIsInProgress] = useState(false)
  useEffect(() => {
    const res = CommonHelpers.DseGradeToScore([
      formik.values.dseSubjectGradeOne,
      formik.values.dseSubjectGradeTwo,
      formik.values.dseSubjectGradeThree,
      formik.values.dseSubjectGradeFour,
      formik.values.dseSubjectGradeFive,
      formik.values.dseSubjectGradeSix
    ])

    setBestFive(res.bestFiveScore)
    setBestSix(res.bestSixScore)
  }, [
    formik.values.dseSubjectGradeOne,
    formik.values.dseSubjectGradeTwo,
    formik.values.dseSubjectGradeThree,
    formik.values.dseSubjectGradeFour,
    formik.values.dseSubjectGradeFive,
    formik.values.dseSubjectGradeSix
  ])

  useEffect(() => {
    if (isNotTertiarySchool) {
      formik.values.currentSchool = null
      formik.values.currentProgramme = null
      formik.values.currentFaculty = null
      formik.values.yearofStudy = null
    }
  }, [formik.values.currentSchoolType])
  // console.log(123, formik.values.dseSubjectGradeOne)
  useEffect(() => {
    if (
      formik.values.applicationType === ApplicationTypeId.BACHELOR ||
      ApplicationTypeId.NON_JUPAS
    ) {
      formik.values.jupasBanding = null
    }

    if (formik.values.applicationType === ApplicationTypeId.JUPAS) {
      formik.values.gpa = null
    }
  }, [formik.values.applicationType])

  const isNotTertiarySchool =
    formik.values.currentSchoolType == CurrentSchoolTypeId.SECONDARY_SCHOOL ||
    formik.values.currentSchoolType == CurrentSchoolTypeId.RETAKER ||
    formik.values.currentSchoolType === null

  const handleDateChange = (newValue: Date) => {
    formik.setFieldValue(
      "offerDate",
      CommonHelpers.formatData(newValue, undefined, true)
    )
  }
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
            // onChange={(newValue: any) => {
            //   formik.setFieldValue(
            //     "offerDate",
            //     CommonHelpers.formatData(newValue, "YYYY-MM-DD")
            //   )
            // }}
            onChange={handleDateChange}
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
              name="dseSubjectOne"
              selectId="dseSubjectOne"
              selectValue={formik.values.dseSubjectOne}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectOne}
              isTouched={formik.touched.dseSubjectOne}
            />
          </div>

          <div className="grid col-span-1">
            <DseGradeSelect
              name="dseSubjectGradeOne"
              selectId="dseSubjectGradeOne"
              selectValue={formik.values.dseSubjectGradeOne}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectGradeOne}
              isTouched={formik.touched.dseSubjectGradeOne}
              disabled={!!!formik.values.dseSubjectOne}
            />
          </div>

          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科目二"
              name="dseSubjectTwo"
              selectId="dseSubjectTwo"
              selectValue={formik.values.dseSubjectTwo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectTwo}
              isTouched={formik.touched.dseSubjectTwo}
            />
          </div>

          <DseGradeSelect
            name="dseSubjectGradeTwo"
            selectId="dseSubjectGradeTwo"
            selectValue={formik.values.dseSubjectGradeTwo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dseSubjectGradeTwo}
            isTouched={formik.touched.dseSubjectGradeTwo}
            disabled={!!!formik.values.dseSubjectTwo}
          />
          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科學三"
              name="dseSubjectThree"
              selectId="dseSubjectThree"
              selectValue={formik.values.dseSubjectThree}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectThree}
              isTouched={formik.touched.dseSubjectThree}
            />
          </div>
          <DseGradeSelect
            name="dseSubjectGradeThree"
            selectId="dseSubjectGradeThree"
            selectValue={formik.values.dseSubjectGradeThree}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dseSubjectGradeThree}
            isTouched={formik.touched.dseSubjectGradeThree}
            disabled={!!!formik.values.dseSubjectThree}
          />
          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科目四"
              name="dseSubjectFour"
              selectId="dseSubjectFour"
              selectValue={formik.values.dseSubjectFour}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectFour}
              isTouched={formik.touched.dseSubjectFour}
            />
          </div>
          <DseGradeSelect
            name="dseSubjectGradeFour"
            selectId="dseSubjectGradeFour"
            selectValue={formik.values.dseSubjectGradeFour}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dseSubjectGradeFour}
            isTouched={formik.touched.dseSubjectGradeFour}
            disabled={!!!formik.values.dseSubjectFour}
          />
          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科目五"
              name="dseSubjectFive"
              selectId="dseSubjectFive"
              selectValue={formik.values.dseSubjectFive}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectFive}
              isTouched={formik.touched.dseSubjectFive}
            />
          </div>
          <DseGradeSelect
            name="dseSubjectGradeFive"
            selectId="dseSubjectGradeFive"
            selectValue={formik.values.dseSubjectGradeFive}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dseSubjectGradeFive}
            isTouched={formik.touched.dseSubjectGradeSix}
            disabled={!!!formik.values.dseSubjectFive}
          />

          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科目六"
              name="dseSubjectSix"
              selectId="dseSubjectSix"
              selectValue={formik.values.dseSubjectSix}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectSix}
              isTouched={formik.touched.dseSubjectSix}
            />
          </div>
          <DseGradeSelect
            name="dseSubjectGradeSix"
            selectId="dseSubjectGradeSix"
            selectValue={formik.values.dseSubjectGradeSix}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dseSubjectGradeSix}
            isTouched={formik.touched.dseSubjectGradeSix}
            disabled={!!!formik.values.dseSubjectSix}
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
