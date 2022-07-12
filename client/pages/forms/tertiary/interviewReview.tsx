import { useFormik } from "formik"
import moment from "moment"
import { NextPage } from "next"
import React from "react"
import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import BaseSelect from "../../../components/common/inputs/select"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import SchoolTypeSelect from "../../../components/common/inputs/select/schoolType"
import BaseTextInput from "../../../components/common/inputs/text"
import TitleTextInput from "../../../components/common/inputs/text/title"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import FormPageLayout from "../../../components/layouts/form"
import {
  dummyFactculty,
  dummyProgramme,
  dummySchool
} from "../../../constants/dummy"
import { recommendRating } from "../../../constants/rating"

const InterviewReviewPage: NextPage = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    faculty: "",
    programme: "",
    title: "",
    interviewDate: moment(new Date()).format("YYYY-MM-DD"),
    academicStatus: "",
    exprience: 0,
    difficulty: 0,
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
  return (
    <FormPageLayout pageTitle="123">
      <div className="grid md:grid-cols-4 md:gap-x-9">
        {/* <div className="flex flex-row border-2 gap-x-9"> */}
        <SchoolTypeSelect
          selectId="schoolType"
          inputLabel="Schhol type"
          selectValue={formik.values.schoolType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.schoolType}
          isTouched={formik.touched.schoolType}
        />
        {/* school select */}
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
          name="programmes"
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
      <div className="grid grid-cols-3 md:gap-x-9 items-end">
        <TitleTextInput
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.title}
          isTouched={formik.touched.title}
          // style={{ width: "100%" }}
          className="col-span-3"
          required
        />

        <BaseDatePicker
          label="interviewDate (YYYY-MM-DD)"
          value={formik.values.interviewDate}
          onChange={(newValue: any) => {
            formik.setFieldValue(
              "interviewDate",
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

      <AnonymousSwitch />

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
export default InterviewReviewPage
