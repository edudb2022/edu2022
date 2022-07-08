import { useFormik } from "formik"
import moment from "moment"
import React from "react"
import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import SchoolTypeSelect from "../../../components/common/inputs/select/schoolType"
import BaseTextInput from "../../../components/common/inputs/text"
import TitleTextInput from "../../../components/common/inputs/text/title"
import FormPageLayout from "../../../components/layouts/form"
import { recommendRating } from "../../../constants/rating"

const AdmissionOfferFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    title: "",
    offerDate: moment(new Date()).format("YYYY-MM-DD"),
    campusRating: 0,
    resourceRating: 0,
    policyRating: 0,
    canteenRating: 0,
    selfOfBelonging: 0,
    overRating: 0,
    longQ: ""
  }

  const handleSubmit = () => {
    console.log("sumit")
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit
  })
  return (
    <FormPageLayout>
      <div className="grid grid-cols-2">
        <SchoolTypeSelect
          selectId="schoolType"
          inputLabel="Schhol type"
          selectValue={formik.values.schoolType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.schoolType}
          isTouched={formik.touched.schoolType}
          fullWidth
        />
        {/* school select */}
        <SchoolTypeSelect
          selectId="schoolType"
          inputLabel="Schhol type"
          selectValue={formik.values.schoolType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.schoolType}
          isTouched={formik.touched.schoolType}
          fullWidth
        />
      </div>

      <div className="flex flex-row justify-evenly">
        <TitleTextInput
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.title}
          isTouched={formik.touched.title}
        />
        <BaseDatePicker
          label="offerDate (YYYY-MM-DD)"
          value={formik.values.offerDate}
          onChange={(newValue: any) => {
            formik.setFieldValue(
              "offerDate",
              moment(newValue).format("YYYY-MM-DD")
            )
          }}
          // format="DD/MM/YYYY"
        />
      </div>
      {/* 
  <div className="flex flex-wrap flex-row justify-center items-center gap-x-10 gap-y-5"> */}
      <div className="flex flex-col justify-center items-center">
        <RatingToggleButtonGroup
          id="campusRating"
          value={formik.values.campusRating}
          onChange={formik.handleChange}
          ratingTitle={recommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.campusRating}
          isTouched={formik.touched.campusRating}
          header="學校設施及環境"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="resourceRating"
          value={formik.values.resourceRating}
          onChange={formik.handleChange}
          ratingTitle={recommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.resourceRating}
          isTouched={formik.touched.resourceRating}
          header="資源及支援"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="policyRating"
          value={formik.values.policyRating}
          onChange={formik.handleChange}
          ratingTitle={recommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.policyRating}
          isTouched={formik.touched.policyRating}
          header="學校政策"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="canteenRating"
          value={formik.values.canteenRating}
          onChange={formik.handleChange}
          ratingTitle={recommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.canteenRating}
          isTouched={formik.touched.canteenRating}
          header="校內膳食"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="selfOfBelonging"
          value={formik.values.selfOfBelonging}
          onChange={formik.handleChange}
          ratingTitle={recommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.selfOfBelonging}
          isTouched={formik.touched.selfOfBelonging}
          header="selfOfBelonging"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="overRating"
          value={formik.values.overRating}
          onChange={formik.handleChange}
          ratingTitle={recommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.overRating}
          isTouched={formik.touched.overRating}
          header="整體評價"
          headerRequired={true}
        />
      </div>

      <ContactSelect variant="standard" />
      <BaseTextInput label="contect detail" />

      <LongQuestionsSection
        name="longQ"
        header="HWta doasdasdoin thabtp oandiosanidoans"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />
    </FormPageLayout>
  )
}

export default AdmissionOfferFormPage
