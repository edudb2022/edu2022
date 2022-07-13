import { Grid } from "@mui/material"
import { useFormik } from "formik"
import moment from "moment"
import React from "react"
import CommonToggleButtonGroup from "../../../components/common/groups/toggleButton/common"
import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import BaseSelect from "../../../components/common/inputs/select"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import SchoolTypeSelect from "../../../components/common/inputs/select/schoolType"
import BaseTextInput from "../../../components/common/inputs/text"
import TitleTextInput from "../../../components/common/inputs/text/title"
import FormPageLayout from "../../../components/layouts/form"
import {
  dummyFactculty,
  dummyProgramme,
  dummySchool
} from "../../../constants/dummy"
import { recommendRating } from "../../../constants/rating"
import { schoolTypeOptions } from "../../../constants/school"

const AdmissionOfferFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    faculty: "",
    programme: "",
    title: "",
    offerDate: moment(new Date()).format("YYYY-MM-DD"),
    currentSchoolType: "",
    currentSchool: "",
    currentFaculty: "",
    currentProgramme: "",
    exprience: 0,
    difficulty: 0,
    offerType: "",
    contactMethod: "",
    contactDetail: "",
    longQ: ""
  }

  const handleSubmit = () => {
    console.log("sumit")
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit
  })

  console.log(formik.values)
  return (
    <FormPageLayout pageTitle="123">
      <div className="grid md:grid-cols-4 md:gap-x-9">
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
        />
      </div>
      <div className="grid grid-cols-2 md:gap-x-9 items-end">
        <TitleTextInput
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.title}
          isTouched={formik.touched.title}
          // style={{ width: "100%" }}

          required
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
        />
      </div>
      {/* 
  <div className="flex flex-wrap flex-row justify-center items-center gap-x-10 gap-y-5"> */}
      <div className="flex flex-col justify-center items-center">
        <RatingToggleButtonGroup
          id="exprience"
          value={formik.values.exprience}
          onChange={formik.handleChange}
          ratingTitle={recommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.exprience}
          isTouched={formik.touched.exprience}
          header="Interview experience"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="difficulty"
          value={formik.values.difficulty}
          onChange={formik.handleChange}
          ratingTitle={recommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.difficulty}
          isTouched={formik.touched.difficulty}
          header="Interview difficulty"
          headerRequired={true}
        />
      </div>
      <div className="grid md:grid-cols-4 md:gap-x-9">
        <BaseSelect
          items={schoolTypeOptions}
          name="currentSchoolType"
          selectId="currentSchoolType"
          inputLabel="currentSchoolType"
          selectValue={formik.values.currentSchoolType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.currentSchoolType}
          isTouched={formik.touched.currentSchoolType}
        />
        <BaseSelect
          name="currentSchool"
          items={dummySchool}
          selectId="currentSchool"
          inputLabel="currentSchool"
          selectValue={formik.values.currentSchool}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.currentSchool}
          isTouched={formik.touched.currentSchool}
        />

        <BaseSelect
          name="currentFaculty"
          items={dummyFactculty}
          selectId="currentFaculty"
          inputLabel="currentFaculty"
          selectValue={formik.values.currentFaculty}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.currentFaculty}
          isTouched={formik.touched.currentFaculty}
        />

        <BaseSelect
          name="currentProgramme"
          items={dummyProgramme}
          selectId="currentProgramme"
          inputLabel="currentProgramme"
          selectValue={formik.values.currentProgramme}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.currentProgramme}
          isTouched={formik.touched.currentProgramme}
        />
      </div>
      <div className="grid md:grid-cols-4  md:gap-x-9 md:items-end ">
        <div className="grid  col-span-3 md:col-span-1">
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
        <div className="md:col-span-3 col-span-3 ">
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

      <CommonToggleButtonGroup
        id="offerType"
        value={formik.values.offerType}
        onChange={formik.handleChange}
        // ratingTitle={recommendRating}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.offerType}
        isTouched={formik.touched.offerType}
        header="offerType"
        headerRequired={true}
      />

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
