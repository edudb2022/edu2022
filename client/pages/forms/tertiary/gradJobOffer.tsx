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

const GradJobOfferFormPage: React.FunctionComponent = () => {
  const initialValues = {
    SchoolName: "",
    ProgrammeName: "",
    OfferRecievedDate: "",
    title: "",
    jobTitle: "",
    companyName: "",
    baseSalary: 0,
    bonus: 0,
    stockOption: 0,
    totalSalary: 0,
    industries: "",
    isAnonymous: false,
    difficulty: 0,
    hope: 0,
    contact: ""
  }
  var errors = { title: "123" }

  const handleSubmit = () => {
    console.log()
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validate: (values) => {
      if (!values.title) {
        errors.title = "on99"
      }

      return errors
    }
  })

  console.log(formik.values)
  useEffect(() => {
    formik.values.totalSalary =
      formik.values.baseSalary + formik.values.stockOption + formik.values.bonus
  }, [formik.values.baseSalary, formik.values.stockOption, formik.values.bonus])

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="p-12">
        <TitleTextInput
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isTouched={formik.touched.title}
          errorMessages={formik.errors.title}
        />

        <BaseDatePicker
          value={formik.values.OfferRecievedDate}
          label="Offer recieve date"
          onChange={(newValue: any) => {
            formik.setFieldValue(
              "OfferRecievedDate",
              moment(newValue).format("MM/DD/YYYY")
            )
          }}
          // onBlur={formik.handleBlur}
          // isTouched={formik.touched.baseSalary}
          // errorMessages={formik.errors.baseSalary}
        />
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
        <h1>總年薪 : {formik.values.totalSalary}</h1>

        <div className="flex flex-col md:flex-row w-full gap-x-3 gap-y-6 justify-end">
          <BaseSalaryNumberInput
            name="baseSalary"
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

        <RatingToggleButtonGroup
          id="hope"
          value={formik.values.hope}
          onChange={formik.handleChange}
          ratingTitle={recommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.hope}
          isTouched={formik.touched.hope}
          header="hope"
          headerRequired={true}
        />
        <LongQuestionsSection
          isTouched={true}
          errorMessages={"123"}
          title="123"
          minRows={5}
        />
      </form>
    </div>
  )
}

export default GradJobOfferFormPage
