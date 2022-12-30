import { useFormik } from "formik"
import React, { useEffect, useState } from "react"
import BaseSalaryNumberInput from "../../../components/common/inputs/number/baseSalary"
import BonusNumberInput from "../../../components/common/inputs/number/Bonus"
import StockOptionNumberInput from "../../../components/common/inputs/number/stockOption"
import TitleTextInput from "../../../components/common/inputs/text/title"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import BaseDatePicker from "../../../components/common/inputs/date"
import BaseTextInput from "../../../components/common/inputs/text"
import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import {
  gradJobHopeRating,
  gradJobJobFindingDifficultyRating
} from "../../../constants/rating"
import FormPageLayout from "../../../components/layouts/form"
import BaseSelect from "../../../components/common/inputs/select"
import InputContainer from "../../../components/containers/input"
import {
  honorTypeIdList,
  jobSourceTypesList,
  schoolTypesList,
  SITENAME
} from "../../../constants/common"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import {
  companyNameValidationSchema,
  contactDetailValidationSchema,
  dateValidationSchema,
  jobTitleValidationSchema,
  longQuestionValidationSchema,
  ratingValidationSchema,
  SalaryValidationSchema,
  selectCommonValidationSchema,
  titleValidationSchema
} from "../../../utils/validation/form/schema"
import * as yup from "yup"
import InputHeader from "../../../components/common/header/input"
import { gradJobOfferOfferReviewLongQuestionsMapper } from "../../../mappers/longQuestion"
import SEO from "../../../components/seo"
import { CommonHelpers } from "../../../helpers"
import JobTypeSearchableSelect from "../../../components/common/inputs/select/searchable/jobType"
import useCreateGradJobOfferReview from "../../../hooks/api/uesCreateGradJobReview"
import { ICreateGradJobReviewReq } from "../../../types/api"
import { useRouter } from "next/router"
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import { ISystemActionTypes } from "../../../state/system/actions"
import { ErrorMessageStatement } from "../../../constants/errorMessageStatement"

const GradJobOfferFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: null,
    school: null,
    faculty: null,
    programme: null,
    offerReceivedDate: CommonHelpers.formatData(new Date(), undefined, true),
    title: "",
    jobTitle: "",
    companyName: "",
    baseSalary: "0",
    bonus: "0",
    stockOption: "0",
    totalSalary: 0,
    difficulty: null,
    hope: null,
    honour: null,
    jobType: null,
    jobSource: null,
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

  const gradJobOfferFormSchema = yup.object().shape({
    schoolType: selectCommonValidationSchema,
    school: selectCommonValidationSchema,
    faculty: selectCommonValidationSchema,
    programme: selectCommonValidationSchema,
    offerReceivedDate: dateValidationSchema,
    title: titleValidationSchema,
    jobTitle: jobTitleValidationSchema,
    companyName: companyNameValidationSchema,
    baseSalary: SalaryValidationSchema,
    bonus: SalaryValidationSchema,
    stockOption: SalaryValidationSchema,
    jobType: selectCommonValidationSchema,
    hope: ratingValidationSchema,
    difficulty: ratingValidationSchema,
    contactDetail: contactDetailValidationSchema,
    honour: selectCommonValidationSchema,
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
  const { mutate } = useCreateGradJobOfferReview()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleSubmit = () => {
    const contact = formik.values.contactMethod
      ? {
          typeId: formik.values.contactMethod,
          value: formik.values.contactDetail
        }
      : null

    const body: ICreateGradJobReviewReq = {
      programId: 6070,
      userId: 1,
      honorId: formik.values.honour,
      title: formik.values.title,
      jobTypeId: formik.values.jobType!,
      jobPostSourceId: formik.values.jobSource || null,
      companyName: formik.values.companyName,
      jobTitle: formik.values.jobTitle,
      offerReceiveDate: "2018",
      baseSalary: parseInt(formik.values.baseSalary),
      bonus: parseInt(formik.values.bonus),
      stockOptions: parseInt(formik.values.stockOption),
      contactMethod: contact,
      anonymous: formik.values.isAnonymous,
      ratingQuestionResponses: [
        {
          questionId: 1,
          optionId: parseInt(formik.values.difficulty!)
        },
        {
          questionId: 2,
          optionId: parseInt(formik.values.hope!)
        }
      ],
      longQuestionResponses: [
        {
          questionId: 1,
          text: formik.values.longQOne.trim() || null
        },
        {
          questionId: 2,
          text: formik.values.longQTwo.trim() || null
        },
        {
          questionId: 3,
          text: formik.values.longQThree.trim() || null
        },
        {
          questionId: 4,
          text: formik.values.longQFour.trim() || null
        },
        {
          questionId: 5,
          text: formik.values.longQFive.trim() || null
        },
        {
          questionId: 6,
          text: formik.values.longQSix.trim() || null
        },
        {
          questionId: 7,
          text: formik.values.longQSeven.trim() || null
        },
        {
          questionId: 8,
          text: formik.values.longQEight.trim() || null
        },
        {
          questionId: 9,
          text: formik.values.longQNine.trim() || null
        }
      ]
    }

    setIsInProgress(true)
    mutate(body, {
      onSuccess: (res) => {
        const id = res.data.data.id
        router.push(`/reviewDetail/tertiary/gradJob/${id}`)
      },
      onError: (err) => {
        console.log("errrrrrr", err)

        dispatch({
          type: ISystemActionTypes.SYSTEM_ERROR,
          payload: ErrorMessageStatement.FORM_GENERIC_ERROR
        })
      },
      onSettled: () => {
        setIsInProgress(false)
      }
    })
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: gradJobOfferFormSchema
  })

  useEffect(() => {
    formik.values.totalSalary =
      parseInt(formik?.values?.baseSalary || "0") +
      parseInt(formik?.values?.stockOption || "0") +
      parseInt(formik.values.bonus || "0")
  }, [formik.values.baseSalary, formik.values.stockOption, formik.values.bonus])
  const handleDateChange = (newValue: Date) => {
    formik.setFieldValue(
      "offerReceivedDate",
      CommonHelpers.formatData(newValue, undefined, true)
    )
  }
  const handleJobTypeChange = (e: any, newValue: any) => {
    if (newValue) {
      formik.setFieldValue("jobType", newValue.id)
    } else {
      formik.setFieldValue("jobType", undefined)
    }
  }
  return (
    <>
      <SEO
        title="填寫工作情報"
        description="分享你嘅工作情報，造福後人，得Offer God眷顧！！"
        openGraph={{
          title: "填寫v情報",
          description: "分享你嘅工作情報，造福後人，得Offer God眷顧！！",
          site_name: SITENAME
        }}
      />
      <FormPageLayout
        title="工作情報"
        subTitle="可以提交多次工作情報"
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

        <TitleTextInput
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.title}
          isTouched={formik.touched.title}
          valueLength={formik.values.title.length}
          maxLength={25}
          isRequired
        />

        <div className="grid md:grid-cols-3 md:gap-x-9  gap-y-2">
          <BaseTextInput
            label="職位名稱"
            name="jobTitle"
            value={formik.values.jobTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.jobTitle}
            errorMessages={formik.errors.jobTitle}
            valueLength={formik.values?.jobTitle?.length}
            maxLength={40}
            isRequired
          />
          <BaseTextInput
            label="公司名稱"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.companyName}
            errorMessages={formik.errors.companyName}
            valueLength={formik.values?.companyName?.length}
            maxLength={100}
            isRequired
          />

          <BaseDatePicker
            label="收Offer日期"
            value={formik.values.offerReceivedDate}
            // onChange={(newValue: any) => {
            //   formik.setFieldValue(
            //     "offerReceivedDate",
            //     dayjs(newValue).format("YYYY-MM-DD")
            //   )
            // }}
            minDate={CommonHelpers.dayRange(-50, 0)}
            maxDate={CommonHelpers.dayRange(0, 0)}
            onChange={handleDateChange}
            errorMessages={formik.errors.offerReceivedDate}
            isTouched={formik.touched.offerReceivedDate}
            helpText="只會顯示MM/YYYY"
          />
        </div>

        <InputContainer
          header="總年薪(HKD)"
          subHeader={`HKD ${formik.values.totalSalary}`}
        >
          <div className="grid md:grid-cols-3 md:gap-x-9 mt-4 gap-y-2">
            <BaseSalaryNumberInput
              value={formik.values.baseSalary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isTouched={formik.touched.baseSalary}
              errorMessages={formik.errors.baseSalary}
            />
            <BonusNumberInput
              value={formik.values.bonus}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isTouched={formik.touched.bonus}
              errorMessages={formik.errors.bonus}
            />
            <StockOptionNumberInput
              value={formik.values.stockOption}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isTouched={formik.touched.stockOption}
              errorMessages={formik.errors.stockOption}
            />
          </div>
        </InputContainer>

        <div className="grid md:grid-cols-3 md:gap-x-9 mt-4 gap-y-2">
          <JobTypeSearchableSelect
            name="jobType"
            value={formik.values.jobType}
            onChange={handleJobTypeChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.jobType}
            isTouched={formik.touched.jobType}
            isRequired
          />

          <BaseSelect
            name="jobSource"
            items={jobSourceTypesList}
            selectId="jobSource"
            inputLabel="如果得知這工作？"
            selectValue={formik.values.jobSource}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.jobSource}
            isTouched={formik.touched.jobSource}
          />

          <BaseSelect
            name="honour"
            items={honorTypeIdList}
            selectId="honour"
            inputLabel="畢業榮譽 (Honour)"
            selectValue={formik.values.honour}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.honour}
            isTouched={formik.touched.honour}
          />
        </div>

        <div className="flex flex-col gap-y-6  justify-center items-center">
          <RatingToggleButtonGroup
            id="difficulty"
            value={formik.values.difficulty}
            onChange={formik.handleChange}
            ratingTitle={gradJobJobFindingDifficultyRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.difficulty}
            isTouched={formik.touched.difficulty}
            header="搵工難度"
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="hope"
            value={formik.values.hope}
            onChange={formik.handleChange}
            ratingTitle={gradJobHopeRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.hope}
            isTouched={formik.touched.hope}
            header="前途評估"
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
                disabled={formik.values.contactMethod === null}
                maxLength={30}
                valueLength={formik.values?.contactDetail.length}
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
          header={gradJobOfferOfferReviewLongQuestionsMapper[1].question}
          value={formik.values.longQOne}
          valueLength={formik.values.longQOne.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQOne}
          isTouched={formik.touched.longQOne}
        />

        <LongQuestionsSection
          name="longQTwo"
          header={gradJobOfferOfferReviewLongQuestionsMapper[2].question}
          placeholder="例如career path係點，晉升機會，人工升幅等等"
          value={formik.values.longQTwo}
          valueLength={formik.values.longQTwo.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQTwo}
          isTouched={formik.touched.longQTwo}
        />
        <LongQuestionsSection
          name="longQThree"
          header={gradJobOfferOfferReviewLongQuestionsMapper[3].question}
          value={formik.values.longQThree}
          valueLength={formik.values.longQThree.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQThree}
          isTouched={formik.touched.longQThree}
        />

        <LongQuestionsSection
          name="longQFour"
          header={gradJobOfferOfferReviewLongQuestionsMapper[4].question}
          value={formik.values.longQFour}
          valueLength={formik.values.longQFour.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQFour}
          isTouched={formik.touched.longQFour}
        />

        <LongQuestionsSection
          name="longQFive"
          header={gradJobOfferOfferReviewLongQuestionsMapper[5].question}
          value={formik.values.longQFive}
          valueLength={formik.values.longQFive.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQFive}
          isTouched={formik.touched.longQFive}
        />

        <LongQuestionsSection
          name="longQSix"
          header={gradJobOfferOfferReviewLongQuestionsMapper[6].question}
          placeholder="例如設施，福利，地點，伙食，管理層"
          value={formik.values.longQSix}
          valueLength={formik.values.longQSix.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQSix}
          isTouched={formik.touched.longQSix}
        />

        <LongQuestionsSection
          name="longQSeven"
          header={gradJobOfferOfferReviewLongQuestionsMapper[7].question}
          placeholder="例如OT程度，語言，同事，氣氛"
          value={formik.values.longQSeven}
          valueLength={formik.values.longQSeven.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQSeven}
          isTouched={formik.touched.longQSeven}
        />

        <LongQuestionsSection
          name="longQEight"
          header={gradJobOfferOfferReviewLongQuestionsMapper[8].question}
          placeholder="優點?缺點？對比其他offer？"
          value={formik.values.longQEight}
          valueLength={formik.values.longQEight.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQEight}
          isTouched={formik.touched.longQEight}
        />

        <LongQuestionsSection
          name="longQNine"
          header={gradJobOfferOfferReviewLongQuestionsMapper[9].question}
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

export default GradJobOfferFormPage
