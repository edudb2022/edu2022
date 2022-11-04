import { useFormik } from "formik"
import React, { useState } from "react"

import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import TitleTextInput from "../../../components/common/inputs/text/title"
import FormPageLayout from "../../../components/layouts/form"
import {
  schoolCampusRating,
  schoolResourcesRating,
  schoolPolicyRating,
  schoolCafeteriaRating,
  schoolSenseOfBelongingRating,
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

import {
  academicStatusTypesList,
  SITENAME,
  yearOfStudyTypesList
} from "../../../constants/common"
import InputHeader from "../../../components/common/header/input"

import { schoolReviewLongQuestionsMapper } from "../../../mappers/longQuestion"
import { schoolReviewRatingQuestionsMapper } from "../../../mappers/ratingQuestions"
import dayjs from "dayjs"
import SEO from "../../../components/seo"
import { CommonHelpers } from "../../../helpers"
import useCreateSchoolReview from "../../../hooks/api/useCreateSchoolReview"

const SchoolReviewFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    title: "",
    admissionDate: CommonHelpers.formatData(new Date(), "YYYY-MM-DD"),
    academicStatus: null,
    campusRating: null,
    resourceRating: null,
    policyRating: null,
    canteenRating: null,
    senseOfBelonging: null,
    recommendation: null,
    contactMethod: null,
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
    senseOfBelonging: RatingValidationSchema,
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

  const [isInProgress, setIsInProgress] = useState(false)

  const { mutate } = useCreateSchoolReview()
  const handleSubmit = () => {
    const body = {
      schoolId: 62,
      title: formik.values.title,
      academicStatusId: formik.values.academicStatus,
      admissionDate: formik.values.admissionDate,
      contactMethod: {
        typeId: formik.values.contactMethod,
        value: formik.values.contactDetail
      },
      ratingQuestionResponses: [
        {
          questionId: 1,
          optionId: parseInt(formik.values.campusRating!)
        },
        {
          questionId: 2,
          optionId: parseInt(formik.values.resourceRating!)
        },
        {
          questionId: 3,
          optionId: parseInt(formik.values.policyRating!)
        },
        {
          questionId: 4,
          optionId: parseInt(formik.values.canteenRating!)
        },
        {
          questionId: 5,
          optionId: parseInt(formik.values.senseOfBelonging!)
        },
        {
          questionId: 6,
          optionId: parseInt(formik.values.recommendation!)
        }
      ],
      longQuestionResponses: [
        {
          questionId: 1,
          text: formik.values.longQOne
        },
        {
          questionId: 2,
          text: formik.values.longQTwo
        },
        {
          questionId: 3,
          text: formik.values.longQThree
        },
        {
          questionId: 4,
          text: formik.values.longQFour
        },
        {
          questionId: 5,
          text: formik.values.longQFive
        },
        {
          questionId: 6,
          text: formik.values.longQSix
        },
        {
          questionId: 7,
          text: formik.values.longQSeven
        },
        {
          questionId: 8,
          text: formik.values.longQEight
        },
        {
          questionId: 9,
          text: formik.values.longQNine
        }
      ],
      userId: 1,
      anonymous: formik.values.isAnonymous
    }
    mutate(body, {
      onSuccess: (res) => {
        console.log("res", res)
      },
      onError: (err) => {
        console.log("err", err)
      },
      onSettled: () => {
        setIsInProgress(false)
      }
    })
    setIsInProgress(true)
    console.log("sumit")
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: schoolReviewFormSchema
  })

  return (
    <>
      <SEO
        title="填寫學校評價"
        description="填寫學校評價! 講低你對呢間學校嘅睇法啦！！"
        openGraph={{
          title: "填寫學校評價",
          description: "填寫學校評價! 講低你對呢間學校嘅睇法啦！！",
          site_name: SITENAME
        }}
      />

      <FormPageLayout
        title="學校評價"
        subTitle="每間學校只可以作一次評價"
        onSubmit={formik.handleSubmit}
        isInProgress={isInProgress}
      >
        <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
          <SchoolTypeSelect
            selectId="School type"
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
            onChange={(newValue: any) => {
              formik.setFieldValue(
                "admissionDate",
                dayjs(newValue).format("YYYY-MM-DD")
              )
            }}
            errorMessages={formik.errors.admissionDate}
            isTouched={formik.touched.admissionDate}
            minDate={CommonHelpers.dayRange(-50, 0)}
            maxDate={CommonHelpers.dayRange(0, 30)}
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
          valueLength={formik.values.title.length}
          maxLength={25}
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
            ratingTitle={schoolResourcesRating}
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
            ratingTitle={schoolCafeteriaRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.canteenRating}
            isTouched={formik.touched.canteenRating}
            header={schoolReviewRatingQuestionsMapper[4].question}
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="senseOfBelonging"
            value={formik.values.senseOfBelonging}
            onChange={formik.handleChange}
            ratingTitle={schoolSenseOfBelongingRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.senseOfBelonging}
            isTouched={formik.touched.senseOfBelonging}
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

        {/* <button onClick={() => setIsInProgress(!isInProgress)}>23</button> */}
      </FormPageLayout>
    </>
  )
}

export default SchoolReviewFormPage
