import { useFormik } from "formik"
import { NextPage } from "next"
import React, { useEffect, useState } from "react"
import RatingToggleButtonGroup from "../../../components/common/groups/toggleButton/rating"
import BaseDatePicker from "../../../components/common/inputs/date"
import GpaNumberInput from "../../../components/common/inputs/number/gpa"
import LongQuestionsSection from "../../../components/common/inputs/sections/longQuestions"
import BaseSelect from "../../../components/common/inputs/select"
import { ContactSelect } from "../../../components/common/inputs/select/contact"
import DseGradeSelect from "../../../components/common/inputs/select/dseGrade"
import DseSubjectsSelect from "../../../components/common/inputs/select/dseSubjects"
import BaseTextInput from "../../../components/common/inputs/text"
import TitleTextInput from "../../../components/common/inputs/text/title"
import AnonymousSwitch from "../../../components/common/switch/anonymous"
import InputContainer from "../../../components/containers/input"
import FormPageLayout from "../../../components/layouts/form"

import {
  dressCodeTypesList,
  schoolTypesList,
  applicationTypesList,
  SITENAME,
  currentSchoolTypesList,
  yearOfStudyTypesList
} from "../../../constants/common"

import {
  interviewDifficultyRating,
  interviewExperienceRating
} from "../../../constants/rating"
import * as yup from "yup"
import {
  contactDetailValidationSchema,
  currentFacultyValidationSchema,
  currentProgrammeValidationSchema,
  currentSchoolValidationSchema,
  dateValidationSchema,
  dseSubjectFiveValidationSchema,
  dseSubjectFourValidationSchema,
  dseSubjectGradeFiveValidationSchema,
  dseSubjectGradeFourValidationSchema,
  dseSubjectGradeOneValidationSchema,
  dseSubjectGradeSixValidationSchema,
  dseSubjectGradeThreeValidationSchema,
  dseSubjectGradeTwoValidationSchema,
  dseSubjectOneValidationSchema,
  dseSubjectSixValidationSchema,
  dseSubjectThreeValidationSchema,
  dseSubjectTwoValidationSchema,
  gpaCheckApplicationTypeValidationSchema,
  longQuestionValidationSchema,
  ratingValidationSchema,
  selectCommonValidationSchema,
  titleValidationSchema,
  yearOfStudyValidationSchema
} from "../../../utils/validation/form/schema"
import { ERROR_FORM_MESSAGES } from "../../../utils/validation/errorMessages/form"
import { ApplicationTypeId, CurrentSchoolTypeId } from "../../../types/common"
import InputHeader from "../../../components/common/header/input"
import { interviewReviewLongQuestionsMapper } from "../../../mappers/longQuestion"
import SEO from "../../../components/seo"
import { CommonHelpers } from "../../../helpers"
import useCreateInterviewReview from "../../../hooks/api/useCreateInterviewReview"
import { ICreateInterviewReviewReq, IDseScores } from "../../../types/api"
import { useAppDispatch } from "../../../hooks/common/useAppDispatch"
import { ISystemActionTypes } from "../../../state/system/actions"
import { ErrorMessageStatement } from "../../../constants/errorMessageStatement"
import { useRouter } from "next/router"

