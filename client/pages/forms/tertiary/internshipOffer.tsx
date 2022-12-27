import { useFormik } from "formik"

import React, { useEffect, useState } from "react"

import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import BaseSalaryNumberInput from "../../../components/common/inputs/number/baseSalary"
import BonusNumberInput from "../../../components/common/inputs/number/Bonus"
import StockOptionNumberInput from "../../../components/common/inputs/number/stockOption"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import BaseSelect from "../../../components/common/inputs/select"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import BaseTextInput from "../../../components/common/inputs/text"
import TitleTextInput from "../../../components/common/inputs/text/title"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import InputContainer from "../../../components/containers/input"
import FormPageLayout from "../../../components/layouts/form"
import {
  internshipTypesList,
  jobSourceTypesList,
  schoolTypesList,
  SITENAME
} from "../../../constants/common"
import SEO from "../../../components/seo"
import { internshipJobFindingDifficultyRating } from "../../../constants/rating"
import * as yup from "yup"
import {
  companyNameValidationSchema,
  contactDetailValidationSchema,
  dateValidationSchema,
  gpaCommonValidationSchema,
  jobTitleValidationSchema,
  longQuestionValidationSchema,
  ratingValidationSchema,
  SalaryValidationSchema,
  selectCommonValidationSchema,
  titleValidationSchema
} from "../../../utils/validation/form/schema"
import InputHeader from "../../../components/common/header/input"
import { internshipOfferReviewLongQuestionsMapper } from "../../../mappers/longQuestion"
import { CommonHelpers } from "../../../helpers"
import JobTypeSearchableSelect from "../../../components/common/inputs/select/searchable/jobType"
import useCreateInternshipReview from "../../../hooks/api/useCreateIntershipReview"
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import { useRouter } from "next/router"
import { ISystemActionTypes } from "../../../state/system/actions"
import { ErrorMessageStatement } from "../../../constants/errorMessageStatement"
import { ICreateInternshipReviewReq } from "../../../types/api"
import GpaNumberInput from "../../../components/common/inputs/number/gpa"
import { ERROR_FORM_MESSAGES } from "../../../utils/validation/errorMessages/form"

