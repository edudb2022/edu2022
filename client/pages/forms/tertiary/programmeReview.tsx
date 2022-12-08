import { useFormik } from "formik"
import React, { useState } from "react"
import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import BaseSelect from "../../../components/common/inputs/select"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import BaseTextInput from "../../../components/common/inputs/text"
import TitleTextInput from "../../../components/common/inputs/text/title"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import InputContainer from "../../../components/containers/input"
import FormPageLayout from "../../../components/layouts/form"
import SEO from "../../../components/seo"
import {
  programmeGpaRating,
  programmeLearningExperienceRating,
  programmeStructureRating,
  programmeRecommendRating,
  programmeResourcedRating,
  programmeWorkLoadRating
} from "../../../constants/rating"
import * as yup from "yup"
import {
  SelectCommonValidationSchema,
  TitleValidationSchema,
  RatingValidationSchema,
  DateValidationSchema,
  longQuestionValidationSchema
} from "../../../utils/validation/form/schema"
import {
  academicStatusTypesList,
  schoolTypesList,
  SITENAME
} from "../../../constants/common"
import InputHeader from "../../../components/common/header/input"
import { programmeReviewLongQuestionsMapper } from "../../../mappers/longQuestion"
import dayjs from "dayjs"
import useCreateProgrammeReview from "../../../hooks/api/useCreateProgrammeReview"
import { CommonHelpers } from "../../../helpers"

const ProgrammeReviewFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    faculty: "",
    programme: "",
    title: "",
    admissionDate: CommonHelpers.formatData(new Date(), "YYYY-MM-DD"),
    academicStatus: null,
    workloadRating: null,
    programmeStructure: null,
    gpaRating: null,
    resources: null,
    learningExperience: null,
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

  const programmeReviewFormSchema = yup.object().shape({
    schoolType: SelectCommonValidationSchema,
    school: SelectCommonValidationSchema,
    faculty: SelectCommonValidationSchema,
    programme: SelectCommonValidationSchema,
    title: TitleValidationSchema,
    workloadRating: RatingValidationSchema,
    programmeStructure: RatingValidationSchema,
    resources: RatingValidationSchema,
    learningExperience: RatingValidationSchema,
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
  const { mutate } = useCreateProgrammeReview()
  const handleSubmit = () => {
    setIsInProgress(true)

    const body = {
      userId: 1,
      programId: 62,
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
          optionId: parseInt(formik.values.programmeStructure!)
        },
        {
          questionId: 2,
          optionId: parseInt(formik.values.gpaRating!)
        },
        {
          questionId: 3,
          optionId: parseInt(formik.values.workloadRating!)
        },
        {
          questionId: 4,
          optionId: parseInt(formik.values.learningExperience!)
        },
        {
          questionId: 5,
          optionId: parseInt(formik.values.resources!)
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
    console.log("sumit")
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: programmeReviewFormSchema
  })

  const handleDateChange = (newValue: any) => {
    formik.setFieldValue("admissionDate", dayjs(newValue).format("YYYY-MM-DD"))
  }

  return (
    <>
      <SEO
        title="填寫課程評價"
        description="填寫課程評價! 講低你對呢間課程嘅睇法啦！！"
        openGraph={{
          title: "填寫課程評價",
          description: "填寫課程評價! 講低你對呢間課程嘅睇法啦！！",
          site_name: SITENAME
        }}
      />
      <FormPageLayout
        title="課程評價"
        subTitle="每個課程只可以作一次評價"
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

        <div className="grid md:grid-cols-4 md:gap-x-9">
          <div className="col-span-2">
            <TitleTextInput
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.title}
              isTouched={formik.touched.title}
              valueLength={formik.values.title.length}
              maxLength={25}
            />
          </div>

          <BaseDatePicker
            label="入學日期"
            value={formik.values.admissionDate}
            // onChange={(newValue: any) => {
            //   formik.setFieldValue(
            //     "admissionDate",
            //     dayjs(newValue).format("YYYY-MM-DD")
            //   )
            // }}
            onChange={handleDateChange}
            errorMessages={formik.errors.admissionDate}
            isTouched={formik.touched.admissionDate}
            helpText="只會顯示MM/YYYY"
            // format="DD/MM/YYYY"
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

        <div className="flex flex-col gap-y-6 justify-center items-center">
          <RatingToggleButtonGroup
            id="programmeStructure"
            value={formik.values.programmeStructure}
            onChange={formik.handleChange}
            ratingTitle={programmeStructureRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.programmeStructure}
            isTouched={formik.touched.programmeStructure}
            header="課程結構"
            headerRequired={true}
            subHeader="各科內容質素，連貫性等"
          />

          <RatingToggleButtonGroup
            id="gpaRating"
            value={formik.values.gpaRating}
            onChange={formik.handleChange}
            ratingTitle={programmeGpaRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.gpaRating}
            isTouched={formik.touched.gpaRating}
            header="爛龜(Grade)指數"
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="workloadRating"
            value={formik.values.workloadRating}
            onChange={formik.handleChange}
            ratingTitle={programmeWorkLoadRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.workloadRating}
            isTouched={formik.touched.workloadRating}
            header="爆肝指數"
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="learningExperience"
            value={formik.values.learningExperience}
            onChange={formik.handleChange}
            ratingTitle={programmeLearningExperienceRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.learningExperience}
            isTouched={formik.touched.learningExperience}
            header="學習經歷"
            headerRequired={true}
            subHeader="例如學習氣氛，教師質素等"
          />

          <RatingToggleButtonGroup
            id="resources"
            value={formik.values.resources}
            onChange={formik.handleChange}
            ratingTitle={programmeResourcedRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.resources}
            isTouched={formik.touched.resources}
            header="資源"
            subHeader="例如學習資源，如免費影印紙張上限，Exchange 支援等等"
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="recommendation"
            value={formik.values.recommendation}
            onChange={formik.handleChange}
            ratingTitle={programmeRecommendRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.recommendation}
            isTouched={formik.touched.recommendation}
            header="推薦指數"
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
          header={programmeReviewLongQuestionsMapper[1].question}
          value={formik.values.longQOne}
          valueLength={formik.values.longQOne.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQOne}
          isTouched={formik.touched.longQOne}
        />

        <LongQuestionsSection
          name="longQTwo"
          header={programmeReviewLongQuestionsMapper[2].question}
          value={formik.values.longQTwo}
          valueLength={formik.values.longQTwo.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQTwo}
          isTouched={formik.touched.longQTwo}
        />

        <LongQuestionsSection
          name="longQThree"
          header={programmeReviewLongQuestionsMapper[3].question}
          value={formik.values.longQThree}
          valueLength={formik.values.longQThree.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQThree}
          isTouched={formik.touched.longQThree}
        />

        <LongQuestionsSection
          name="longQFour"
          header={programmeReviewLongQuestionsMapper[4].question}
          value={formik.values.longQFour}
          valueLength={formik.values.longQFour.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQFour}
          isTouched={formik.touched.longQFour}
        />

        <LongQuestionsSection
          name="longQFive"
          header={programmeReviewLongQuestionsMapper[5].question}
          value={formik.values.longQFive}
          valueLength={formik.values.longQFive.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQFive}
          isTouched={formik.touched.longQFive}
        />

        <LongQuestionsSection
          name="longQSix"
          header={programmeReviewLongQuestionsMapper[6].question}
          value={formik.values.longQSix}
          valueLength={formik.values.longQSix.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQSix}
          isTouched={formik.touched.longQSix}
        />

        <LongQuestionsSection
          name="longQSeven"
          header={programmeReviewLongQuestionsMapper[7].question}
          value={formik.values.longQSeven}
          valueLength={formik.values.longQSeven.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQSeven}
          isTouched={formik.touched.longQSeven}
        />

        <LongQuestionsSection
          name="longQEight"
          header={programmeReviewLongQuestionsMapper[8].question}
          placeholder="例如:入學準備/選課策略"
          value={formik.values.longQEight}
          valueLength={formik.values.longQEight.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQEight}
          isTouched={formik.touched.longQEight}
        />

        <LongQuestionsSection
          name="longQNine"
          header={programmeReviewLongQuestionsMapper[9].question}
          placeholder={``}
          value={formik.values.longQNine}
          valueLength={formik.values.longQNine.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQNine}
          isTouched={formik.touched.longQNine}
        />
      </FormPageLayout>
    </>
  )
}

export default ProgrammeReviewFormPage
