import { useFormik } from "formik"
import React from "react"

import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"

import FormPageLayout from "../../../components/layouts/form"
import { recommendRating } from "../../../constants/rating"

const SchoolReviewFormPage: React.FunctionComponent = () => {
  const initialValues = { overRating: 0 }

  const handleSubmit = () => {
    console.log()
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit
  })

  console.log(formik.values.overRating)
  return (
    <FormPageLayout>
      <RatingToggleButtonGroup
        id="overRating"
        value={formik.values.overRating}
        onChange={formik.handleChange}
        className="w-full"
        size="large"
        ratingTitle={recommendRating}
      />
    </FormPageLayout>
  )
}

export default SchoolReviewFormPage
