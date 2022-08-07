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
  dummyFactculty,
  dummyProgramme,
  dummySchool
} from "../../../constants/dummy"
import {
  commonRating,
  programmeGpaRating,
  progrmmeRecommendRating,
  progrmmeResourcedRating,
  progrmmeWorkLoadRating,
  recommendRating
} from "../../../constants/rating"
import * as yup from "yup"
import {
  SlectCommonValidationSchema,
  TitleValidationSchema,
  RatingValidationSchema
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
    gpaRating: 0,
    resources: 0,
    learningExprience: 0,
    recommendation: 0,
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
    recommendation: RatingValidationSchema
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
    <form onSubmit={formik.handleSubmit}>
      <FormPageLayout pageTitle="課程評價">
        <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
          <BaseSelect
            items={dummySchool}
            selectId="schoolType"
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
            items={dummySchool}
            selectId="school"
            inputLabel="學校"
            selectValue={formik.values.school}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.school}
            isTouched={formik.touched.school}
            isRequired
          />

          <BaseSelect
            name="faculty"
            items={dummyFactculty}
            selectId="faculty"
            inputLabel="學院/分類"
            selectValue={formik.values.faculty}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.faculty}
            isTouched={formik.touched.faculty}
            isRequired
          />

          <BaseSelect
            name="programme"
            items={dummyProgramme}
            selectId="programme"
            inputLabel="課程"
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
            label="入學日期"
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
            inputLabel="現時學業狀態"
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
            ratingTitle={commonRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.programmeStructure}
            isTouched={formik.touched.programmeStructure}
            header="課程結構"
            headerRequired={true}
            subHeader="各科內容質素"
          />

          <RatingToggleButtonGroup
            id="gpaRating"
            value={formik.values.gpaRating}
            onChange={formik.handleChange}
            ratingTitle={programmeGpaRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.gpaRating}
            isTouched={formik.touched.gpaRating}
            header="爛龜(Grade)指數"
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
            header="爆肝指數"
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
            header="學習經歷"
            headerRequired={true}
            subHeader="例如學習氣氛，教師質素等"
          />

          <RatingToggleButtonGroup
            id="resources"
            value={formik.values.resources}
            onChange={formik.handleChange}
            ratingTitle={progrmmeResourcedRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.resources}
            isTouched={formik.touched.resources}
            header="資源"
            subHeader="例如學習資源，如免費影印紙張上限，Exchange 支援等等"
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
            header="推薦指數"
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
