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
import { internTypeOptions, jobSourceOptions } from "../../../constants/common"
import {
  dummyFactculty,
  dummyProgramme,
  dummySchool
} from "../../../constants/dummy"
import { recommendRating } from "../../../constants/rating"
import { schoolTypeOptions } from "../../../constants/school"
import * as yup from "yup"
import {
  RatingValidationSchema,
  SalaryValidationSchema,
  SlectCommonValidationSchema,
  TitleValidationSchema
} from "../../../utils/validation/form/schema"

const InternshipOfferFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    faculty: "",
    programme: "",
    offerRecievedDate: new Date(),
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
    isAnonymous: false
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
    companyName: TitleValidationSchema,
    industry: SlectCommonValidationSchema,
    internType: SlectCommonValidationSchema,
    baseSalary: SalaryValidationSchema,
    bonus: SalaryValidationSchema,
    stockOption: SalaryValidationSchema,
    difficulty: RatingValidationSchema,
    applicaiotnType: SlectCommonValidationSchema,
    offerType: SlectCommonValidationSchema
  })

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: intershipOfferFormSchema
  })

  console.log(formik.values)
  useEffect(() => {
    formik.values.totalSalary =
      formik.values.baseSalary + formik.values.stockOption + formik.values.bonus
  }, [formik.values.baseSalary, formik.values.stockOption, formik.values.bonus])

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormPageLayout pageTitle="INtern">
        <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
          <BaseSelect
            items={schoolTypeOptions}
            name="schoolType"
            selectId="schoolType"
            inputLabel="Schhol type"
            selectValue={formik.values.schoolType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.schoolType}
            isTouched={formik.touched.schoolType}
            isRequired
          />
          <BaseSelect
            name="school"
            items={dummySchool}
            selectId="school"
            inputLabel="school"
            selectValue={formik.values.school}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.school}
            isTouched={formik.touched.school}
            isRequired
          />

          <BaseSelect
            name="faculty"
            items={dummyFactculty}
            selectId="faculty"
            inputLabel="faculty"
            selectValue={formik.values.faculty}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.faculty}
            isTouched={formik.touched.faculty}
            isRequired
          />

          <BaseSelect
            name="programme"
            items={dummyProgramme}
            selectId="programme"
            inputLabel="programme"
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

        <div className="grid md:grid-cols-3 md:gap-x-9 items-end  gap-y-2">
          <BaseTextInput
            label="jobTitle"
            name="jobTitle"
            value={formik.values.jobTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.jobTitle}
            errorMessages={formik.errors.jobTitle}
          />
          <BaseTextInput
            label="companyName"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.companyName}
            errorMessages={formik.errors.companyName}
          />

          <BaseDatePicker
            label="offerRecievedDate (YYYY-MM-DD)"
            value={formik.values.offerRecievedDate}
            onChange={(newValue: any) => {
              formik.setFieldValue(
                "offerRecievedDate",
                moment(newValue).format("YYYY-MM-DD")
              )
            }}
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
            items={internTypeOptions}
            selectId="internType"
            inputLabel="internType"
            selectValue={formik.values.internType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.internType}
            isTouched={formik.touched.internType}
            isRequired
          />

          <BaseSelect
            name="industry"
            items={dummyFactculty}
            selectId="industry"
            inputLabel="industry"
            selectValue={formik.values.industry}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.industry}
            isTouched={formik.touched.industry}
            isRequired
          />

          <BaseSelect
            name="jobSource"
            items={jobSourceOptions}
            selectId="jobSource"
            inputLabel="Where do you find the work oppotunity?"
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
            header="difficulty"
            headerRequired={true}
          />
        </div>
        <InputContainer
          header="contact method"
          subHeader="Indicate the desired communication method"
        >
          <div className="grid   md:grid-cols-4  md:gap-x-9 md:items-end gap-y-2 mt-2">
            <div className="grid  md:col-span-1">
              <ContactSelect
                placeholder="123"
                name="contactMethod"
                selectId="contactMethod"
                inputLabel="contactMethod"
                selectValue={formik.values.contactMethod}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errorMessages={formik.errors.contactMethod}
                isTouched={formik.touched.contactMethod}
              />
            </div>
            <div className="md:col-span-3 ">
              <BaseTextInput
                label="contect detail"
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
        <h1 className="font-black ml-6">Long Question</h1>
        <LongQuestionsSection
          isTouched={true}
          errorMessages={"123"}
          title="123"
          minRows={5}
        />
        <div className="flex flex-row justify-center">
          <FormSumitButton />
        </div>
      </FormPageLayout>
    </form>
  )
}

export default InternshipOfferFormPage
