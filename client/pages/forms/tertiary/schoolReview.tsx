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
import BaseSelect from "../../../components/common/inputs/select"
import {
  dummyFactculty,
  dummyProgramme,
  dummySchool
} from "../../../constants/dummy"
import InputContainer from "../../../components/containers/input"
import AnonymousSwitch from "../../../components/common/switch/anonymous"

const SchoolReviewFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    title: "",
    admissionDate: moment(new Date()).format("YYYY-MM-DD"),
    academicStatus: "",
    campusRating: 0,
    resourceRating: 0,
    policyRating: 0,
    canteenRating: 0,
    selfOfBelonging: 0,
    overRating: 0,
    contactMethod: "",
    contactDetail: "",
    isAnonymous: false,
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
    <FormPageLayout pageTitle="School Review">
      <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
        <SchoolTypeSelect
          selectId="schoolType"
          inputLabel="Schhol type"
          selectValue={formik.values.schoolType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.schoolType}
          isTouched={formik.touched.schoolType}
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
        />

        <BaseDatePicker
          label="Admission Year (YYYY-MM-DD)"
          value={formik.values.admissionDate}
          onChange={(newValue: any) => {
            formik.setFieldValue(
              "admissionDate",
              moment(newValue).format("YYYY-MM-DD")
            )
          }}
          // format="DD/MM/YYYY"
        />

        <BaseSelect
          name="academicStatus"
          items={dummyProgramme}
          selectId="academicStatus"
          inputLabel="academicStatus"
          selectValue={formik.values.academicStatus}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.academicStatus}
          isTouched={formik.touched.academicStatus}
        />
      </div>

      <TitleTextInput
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.title}
        isTouched={formik.touched.title}
      />

      <div className="flex flex-col gap-y-6 justify-center items-center">
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
          subHeader="eg. Scholarship, career support..."
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
