import { useFormik } from "formik"
import React, { useEffect } from "react"
import BaseSalaryNumberInput from "../../../components/common/inputs/number/baseSalary"
import BonusNumberInput from "../../../components/common/inputs/number/Bonus"
import StockOptionNumberInput from "../../../components/common/inputs/number/stockOption"
import TitleTextInput from "../../../components/common/inputs/text/title"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import BaseDatePicker from "../../../components/common/inputs/date"
import moment from "moment"
import BaseTextInput from "../../../components/common/inputs/text"
import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import { recommendRating } from "../../../constants/rating"
import BaseNumberInput from "../../../components/common/inputs/number"
import FormPageLayout from "../../../components/layouts/form"
import BaseSelect from "../../../components/common/inputs/select"

import { schoolTypeOptions } from "../../../constants/school"
import InputContainer from "../../../components/containers/input"
import {
  honorTypesIdList,
  jobSourceOptions,
  jobSourceTypesList,
  schoolTypesList
} from "../../../constants/common"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import FormSumitButton from "../../../components/common/buttons/formSubmit"
import {
  DateValidationSchema,
  longQuestionValidationSchema,
  RatingValidationSchema,
  SalaryValidationSchema,
  SlectCommonValidationSchema,
  TitleValidationSchema
} from "../../../utils/validation/form/schema"
import * as yup from "yup"
import InputHeader from "../../../components/common/header/input"
import { gradJobOfferOfferReviewLongQuestionsMapper } from "../../../mappers/longQuestion"

const GradJobOfferFormPage: React.FunctionComponent = () => {
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
    hope: 0,
    honour: "",
    industry: "",
    jobSource: "",
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

  const handleSubmit = () => {
    console.log("sumit")
  }

  const gradJobOfferFormSchema = yup.object().shape({
    schoolType: SlectCommonValidationSchema,
    school: SlectCommonValidationSchema,
    faculty: SlectCommonValidationSchema,
    programme: SlectCommonValidationSchema,
    title: TitleValidationSchema,
    jobTitle: TitleValidationSchema,
    offerRecievedDate: DateValidationSchema,
    companyName: TitleValidationSchema,
    industry: SlectCommonValidationSchema,
    baseSalary: SalaryValidationSchema,
    bonus: SalaryValidationSchema,
    hope: RatingValidationSchema,
    difficulty: RatingValidationSchema,
    stockOption: SalaryValidationSchema,
    applicaiotnType: SlectCommonValidationSchema,
    offerType: SlectCommonValidationSchema,
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

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: gradJobOfferFormSchema
  })

  useEffect(() => {
    formik.values.totalSalary =
      formik.values.baseSalary + formik.values.stockOption + formik.values.bonus
  }, [formik.values.baseSalary, formik.values.stockOption, formik.values.bonus])

  return (
    <FormPageLayout
      title="工作情報"
      subTitle="可以提交多次工作情報"
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
        // style={{ width: "100%" }}
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
          items={honorTypesIdList}
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
          ratingTitle={recommendRating}
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
          ratingTitle={recommendRating}
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
  )
}

export default GradJobOfferFormPage
