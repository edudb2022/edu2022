import { useFormik } from "formik"
import moment from "moment"
import React, { useEffect } from "react"
import FormSumitButton from "../../../components/common/buttons/formSubmit"
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
  internTypeOptions,
  jobSourceOptions,
  schoolTypesList
} from "../../../constants/common"

import { recommendRating } from "../../../constants/rating"
import { schoolTypeOptions } from "../../../constants/school"
import * as yup from "yup"
import {
  DateValidationSchema,
  longQuestionValidationSchema,
  RatingValidationSchema,
  SalaryValidationSchema,
  SlectCommonValidationSchema,
  TitleValidationSchema
} from "../../../utils/validation/form/schema"
import InputHeader from "../../../components/common/header/input"
import { internshipOfferReviewLongQuestionsMapper } from "../../../mappers/longQuestion"

const InternshipOfferFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    faculty: "",
    programme: "",
    offerRecievedDate: null,
    title: "",
    jobTitle: "",
    companyName: "",
    baseSalary: 0,
    bonus: 0,
    stockOption: 0,
    totalSalary: 0,
    difficulty: 0,
    industry: "",
    jobSource: "",
    internType: "",
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
    longQEight: ""
  }

  const handleSubmit = () => {
    console.log()
  }

  const intershipOfferFormSchema = yup.object().shape({
    schoolType: SlectCommonValidationSchema,
    school: SlectCommonValidationSchema,
    faculty: SlectCommonValidationSchema,
    programme: SlectCommonValidationSchema,
    title: TitleValidationSchema,
    jobTitle: TitleValidationSchema,
    offerRecievedDate: DateValidationSchema,
    companyName: TitleValidationSchema,
    industry: SlectCommonValidationSchema,
    internType: SlectCommonValidationSchema,
    baseSalary: SalaryValidationSchema,
    bonus: SalaryValidationSchema,
    stockOption: SalaryValidationSchema,
    difficulty: RatingValidationSchema,
    applicaiotnType: SlectCommonValidationSchema,
    offerType: SlectCommonValidationSchema,
    longQOne: longQuestionValidationSchema,
    longQTwo: longQuestionValidationSchema,
    longQThree: longQuestionValidationSchema,
    longQFour: longQuestionValidationSchema,
    longQFive: longQuestionValidationSchema,
    longQSix: longQuestionValidationSchema,
    longQSeven: longQuestionValidationSchema,
    longQEight: longQuestionValidationSchema
  })

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: intershipOfferFormSchema
  })

  useEffect(() => {
    formik.values.totalSalary =
      formik?.values?.baseSalary +
      formik?.values?.stockOption +
      formik.values.bonus
  }, [formik.values.baseSalary, formik.values.stockOption, formik.values.bonus])

  return (
    <FormPageLayout
      title="實習情報"
      subTitle="可以提交多次實習情報"
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
      <TitleTextInput
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.title}
        isTouched={formik.touched.title}
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
        />
        <BaseTextInput
          label="公司名稱"
          name="companyName"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isTouched={formik.touched.companyName}
          errorMessages={formik.errors.companyName}
        />

        <BaseDatePicker
          label="收Offer日期"
          value={formik.values.offerRecievedDate}
          onChange={(newValue: any) => {
            formik.setFieldValue(
              "offerRecievedDate",
              moment(newValue).format("YYYY-MM-DD")
            )
          }}
          errorMessages={formik.errors.offerRecievedDate}
          isTouched={formik.touched.offerRecievedDate}
          helpText="只會顯示MM/YYYY"
        />
      </div>
      <InputContainer
        header="總年薪(HKD)"
        subHeader={`${formik.values.totalSalary} HKD`}
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
      <div className="grid md:grid-cols-3 md:gap-x-9 mt-4 gap-y-2">
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

        <BaseSelect
          name="industry"
          items={schoolTypesList}
          selectId="industry"
          inputLabel="行業"
          selectValue={formik.values.industry}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.industry}
          isTouched={formik.touched.industry}
          isRequired
        />

        <BaseSelect
          name="jobSource"
          items={schoolTypesList}
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
          ratingTitle={recommendRating}
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
  )
}

export default InternshipOfferFormPage
