import { useFormik, validateYupSchema } from "formik"
import React, { useEffect } from "react"

import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import TitleTextInput from "../../../components/common/inputs/text/title"
import moment from "moment"
import FormPageLayout from "../../../components/layouts/form"
import {
  schoolCampusRating,
  schoolRecourcesRating,
  schoolPolicyRating,
  shcoolCafeteriaRating,
  schoolSelfOfBelongingRating,
  schoolOverallRating
} from "../../../constants/rating"
import SchoolTypeSelect from "../../../components/common/inputs/select/schoolType"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"

import BaseTextInput from "../../../components/common/inputs/text"
import BaseSelect from "../../../components/common/inputs/select"

import InputContainer from "../../../components/containers/input"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import * as yup from "yup"
import {
  DateValidationSchema,
  RatingValidationSchema,
  SlectCommonValidationSchema,
  TitleValidationSchema
} from "../../../utils/validation/form/schema"
import FormSumitButton from "../../../components/common/buttons/formSubmit"
import FormSection from "../../../components/common/sections/form"
import {
  academicStatusTypesList,
  yearOfStudyTypesList
} from "../../../constants/common"

const SchoolReviewFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    title: "",
    admissionDate: null,
    academicStatus: "",
    campusRating: null,
    resourceRating: null,
    policyRating: null,
    canteenRating: null,
    selfOfBelonging: null,
    overRating: null,
    contactMethod: "",
    contactDetail: "",
    isAnonymous: false,
    longQ: ""
  }
  const schoolReviewFormSchema = yup.object().shape({
    school: SlectCommonValidationSchema,
    title: TitleValidationSchema,
    campusRating: RatingValidationSchema,
    resourceRating: RatingValidationSchema,
    policyRating: RatingValidationSchema,
    canteenRating: RatingValidationSchema,
    selfOfBelonging: RatingValidationSchema,
    overRating: RatingValidationSchema,
    admissionDate: DateValidationSchema
  })

  const handleSubmit = () => {
    console.log("sumit")
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: schoolReviewFormSchema
  })

  console.log(formik.touched.admissionDate)
  return (
    <FormPageLayout
      title="學校評價"
      subTitle="每間學校只可以作一次評價"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
        <SchoolTypeSelect
          selectId="Schhol type"
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
          items={yearOfStudyTypesList}
          selectId="school"
          inputLabel="學校"
          selectValue={formik.values.school}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.school}
          isTouched={formik.touched.school}
          isRequired
        />

        <BaseDatePicker
          label="入學日期"
          value={formik.values.admissionDate}
          // onChange={(newValue: any) => {
          //   formik.setFieldValue(
          //     "admissionDate",
          //     moment(newValue).format("dd/MM/yyyy")
          //   )
          // }}
          onChange={(newValue: any) => {
            formik.setFieldValue(
              "admissionDate",
              moment(newValue).format("YYYY-MM-DD")
            )
          }}
          errorMessages={formik.errors.admissionDate}
          isTouched={formik.touched.admissionDate}
          helpText="只會顯示MM/YYYY"
        />

        <BaseSelect
          name="academicStatus"
          items={academicStatusTypesList}
          selectId="academicStatus"
          inputLabel="現時學業狀態"
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

      <div className="flex flex-col gap-y-6  items-center">
        <RatingToggleButtonGroup
          id="campusRating"
          value={formik.values.campusRating}
          onChange={formik.handleChange}
          ratingTitle={schoolCampusRating}
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
          ratingTitle={schoolRecourcesRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.resourceRating}
          isTouched={formik.touched.resourceRating}
          header="資源及支援"
          subHeader="例如Scholarship數量，Exchange支援，就業及情緒輔導等等"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="policyRating"
          value={formik.values.policyRating}
          onChange={formik.handleChange}
          ratingTitle={schoolPolicyRating}
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
          ratingTitle={shcoolCafeteriaRating}
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
          ratingTitle={schoolSelfOfBelongingRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.selfOfBelonging}
          isTouched={formik.touched.selfOfBelonging}
          header="歸屬感"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="overRating"
          value={formik.values.overRating}
          onChange={formik.handleChange}
          ratingTitle={schoolOverallRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.overRating}
          isTouched={formik.touched.overRating}
          header="整體評價"
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
              placeholder="123"
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

      <LongQuestionsSection
        name="longQ"
        header="請講吓學校設施同環境係點"
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
