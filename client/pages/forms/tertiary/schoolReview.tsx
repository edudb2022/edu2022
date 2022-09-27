import { useFormik } from "formik"
import React from "react"

import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import TitleTextInput from "../../../components/common/inputs/text/title"
import moment from "moment"
import FormPageLayout from "../../../components/layouts/form"
import {
  schoolCampusRating,
  schoolRecourcesRating,
  schoolPolicyRating,
  shcoolCafeteriaRating,
  schoolSelfOfBelongingRating,
  schoolRecommendRating
} from "../../../constants/rating"
import SchoolTypeSelect from "../../../components/common/inputs/select/schoolType"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"

import BaseTextInput from "../../../components/common/inputs/text"
import BaseSelect from "../../../components/common/inputs/select"

import InputContainer from "../../../components/containers/input"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import * as yup from "yup"
import {
  DateValidationSchema,
  longQuestionValidationSchema,
  RatingValidationSchema,
  SlectCommonValidationSchema,
  TitleValidationSchema
} from "../../../utils/validation/form/schema"
import FormSumitButton from "../../../components/common/buttons/formSubmit"
import FormSection from "../../../components/common/sections/form"
import {
  academicStatusTypesList,
  yearOfStudyTypesList
} from "../../../constants/common"
import InputHeader from "../../../components/common/header/input"

import { schoolReviewLongQuestionsMapper } from "../../../mappers/longQuestion"
import { schoolReviewRatingQuestionsMapper } from "../../../mappers/ratingQuestions"

const SchoolReviewFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    title: "",
    admissionDate: null,
    academicStatus: "",
    campusRating: null,
    resourceRating: null,
    policyRating: null,
    canteenRating: null,
    selfOfBelonging: null,
    recommendation: null,
    contactMethod: "",
    contactDetail: "",
    isAnonymous: false,
    longQOne: "",
    longQTwo: "",
    longQThree: "",
    longQFour: "",
    longQFive: "",
    longQSix: "",
    longQSeven: "",
    longQEight: "",
    longQNine: ""
  }
  const schoolReviewFormSchema = yup.object().shape({
    school: SlectCommonValidationSchema,
    title: TitleValidationSchema,
    campusRating: RatingValidationSchema,
    resourceRating: RatingValidationSchema,
    policyRating: RatingValidationSchema,
    canteenRating: RatingValidationSchema,
    selfOfBelonging: RatingValidationSchema,
    recommendation: RatingValidationSchema,
    admissionDate: DateValidationSchema,
    longQOne: longQuestionValidationSchema,
    longQTwo: longQuestionValidationSchema,
    longQThree: longQuestionValidationSchema,
    longQFour: longQuestionValidationSchema,
    longQFive: longQuestionValidationSchema,
    longQSix: longQuestionValidationSchema,
    longQSeven: longQuestionValidationSchema,
    longQEight: longQuestionValidationSchema,
    longQNine: longQuestionValidationSchema
  })

  const handleSubmit = () => {
    console.log("sumit")
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: schoolReviewFormSchema
  })

  console.log(formik.touched.admissionDate)
  return (
    <FormPageLayout
      title="學校評價"
      subTitle="每間學校只可以作一次評價"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
        <SchoolTypeSelect
          selectId="Schhol type"
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
          items={yearOfStudyTypesList}
          selectId="school"
          inputLabel="學校"
          selectValue={formik.values.school}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.school}
          isTouched={formik.touched.school}
          isRequired
        />

        <BaseDatePicker
          label="入學日期"
          value={formik.values.admissionDate}
          // onChange={(newValue: any) => {
          //   formik.setFieldValue(
          //     "admissionDate",
          //     moment(newValue).format("dd/MM/yyyy")
          //   )
          // }}
          onChange={(newValue: any) => {
            formik.setFieldValue(
              "admissionDate",
              moment(newValue).format("YYYY-MM-DD")
            )
          }}
          errorMessages={formik.errors.admissionDate}
          isTouched={formik.touched.admissionDate}
          helpText="只會顯示MM/YYYY"
        />

        <BaseSelect
          name="academicStatus"
          items={academicStatusTypesList}
          selectId="academicStatus"
          inputLabel="現時學業狀態"
          selectValue={formik.values.academicStatus}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.academicStatus}
          isTouched={formik.touched.academicStatus}
        />
      </div>

      <TitleTextInput
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.title}
        isTouched={formik.touched.title}
      />

      <div className="flex flex-col gap-y-6  items-center">
        <RatingToggleButtonGroup
          id="campusRating"
          value={formik.values.campusRating}
          onChange={formik.handleChange}
          ratingTitle={schoolCampusRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.campusRating}
          isTouched={formik.touched.campusRating}
          header={schoolReviewRatingQuestionsMapper[1].question}
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="resourceRating"
          value={formik.values.resourceRating}
          onChange={formik.handleChange}
          ratingTitle={schoolRecourcesRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.resourceRating}
          isTouched={formik.touched.resourceRating}
          header={schoolReviewRatingQuestionsMapper[2].question}
          subHeader={schoolReviewRatingQuestionsMapper[2].helpertext}
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="policyRating"
          value={formik.values.policyRating}
          onChange={formik.handleChange}
          ratingTitle={schoolPolicyRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.policyRating}
          isTouched={formik.touched.policyRating}
          header={schoolReviewRatingQuestionsMapper[3].question}
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="canteenRating"
          value={formik.values.canteenRating}
          onChange={formik.handleChange}
          ratingTitle={shcoolCafeteriaRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.canteenRating}
          isTouched={formik.touched.canteenRating}
          header={schoolReviewRatingQuestionsMapper[4].question}
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="selfOfBelonging"
          value={formik.values.selfOfBelonging}
          onChange={formik.handleChange}
          ratingTitle={schoolSelfOfBelongingRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.selfOfBelonging}
          isTouched={formik.touched.selfOfBelonging}
          header={schoolReviewRatingQuestionsMapper[5].question}
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="recommendation"
          value={formik.values.recommendation}
          onChange={formik.handleChange}
          ratingTitle={schoolRecommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.recommendation}
          isTouched={formik.touched.recommendation}
          header={schoolReviewRatingQuestionsMapper[6].question}
          headerRequired={true}
        />
      </div>

      <InputContainer
        header="聯絡資訊"
        subHeader="有疑問者可以直接搵你了解詳情"
      >
        <div className="grid   md:grid-cols-4  md:gap-x-9 md:items-end gap-y-2 mt-2">
          <div className="grid  md:col-span-1">
            <ContactSelect
              placeholder="Email/電話號碼/Username"
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
        // header="對校園環境同設施既評價有冇補充?"
        header={schoolReviewLongQuestionsMapper[1].question}
        value={formik.values.longQOne}
        valueLength={formik.values.longQOne.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQOne}
        isTouched={formik.touched.longQOne}
      />

      <LongQuestionsSection
        name="longQTwo"
        // header="對資源及支援嘅評價有冇補充？"
        header={schoolReviewLongQuestionsMapper[2].question}
        value={formik.values.longQTwo}
        valueLength={formik.values.longQTwo.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQTwo}
        isTouched={formik.touched.longQTwo}
      />

      <LongQuestionsSection
        name="longQThree"
        header={schoolReviewLongQuestionsMapper[3].question}
        value={formik.values.longQThree}
        valueLength={formik.values.longQThree.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQThree}
        isTouched={formik.touched.longQThree}
      />

      <LongQuestionsSection
        name="longQFour"
        // header="對校內膳食嘅評價有冇補充？"
        header={schoolReviewLongQuestionsMapper[4].question}
        value={formik.values.longQFour}
        valueLength={formik.values.longQFour.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQFour}
        isTouched={formik.touched.longQFour}
      />

      <LongQuestionsSection
        name="longQFive"
        header={schoolReviewLongQuestionsMapper[5].question}
        // header="對歸屬感嘅評價有冇補充？"
        value={formik.values.longQFive}
        valueLength={formik.values.longQFive.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQFive}
        isTouched={formik.touched.longQFive}
      />

      <LongQuestionsSection
        name="longQSix"
        header={schoolReviewLongQuestionsMapper[6].question}
        value={formik.values.longQSix}
        valueLength={formik.values.longQSix.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQSix}
        isTouched={formik.touched.longQSix}
      />

      <LongQuestionsSection
        name="longQSeven"
        header={schoolReviewLongQuestionsMapper[7].question}
        // header="喺到讀書，你快樂嗎？"
        value={formik.values.longQSeven}
        valueLength={formik.values.longQSeven.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQSeven}
        isTouched={formik.touched.longQSeven}
      />

      <LongQuestionsSection
        name="longQEight"
        header={schoolReviewLongQuestionsMapper[8].question}
        // header="對後人嘅忠告？"
        value={formik.values.longQEight}
        valueLength={formik.values.longQEight.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQEight}
        isTouched={formik.touched.longQEight}
      />

      <LongQuestionsSection
        name="longQNine"
        header={schoolReviewLongQuestionsMapper[9].question}
        placeholder={``}
        value={formik.values.longQNine}
        valueLength={formik.values.longQNine.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQNine}
        isTouched={formik.touched.longQNine}
      />
    </FormPageLayout>
  )
}

export default SchoolReviewFormPage
