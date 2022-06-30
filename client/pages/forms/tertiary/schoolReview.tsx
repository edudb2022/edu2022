import { useFormik } from "formik"
import React from "react"
import RatingRadioGroup from "../../../components/common/groups/radio/rating"
import RatingToggleButtonGroup from "../../../components/common/inputs/toggleButtonGroup/rating"

import FormPageLayout from "../../../components/layouts/form"
import { recommendRating } from "../../../constants/rating"

const SchoolReviewFormPage: React.FunctionComponent = () => {
  const initialValues = { overRating: 0 }
  var errors = { title: "123" }

  const handleSubmit = () => {
    console.log()
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit
  })

  console.log(2222, formik.values.overRating)

  const aa = (e) => {
    console.log(333, e.target.value)
  }
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
