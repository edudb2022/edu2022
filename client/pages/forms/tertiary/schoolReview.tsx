import { useFormik } from "formik"
import React, { useEffect } from "react"

import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import TitleTextInput from "../../../components/common/inputs/text/title"
import moment from "moment"
import FormPageLayout from "../../../components/layouts/form"
import { recommendRating } from "../../../constants/rating"
import SchoolTypeSelect from "../../../components/common/inputs/select/schoolType"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import {
  EmailPasswordAuth,
  redirectToAuth
} from "supertokens-auth-react/recipe/emailpassword"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import dynamic from "next/dynamic"
import SuperTokens from "supertokens-auth-react"
import { STRedirectToSignIn } from "../../../service/supertoken/function"
import BaseTextInput from "../../../components/common/inputs/text"

const SchoolReviewFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    title: "",
    admissionDate: moment(new Date()).format("DD/MM/YYYY"),
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

  console.table(formik.values)
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
          variant="outlined"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.title}
          isTouched={formik.touched.title}
        />
        <BaseDatePicker
          label="Admission Year (MM/DD/YYYY)"
          value={formik.values.admissionDate}
          onChange={(newValue: any) => {
            formik.setFieldValue(
              "admissionDate",
              moment(newValue).format("MM/DD/YYYY")
            )
          }}
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
      <BaseTextInput variant="standard" label="contect detail" />

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

export default SchoolReviewFormPage