const InternshipOfferFormPage: React.FunctionComponent = () => {
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
    jobType: null,
    jobSource: null,
    gpa: null,
    internType: null,
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
    longQEight: ""
  }

  const intershipOfferFormSchema = yup.object().shape({
    schoolType: selectCommonValidationSchema,
    school: selectCommonValidationSchema,
    faculty: selectCommonValidationSchema,
    programme: selectCommonValidationSchema,
    title: titleValidationSchema,
    offerReceivedDate: dateValidationSchema,
    jobTitle: jobTitleValidationSchema,
    companyName: companyNameValidationSchema,
    jobType: selectCommonValidationSchema,
    internType: selectCommonValidationSchema,
    gpa: gpaCommonValidationSchema,
    baseSalary: SalaryValidationSchema,
    bonus: SalaryValidationSchema,
    stockOption: SalaryValidationSchema,
    difficulty: ratingValidationSchema,
    contactDetail: contactDetailValidationSchema,
    longQOne: longQuestionValidationSchema,
    longQTwo: longQuestionValidationSchema,
    longQThree: longQuestionValidationSchema,
    longQFour: longQuestionValidationSchema,
    longQFive: longQuestionValidationSchema,
    longQSix: longQuestionValidationSchema,
    longQSeven: longQuestionValidationSchema,
    longQEight: longQuestionValidationSchema
  })
  const [isInProgress, setIsInProgress] = useState(false)
  const { mutate } = useCreateInternshipReview()
  const dispatch = useAppDispatch()

  const handleSubmit = () => {
    const gpa = formik.values.gpa
      ? parseInt(parseInt(formik.values.gpa).toFixed(2))
      : null

    const contact = formik.values.contactMethod
      ? {
          typeId: formik.values.contactMethod,
          value: formik.values.contactDetail
        }
      : null

    const body: ICreateInternshipReviewReq = {
      programId: 6070,
      internshipTypeId: parseInt(formik.values.internType!),
      title: formik.values.title,
      gpa: gpa,
      jobTypeId: formik.values.jobType!,
      jobPostSourceId: formik.values.jobSource
        ? parseInt(formik.values.jobSource)
        : null,
      companyName: formik.values.companyName,
      jobTitle: formik.values.jobTitle,
      offerReceiveDate: "2018",
      baseSalary: parseInt(formik.values.baseSalary),
      bonus: parseInt(formik.values.bonus),
      stockOptions: parseInt(formik.values.stockOption),
      contactMethod: contact,
      userId: 1,
      anonymous: formik.values.isAnonymous,
      ratingQuestionResponses: [
        {
          questionId: 1,
          optionId: parseInt(formik.values.difficulty!)
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
        }
      ]
    }
    setIsInProgress(true)
    mutate(body, {
      onSuccess: (res) => {
        const id = res.data.data.id
        router.push(`/reviewDetail/tertiary/internship/${id}`)
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

  // const handleSubmit = () => {
  //   console.log(232323, "sumit")
  // }
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: intershipOfferFormSchema
  })

  const router = useRouter()

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
      formik.setFieldValue("jobType", null)
    }
  }

  return (
    <>
      <SEO
        title="填寫實習情報"
        description="分享你嘅實習情報，造福後人，得Offer God眷顧！！"
        openGraph={{
          title: "填寫實習情報",
          description: "分享你嘅實習情報，造福後人，得Offer God眷顧！！",
          site_name: SITENAME
        }}
      />

      <FormPageLayout
        title="實習情報"
        subTitle="可以提交多次實習情報"
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
          header="月薪(HKD)"
          subHeader={`HKD ${formik.values.totalSalary}`}
        >
          {/* <div className="flex flex-col md:flex-row w-full gap-x-3 gap-y-6 justify-end"> */}
          <div className="grid md:grid-cols-3 md:gap-x-9 mt-4 gap-y-2">
            <BaseSalaryNumberInput
              value={formik.values.baseSalary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isTouched={formik.touched.baseSalary}
              errorMessages={formik.errors.baseSalary}
              isRequired
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
          {/* </div> */}
        </InputContainer>
        <div className="grid md:grid-cols-4 md:gap-x-9 mt-4 gap-y-2">
          <GpaNumberInput
            value={formik.values.gpa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.gpa}
            isTouched={formik.touched.gpa}
          />
          <BaseSelect
            name="internType"
            items={internshipTypesList}
            selectId="internType"
            inputLabel="實習類型"
            selectValue={formik.values.internType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.internType}
            isTouched={formik.touched.internType}
            isRequired
          />

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
        </div>
        <div className="flex flex-col  justify-center items-center">
          <RatingToggleButtonGroup
            id="difficulty"
            value={formik.values.difficulty}
            onChange={formik.handleChange}
            ratingTitle={internshipJobFindingDifficultyRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.difficulty}
            isTouched={formik.touched.difficulty}
            header="搵工難度"
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
          header={internshipOfferReviewLongQuestionsMapper[1].question}
          value={formik.values.longQOne}
          valueLength={formik.values.longQOne.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQOne}
          isTouched={formik.touched.longQOne}
        />

        <LongQuestionsSection
          name="longQTwo"
          header={internshipOfferReviewLongQuestionsMapper[2].question}
          value={formik.values.longQTwo}
          valueLength={formik.values.longQTwo.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQTwo}
          isTouched={formik.touched.longQTwo}
        />

        <LongQuestionsSection
          name="longQThree"
          header={internshipOfferReviewLongQuestionsMapper[3].question}
          value={formik.values.longQThree}
          valueLength={formik.values.longQThree.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQThree}
          isTouched={formik.touched.longQThree}
        />

        <LongQuestionsSection
          name="longQFour"
          header={internshipOfferReviewLongQuestionsMapper[4].question}
          value={formik.values.longQFour}
          valueLength={formik.values.longQFour.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQFour}
          isTouched={formik.touched.longQFour}
        />

        <LongQuestionsSection
          name="longQFive"
          header={internshipOfferReviewLongQuestionsMapper[5].question}
          placeholder="例如設施，福利，地點，伙食，管理層"
          value={formik.values.longQFive}
          valueLength={formik.values.longQFive.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQFive}
          isTouched={formik.touched.longQFive}
        />

        <LongQuestionsSection
          name="longQSix"
          header={internshipOfferReviewLongQuestionsMapper[6].question}
          placeholder="例如OT程度，語言，同事，氣氛"
          value={formik.values.longQSix}
          valueLength={formik.values.longQSix.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQSix}
          isTouched={formik.touched.longQSix}
        />

        <LongQuestionsSection
          name="longQSeven"
          header={internshipOfferReviewLongQuestionsMapper[7].question}
          placeholder="優點?缺點？對比其他offer？"
          value={formik.values.longQSeven}
          valueLength={formik.values.longQSeven.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQSeven}
          isTouched={formik.touched.longQSeven}
        />

        <LongQuestionsSection
          name="longQEight"
          header={internshipOfferReviewLongQuestionsMapper[8].question}
          value={formik.values.longQEight}
          valueLength={formik.values.longQEight.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQEight}
          isTouched={formik.touched.longQEight}
        />
      </FormPageLayout>
    </>
  )
}

export default InternshipOfferFormPage