const InterviewReviewPage: NextPage = () => {
  const initialValues = {
    schoolType: null,
    school: null,
    faculty: null,
    programme: null,
    title: "",
    interviewDate: CommonHelpers.formatData(new Date(), undefined, true),
    currentSchoolType: null,
    currentSchool: null,
    currentFaculty: null,
    currentProgramme: null,
    yearofStudy: null,
    academicStatus: null,
    experience: null,
    difficulty: null,
    dressCode: null,
    gpa: null,
    applicationType: null,
    dseSubjectOne: null,
    dseSubjectGradeOne: null,
    dseSubjectTwo: null,
    dseSubjectGradeTwo: null,
    dseSubjectThree: null,
    dseSubjectGradeThree: null,
    dseSubjectFour: null,
    dseSubjectGradeFour: null,
    dseSubjectFive: null,
    dseSubjectGradeFive: null,
    dseSubjectSix: null,
    dseSubjectGradeSix: null,
    contactMethod: null,
    contactDetail: null,
    isAnonymous: false,
    longQOne: "",
    longQTwo: "",
    longQThree: "",
    longQFour: "",
    longQFive: "",
    longQSix: "",
    longQSeven: ""
  }
  const interviewReviewFormSchema = yup.object().shape({
    schoolType: selectCommonValidationSchema,
    school: selectCommonValidationSchema,
    faculty: selectCommonValidationSchema,
    programme: selectCommonValidationSchema,
    title: titleValidationSchema,
    interviewDate: dateValidationSchema,
    experience: ratingValidationSchema,
    difficulty: ratingValidationSchema,
    currentSchoolType: selectCommonValidationSchema,
    currentSchool: currentSchoolValidationSchema,
    currentFaculty: currentFacultyValidationSchema,
    currentProgramme: currentProgrammeValidationSchema,
    yearofStudy: yearOfStudyValidationSchema,
    applicationType: selectCommonValidationSchema,
    longQOne: longQuestionValidationSchema,
    longQTwo: longQuestionValidationSchema,
    longQThree: longQuestionValidationSchema,
    longQFour: longQuestionValidationSchema,
    longQFive: longQuestionValidationSchema,
    longQSix: longQuestionValidationSchema,
    longQSeven: longQuestionValidationSchema,
    contactDetail: contactDetailValidationSchema,
    gpa: gpaCheckApplicationTypeValidationSchema,
    dseSubjectOne: dseSubjectOneValidationSchema,
    dseSubjectTwo: dseSubjectTwoValidationSchema,
    dseSubjectThree: dseSubjectThreeValidationSchema,
    dseSubjectFour: dseSubjectFourValidationSchema,
    dseSubjectFive: dseSubjectFiveValidationSchema,
    dseSubjectSix: dseSubjectSixValidationSchema,
    dseSubjectGradeOne: dseSubjectGradeOneValidationSchema,
    dseSubjectGradeTwo: dseSubjectGradeTwoValidationSchema,
    dseSubjectGradeThree: dseSubjectGradeThreeValidationSchema,
    dseSubjectGradeFour: dseSubjectGradeFourValidationSchema,
    dseSubjectGradeFive: dseSubjectGradeFiveValidationSchema,
    dseSubjectGradeSix: dseSubjectGradeSixValidationSchema
  })

  const [isInProgress, setIsInProgress] = useState(false)
  const { mutate } = useCreateInterviewReview()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleSubmit = () => {
    const gpa = formik.values.gpa
      ? parseInt(parseInt(formik.values.gpa).toFixed(2))
      : null
    const completedBestFive =
      formik.values.dseSubjectOne &&
      formik.values.dseSubjectTwo &&
      formik.values.dseSubjectThree &&
      formik.values.dseSubjectFour &&
      formik.values.dseSubjectFive

    const completedBestSix =
      formik.values.dseSubjectOne &&
      formik.values.dseSubjectTwo &&
      formik.values.dseSubjectThree &&
      formik.values.dseSubjectFour &&
      formik.values.dseSubjectFive &&
      formik.values.dseSubjectSix

    const dseScoresData: IDseScores[] = [
      {
        gradeId: formik.values.dseSubjectGradeOne!,
        subjectId: formik.values.dseSubjectOne!
      },
      {
        gradeId: formik.values.dseSubjectGradeTwo!,
        subjectId: formik.values.dseSubjectTwo!
      },
      {
        gradeId: formik.values.dseSubjectGradeThree!,
        subjectId: formik.values.dseSubjectThree!
      },
      {
        gradeId: formik.values.dseSubjectGradeFour!,
        subjectId: formik.values.dseSubjectFour!
      },
      {
        gradeId: formik.values.dseSubjectGradeFive!,
        subjectId: formik.values.dseSubjectFive!
      }
    ]
    if (completedBestSix) {
      const bestSix = {
        gradeId: formik.values.dseSubjectGradeSix!,
        subjectId: formik.values.dseSubjectSix!
      } as IDseScores

      dseScoresData.push(bestSix)
    }

    const dseScores: IDseScores[] | null =
      completedBestFive || completedBestSix ? dseScoresData : null

    const body: ICreateInterviewReviewReq = {
      programId: 6070,
      dressCodeId: formik.values.dressCode
        ? parseInt(formik.values.dressCode)
        : null,
      title: formik.values.title,
      interviewDate: "2018",
      contactMethod: {
        typeId: formik.values.contactMethod,
        value: formik.values.contactDetail
      },
      applicationTypeId: 2,
      currentSchoolTypeId: formik.values.currentSchool
        ? parseInt(formik.values.currentSchool)
        : null,
      currentYearOfStudyId: formik.values.yearofStudy,
      currentProgramId: 6070,
      gpa: gpa,
      dseScores: dseScores,
      userId: 1,
      anonymous: formik.values.isAnonymous,
      longQuestionResponses: [
        {
          questionId: 1,
          text: formik.values.longQOne
        },
        {
          questionId: 2,
          text: formik.values.longQTwo
        },
        {
          questionId: 3,
          text: formik.values.longQThree
        },
        {
          questionId: 4,
          text: formik.values.longQFour
        },
        {
          questionId: 5,
          text: formik.values.longQFive
        },
        {
          questionId: 6,
          text: formik.values.longQSix
        }
      ],
      ratingQuestionResponses: [
        {
          questionId: 1,
          optionId: parseInt(formik.values.experience!)
        },
        {
          questionId: 2,
          optionId: parseInt(formik.values.difficulty!)
        }
      ]
    }

    mutate(body, {
      onSuccess: (res) => {
        console.log("res", res)
        const id = res.data.data.id
        router.push(`/reviewDetail/tertiary/interview/${id}`)
      },
      onError: (err) => {
        console.log("err", err)
        dispatch({
          type: ISystemActionTypes.SYSTEM_ERROR,
          payload: ErrorMessageStatement.FORM_GENERIC_ERROR
        })
      },
      onSettled: () => {
        setIsInProgress(false)
      }
    })
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: interviewReviewFormSchema
  })

  useEffect(() => {
    if (formik.values.applicationType === ApplicationTypeId.JUPAS) {
      formik.values.gpa = null
    }
  }, [formik.values.applicationType])

  const isNotTertiarySchool =
    parseInt(formik.values.currentSchoolType || "") ==
      CurrentSchoolTypeId.SECONDARY_SCHOOL ||
    parseInt(formik.values.currentSchoolType || "") ==
      CurrentSchoolTypeId.RETAKER ||
    parseInt(formik.values.currentSchoolType || "") ==
      CurrentSchoolTypeId.OTHER ||
    formik.values.currentSchoolType === null

  useEffect(() => {
    if (isNotTertiarySchool) {
      formik.values.currentSchool = null
      formik.values.currentProgramme = null
      formik.values.currentFaculty = null
      formik.values.yearofStudy = null
    }
  }, [formik.values.currentSchoolType])

  //calculate dse schore
  const [bestFive, setBestFive] = useState(0)
  const [bestSix, setBestSix] = useState<number | "/">(0)

  useEffect(() => {
    const res = CommonHelpers.DseGradeToScore([
      formik.values.dseSubjectGradeOne,
      formik.values.dseSubjectGradeTwo,
      formik.values.dseSubjectGradeThree,
      formik.values.dseSubjectGradeFour,
      formik.values.dseSubjectGradeFive,
      formik.values.dseSubjectGradeSix
    ])

    setBestFive(res.bestFiveScore)
    setBestSix(res.bestSixScore)
  }, [
    formik.values.dseSubjectGradeOne,
    formik.values.dseSubjectGradeTwo,
    formik.values.dseSubjectGradeThree,
    formik.values.dseSubjectGradeFour,
    formik.values.dseSubjectGradeFive,
    formik.values.dseSubjectGradeSix
  ])
  const handleDateChange = (newValue: Date) => {
    formik.setFieldValue(
      "interviewDate",
      CommonHelpers.formatData(newValue, undefined, true)
    )
  }
  return (
    <>
      <SEO
        title="填寫面試情報"
        description="填寫面試情報! 講低你對面試嘅經歷啦！！"
        openGraph={{
          title: "填寫面試情報",
          description: "填寫面試情報! 講低你對面試嘅經歷啦！！",
          site_name: SITENAME
        }}
      />
      <FormPageLayout
        title="面試情報"
        subTitle="可以提交多次面試情報"
        onSubmit={formik.handleSubmit}
        isInProgress={isInProgress}
      >
        <div className="grid md:grid-cols-4 md:gap-x-9 gap-y-2">
          <BaseSelect
            name="schoolType"
            items={schoolTypesList}
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
            items={schoolTypesList}
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
            items={schoolTypesList}
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
            items={schoolTypesList}
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

        <InputContainer header="最近的教育程度/狀態">
          <div className="grid md:grid-cols-5 md:gap-x-9  gap-y-2 mt-2">
            <BaseSelect
              items={currentSchoolTypesList}
              name="currentSchoolType"
              selectId="currentSchoolType"
              inputLabel="學校類型/學業狀態"
              selectValue={formik.values.currentSchoolType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.currentSchoolType}
              isTouched={formik.touched.currentSchoolType}
              isRequired
            />
            <BaseSelect
              name="currentSchool"
              items={schoolTypesList}
              selectId="currentSchool"
              inputLabel="學校"
              selectValue={formik.values.currentSchool}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.currentSchool}
              isTouched={formik.touched.currentSchool}
              isRequired
              disabled={isNotTertiarySchool}
            />

            <BaseSelect
              name="currentFaculty"
              items={schoolTypesList}
              selectId="currentFaculty"
              inputLabel="學院/分類"
              selectValue={formik.values.currentFaculty}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.currentFaculty}
              isTouched={formik.touched.currentFaculty}
              isRequired
              disabled={isNotTertiarySchool}
            />

            <BaseSelect
              name="currentProgramme"
              items={schoolTypesList}
              selectId="currentProgramme"
              inputLabel="課程"
              selectValue={formik.values.currentProgramme}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.currentProgramme}
              isTouched={formik.touched.currentProgramme}
              isRequired
              disabled={isNotTertiarySchool}
            />
            <BaseSelect
              name="yearofStudy"
              items={yearOfStudyTypesList}
              selectId="yearofStudy"
              inputLabel="現時學業年級"
              selectValue={formik.values.yearofStudy}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.yearofStudy}
              isTouched={formik.touched.yearofStudy}
              isRequired
              disabled={isNotTertiarySchool}
            />
          </div>
        </InputContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-9 gap-y-2">
          <div className="col-span-3">
            <TitleTextInput
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.title}
              isTouched={formik.touched.title}
              valueLength={formik.values.title.length}
              maxLength={25}
              // style={{ width: "100%" }}
            />
          </div>

          <div className="grid">
            <BaseDatePicker
              label="面試日期"
              value={formik.values.interviewDate}
              // onChange={(newValue: any) => {
              //   formik.setFieldValue(
              //     "interviewDate",
              //     dayjs(newValue).format("YYYY-MM-DD")
              //   )
              // }}
              onChange={handleDateChange}
              errorMessages={formik.errors.interviewDate}
              isTouched={formik.touched.interviewDate}
              helpText="只會顯示MM/YYYY"
              // format="DD/MM/YYYY"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-6 justify-center items-center">
          <RatingToggleButtonGroup
            id="experience"
            value={formik.values.experience}
            onChange={formik.handleChange}
            ratingTitle={interviewExperienceRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.experience}
            isTouched={formik.touched.experience}
            header="面試體驗"
            headerRequired={true}
          />

          <RatingToggleButtonGroup
            id="difficulty"
            value={formik.values.difficulty}
            onChange={formik.handleChange}
            ratingTitle={interviewDifficultyRating}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.difficulty}
            isTouched={formik.touched.difficulty}
            header="面試難度"
            headerRequired={true}
          />
        </div>

        <div className="grid  md:grid-cols-4 md:gap-x-9 gap-y-2">
          <BaseSelect
            name="dressCode"
            items={dressCodeTypesList}
            selectId="dressCode"
            inputLabel="衣著要求(Dress Code)"
            selectValue={formik.values.dressCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dressCode}
            isTouched={formik.touched.dressCode}
          />
          <BaseSelect
            name="applicationType"
            items={applicationTypesList}
            selectId="applicationType"
            inputLabel="類型"
            selectValue={formik.values.applicationType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.applicationType}
            isTouched={formik.touched.applicationType}
            isRequired
          />

          <GpaNumberInput
            value={formik.values.gpa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.gpa}
            isTouched={formik.touched.gpa}
            disabled={
              formik.values.applicationType === ApplicationTypeId.JUPAS ||
              formik.values.applicationType === null
            }
            helpText="Non-Jupas/學士請填寫"
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <InputHeader
            header="DSE成績(如適用)"
            subHeader="請至少填寫五科成績 (Best 5)"
          />
          <div>
            <p className="text-md font-bold">{`Best 5: ${bestFive}`}</p>
            <p className="text-md font-bold">{`Best 6: ${bestSix}`}</p>
          </div>
        </div>
        {/* <InputContainer
          header="DSE成績"
          subHeader="請至少填寫五科成績 (Best 5)"
        > */}
        <div className="grid  grid-cols-3 md:grid-cols-4 md:gap-x-9 gap-y-2">
          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科目一"
              name="dseSubjectOne"
              selectId="dseSubjectOne"
              selectValue={formik.values.dseSubjectOne}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectOne}
              isTouched={formik.touched.dseSubjectOne}
            />
          </div>

          <div className="grid col-span-1">
            <DseGradeSelect
              name="dseSubjectGradeOne"
              selectId="dseSubjectGradeOne"
              selectValue={formik.values.dseSubjectGradeOne}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectGradeOne}
              isTouched={formik.touched.dseSubjectGradeOne}
              disabled={!!!formik.values.dseSubjectOne}
            />
          </div>

          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科目二"
              name="dseSubjectTwo"
              selectId="dseSubjectTwo"
              selectValue={formik.values.dseSubjectTwo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectTwo}
              isTouched={formik.touched.dseSubjectTwo}
            />
          </div>

          <DseGradeSelect
            name="dseSubjectGradeTwo"
            selectId="dseSubjectGradeTwo"
            selectValue={formik.values.dseSubjectGradeTwo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dseSubjectGradeTwo}
            isTouched={formik.touched.dseSubjectGradeTwo}
            disabled={!!!formik.values.dseSubjectTwo}
          />
          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科學三"
              name="dseSubjectThree"
              selectId="dseSubjectThree"
              selectValue={formik.values.dseSubjectThree}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectThree}
              isTouched={formik.touched.dseSubjectThree}
            />
          </div>
          <DseGradeSelect
            name="dseSubjectGradeThree"
            selectId="dseSubjectGradeThree"
            selectValue={formik.values.dseSubjectGradeThree}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dseSubjectGradeThree}
            isTouched={formik.touched.dseSubjectGradeThree}
            disabled={!!!formik.values.dseSubjectThree}
          />
          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科目四"
              name="dseSubjectFour"
              selectId="dseSubjectFour"
              selectValue={formik.values.dseSubjectFour}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectFour}
              isTouched={formik.touched.dseSubjectFour}
            />
          </div>
          <DseGradeSelect
            name="dseSubjectGradeFour"
            selectId="dseSubjectGradeFour"
            selectValue={formik.values.dseSubjectGradeFour}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dseSubjectGradeFour}
            isTouched={formik.touched.dseSubjectGradeFour}
            disabled={!!!formik.values.dseSubjectFour}
          />
          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科目五"
              name="dseSubjectFive"
              selectId="dseSubjectFive"
              selectValue={formik.values.dseSubjectFive}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectFive}
              isTouched={formik.touched.dseSubjectFive}
            />
          </div>
          <DseGradeSelect
            name="dseSubjectGradeFive"
            selectId="dseSubjectGradeFive"
            selectValue={formik.values.dseSubjectGradeFive}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dseSubjectGradeFive}
            isTouched={formik.touched.dseSubjectGradeSix}
            disabled={!!!formik.values.dseSubjectFive}
          />

          <div className="grid col-span-2 md:col-span-1">
            <DseSubjectsSelect
              inputLabel="科目六"
              name="dseSubjectSix"
              selectId="dseSubjectSix"
              selectValue={formik.values.dseSubjectSix}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessages={formik.errors.dseSubjectSix}
              isTouched={formik.touched.dseSubjectSix}
            />
          </div>
          <DseGradeSelect
            name="dseSubjectGradeSix"
            selectId="dseSubjectGradeSix"
            selectValue={formik.values.dseSubjectGradeSix}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessages={formik.errors.dseSubjectGradeSix}
            isTouched={formik.touched.dseSubjectGradeSix}
            disabled={!!!formik.values.dseSubjectSix}
          />
        </div>
        {/* </InputContainer> */}

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

        <InputHeader
          header="詳細問題 !"
          headerClassName="text-2xl font-black"
          subHeader="內容愈詳盡愈能夠幫到其他人，歡迎大家寫千字文！！！"
          subHeaderClassName="text-base"
        />
        <LongQuestionsSection
          name="longQOne"
          header={interviewReviewLongQuestionsMapper[1].question}
          value={formik.values.longQOne}
          valueLength={formik.values.longQOne.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQOne}
          isTouched={formik.touched.longQOne}
        />

        <LongQuestionsSection
          name="longQTwo"
          header={interviewReviewLongQuestionsMapper[2].question}
          value={formik.values.longQTwo}
          valueLength={formik.values.longQTwo.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQTwo}
          isTouched={formik.touched.longQTwo}
        />

        <LongQuestionsSection
          name="longQThree"
          header={interviewReviewLongQuestionsMapper[3].question}
          value={formik.values.longQThree}
          valueLength={formik.values.longQThree.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQThree}
          isTouched={formik.touched.longQThree}
        />

        <LongQuestionsSection
          name="longQFour"
          header={interviewReviewLongQuestionsMapper[4].question}
          placeholder="個人/小組？題目內容？面試咗幾耐？"
          value={formik.values.longQFour}
          valueLength={formik.values.longQFour.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQFour}
          isTouched={formik.touched.longQFour}
        />

        <LongQuestionsSection
          name="longQFive"
          header={interviewReviewLongQuestionsMapper[5].question}
          placeholder="例如:入學準備/選課策略"
          value={formik.values.longQFive}
          valueLength={formik.values.longQFive.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQFive}
          isTouched={formik.touched.longQFive}
        />

        <LongQuestionsSection
          name="longQSeven"
          header={interviewReviewLongQuestionsMapper[6].question}
          value={formik.values.longQSeven}
          valueLength={formik.values.longQSeven.length}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessages={formik.errors.longQSeven}
          isTouched={formik.touched.longQSeven}
        />
      </FormPageLayout>
    </>
  )
}
export default InterviewReviewPage
