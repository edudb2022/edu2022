import { useFormik } from "formik"
import moment from "moment"
import React from "react"
import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import BaseSelect from "../../../components/common/inputs/select"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import BaseTextInput from "../../../components/common/inputs/text"
import TitleTextInput from "../../../components/common/inputs/text/title"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import InputContainer from "../../../components/containers/input"
import FormPageLayout from "../../../components/layouts/form"

import {
  commonRating,
  programmeGpaRating,
  programmeStructureRating,
  progrmmeRecommendRating,
  progrmmeResourcedRating,
  progrmmeWorkLoadRating,
  recommendRating
} from "../../../constants/rating"
import * as yup from "yup"
import {
  SlectCommonValidationSchema,
  TitleValidationSchema,
  RatingValidationSchema,
  DateValidationSchema
} from "../../../utils/validation/form/schema"
import FormSumitButton from "../../../components/common/buttons/formSubmit"
import {
  academicStatusTypesList,
  schoolTypesList
} from "../../../constants/common"
import InputHeader from "../../../components/common/header/input"

const ProgrammeReviewFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    faculty: "",
    programme: "",
    title: "",
    admissionDate: null,
    academicStatus: "",
    workload: null,
    programmeStructure: null,
    gpaRating: null,
    resources: null,
    learningExprience: null,
    recommendation: null,
    contactMethod: "",
    contactDetail: "",
    isAnonymous: false,
    longQ: ""
  }

  const programmeReviewFormSchema = yup.object().shape({
    schoolType: SlectCommonValidationSchema,
    school: SlectCommonValidationSchema,
    faculty: SlectCommonValidationSchema,
    programme: SlectCommonValidationSchema,
    title: TitleValidationSchema,
    progrmme: RatingValidationSchema,
    workload: RatingValidationSchema,
    programmeStructure: RatingValidationSchema,
    teachingQuality: RatingValidationSchema,
    resources: RatingValidationSchema,
    learningExprience: RatingValidationSchema,
    recommendation: RatingValidationSchema,
    admissionDate: DateValidationSchema
  })
  const handleSubmit = () => {
    console.log("sumit")
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: programmeReviewFormSchema
  })

  return (
    <FormPageLayout
      title="????????????"
      subTitle="????????????????????????????????????"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
        <BaseSelect
          items={schoolTypesList}
          selectId="schoolType"
          inputLabel="????????????"
          selectValue={formik.values.schoolType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.schoolType}
          isTouched={formik.touched.schoolType}
          isRequired
        />

        <BaseSelect
          name="school"
          items={schoolTypesList}
          selectId="school"
          inputLabel="??????"
          selectValue={formik.values.school}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.school}
          isTouched={formik.touched.school}
          isRequired
        />

        <BaseSelect
          name="faculty"
          items={schoolTypesList}
          selectId="faculty"
          inputLabel="??????/??????"
          selectValue={formik.values.faculty}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.faculty}
          isTouched={formik.touched.faculty}
          isRequired
        />

        <BaseSelect
          name="programme"
          items={schoolTypesList}
          selectId="programme"
          inputLabel="??????"
          selectValue={formik.values.programme}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.programme}
          isTouched={formik.touched.programme}
          isRequired
        />
      </div>

      <div className="grid md:grid-cols-4 md:gap-x-9">
        <div className="col-span-2">
          <TitleTextInput
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.title}
            isTouched={formik.touched.title}
          />
        </div>

        <BaseDatePicker
          label="????????????"
          value={formik.values.admissionDate}
          onChange={(newValue: any) => {
            formik.setFieldValue(
              "admissionDate",
              moment(newValue).format("YYYY-MM-DD")
            )
          }}
          errorMessages={formik.errors.admissionDate}
          isTouched={formik.touched.admissionDate}
          helpText="????????????MM/YYYY"
          // format="DD/MM/YYYY"
        />

        <BaseSelect
          name="academicStatus"
          items={academicStatusTypesList}
          selectId="academicStatus"
          inputLabel="??????????????????"
          selectValue={formik.values.academicStatus}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.academicStatus}
          isTouched={formik.touched.academicStatus}
        />
      </div>

      <div className="flex flex-col gap-y-6 justify-center items-center">
        <RatingToggleButtonGroup
          id="programmeStructure"
          value={formik.values.programmeStructure}
          onChange={formik.handleChange}
          ratingTitle={programmeStructureRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.programmeStructure}
          isTouched={formik.touched.programmeStructure}
          header="????????????"
          headerRequired={true}
          subHeader="?????????????????????????????????"
        />

        <RatingToggleButtonGroup
          id="gpaRating"
          value={formik.values.gpaRating}
          onChange={formik.handleChange}
          ratingTitle={programmeGpaRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.gpaRating}
          isTouched={formik.touched.gpaRating}
          header="??????(Grade)??????"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="workload"
          value={formik.values.workload}
          onChange={formik.handleChange}
          ratingTitle={progrmmeWorkLoadRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.workload}
          isTouched={formik.touched.workload}
          header="????????????"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="learningExprience"
          value={formik.values.learningExprience}
          onChange={formik.handleChange}
          ratingTitle={commonRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.learningExprience}
          isTouched={formik.touched.learningExprience}
          header="????????????"
          headerRequired={true}
          subHeader="????????????????????????????????????"
        />

        <RatingToggleButtonGroup
          id="resources"
          value={formik.values.resources}
          onChange={formik.handleChange}
          ratingTitle={progrmmeResourcedRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.resources}
          isTouched={formik.touched.resources}
          header="??????"
          subHeader="???????????????????????????????????????????????????Exchange ????????????"
          headerRequired={true}
        />

        <RatingToggleButtonGroup
          id="recommendation"
          value={formik.values.recommendation}
          onChange={formik.handleChange}
          ratingTitle={progrmmeRecommendRating}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.recommendation}
          isTouched={formik.touched.recommendation}
          header="????????????"
          headerRequired={true}
        />
      </div>

      <InputContainer
        header="????????????"
        subHeader="??????????????????????????????????????????"
      >
        <div className="grid   md:grid-cols-4  md:gap-x-9 md:items-end gap-y-2 mt-2">
          <div className="grid  md:col-span-1">
            <ContactSelect
              name="contactMethod"
              selectId="contactMethod"
              inputLabel="????????????"
              selectValue={formik.values.contactMethod}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.contactMethod}
              isTouched={formik.touched.contactMethod}
            />
          </div>
          <div className="md:col-span-3 ">
            <BaseTextInput
              label="Email/????????????/Username"
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

      <InputHeader
        header="???????????? !"
        headerClassName="text-2xl font-black"
        subHeader="???????????????????????????????????????????????????????????????????????????"
        subHeaderClassName="text-base"
      />
      <LongQuestionsSection
        name="longQ"
        header="???????????????????????????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="?????????(Grade)??????????????????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="???????????????????????????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="???????????????????????????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="?????????????????????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="?????????????????????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="??????????????????????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="?????????????????????"
        placeholder="??????:????????????/????????????"
        value={formik.values.longQ}
        valueLength={formik.values.longQ.length}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessages={formik.errors.longQ}
        isTouched={formik.touched.longQ}
      />

      <LongQuestionsSection
        name="longQ"
        header="?????????????"
        placeholder={``}
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

export default ProgrammeReviewFormPage
