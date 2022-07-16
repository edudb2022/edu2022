import { useFormik } from "formik"
import moment from "moment"
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
import InputContainer from "../../../components/containers/input"
import FormPageLayout from "../../../components/layouts/form"
import {
  dummyFactculty,
  dummyProgramme,
  dummySchool
} from "../../../constants/dummy"
import { recommendRating } from "../../../constants/rating"
import * as yup from "yup"
import {
  SlectCommonValidationSchema,
  TitleValidationSchema
} from "../../../utils/validation/form/schema"
import FormSumitButton from "../../../components/common/buttons/formSubmit"

const ProgrammeReviewFormPage: React.FunctionComponent = () => {
  const initialValues = {
    schoolType: "",
    school: "",
    faculty: "",
    programme: "",
    title: "",
    admissionDate: moment(new Date()).format("YYYY-MM-DD"),
    academicStatus: "",
    workload: 0,
    programmeStructure: 0,
    teachingQuality: 0,
    resources: 0,
    learningExprience: 0,
    recommendation: 0,
    contactMethod: "",
    contactDetail: "",
    isAnonymous: false,
    longQ: ""
  }

  const programmeReviewFormSchema = yup.object().shape({
    progrmme: SlectCommonValidationSchema,
    workload: TitleValidationSchema,
    programmeStructure: TitleValidationSchema,
    teachingQuality: TitleValidationSchema,
    resources: TitleValidationSchema,
    learningExprience: TitleValidationSchema,
    recommendation: TitleValidationSchema,
    title: TitleValidationSchema
  })
  const handleSubmit = () => {
    console.log("sumit")
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: programmeReviewFormSchema
  })

  console.table(formik.values)
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormPageLayout pageTitle="Programme Revi">
        <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
          <BaseSelect
            items={dummySchool}
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

        <div className="flex flex-col gap-y-6 justify-center items-center">
          <RatingToggleButtonGroup
            id="programmeStructure"
            value={formik.values.programmeStructure}
            onChange={formik.handleChange}
            ratingTitle={recommendRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.programmeStructure}
            isTouched={formik.touched.programmeStructure}
            header="programmeStructure"
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="teachingQuality"
            value={formik.values.teachingQuality}
            onChange={formik.handleChange}
            ratingTitle={recommendRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.teachingQuality}
            isTouched={formik.touched.teachingQuality}
            header="teachingQuality"
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="workload"
            value={formik.values.workload}
            onChange={formik.handleChange}
            ratingTitle={recommendRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.workload}
            isTouched={formik.touched.workload}
            header="workload"
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="learningExprience"
            value={formik.values.learningExprience}
            onChange={formik.handleChange}
            ratingTitle={recommendRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.learningExprience}
            isTouched={formik.touched.learningExprience}
            header="learningExprience"
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="resources"
            value={formik.values.resources}
            onChange={formik.handleChange}
            ratingTitle={recommendRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.resources}
            isTouched={formik.touched.resources}
            header="resources"
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="recommendation"
            value={formik.values.recommendation}
            onChange={formik.handleChange}
            ratingTitle={recommendRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.recommendation}
            isTouched={formik.touched.recommendation}
            header="recommendation"
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

        <div className="flex flex-row justify-center">
          <FormSumitButton />
        </div>
      </FormPageLayout>
    </form>
  )
}

export default ProgrammeReviewFormPage
