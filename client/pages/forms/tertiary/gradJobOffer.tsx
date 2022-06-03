import { useFormik } from "formik";
import React, { useEffect } from "react";
import BaseSalaryNumberInput from "../../../components/common/inputs/number/baseSalary";
import BonusNumberInput from "../../../components/common/inputs/number/Bonus";
import StockOptionNumberInput from "../../../components/common/inputs/number/stockOption";
import TitleTextInput from "../../../components/common/inputs/text/title";
import BaseTestArea from "../../../components/common/inputs/textArea";
import LongQuestionsSection from "../../../components/common/sections/longQuestions";

const GradJobOfferFormPage: React.FunctionComponent = () => {
  const initialValues = {
    SchoolName: "",
    ProgrammeName: "",
    title: "",
    companyName: "",
    baseSalary: 0,
    bonus: 0,
    stockOption: 0,
    totalSalary: 0,
    industries: "",
    offerDate: "",
    isAnonymous: false,
    hope: null,
    contact: "",
  };
  var errors = { title: "123" };

  const handleSubmit = () => {
    console.log();
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validate: (values) => {
      if (!values.title) {
        errors.title = "on99";
      }

      return errors;
    },
  });

  useEffect(() => {
    formik.values.totalSalary =
      formik.values.baseSalary +
      formik.values.stockOption +
      formik.values.bonus;
  }, [
    formik.values.baseSalary,
    formik.values.stockOption,
    formik.values.bonus,
  ]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="p-12">
        <TitleTextInput
          variant="outlined"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isTouched={formik.touched.title}
          errorMessages={formik.errors.title}
        />
        <h1>總年薪 : {formik.values.totalSalary}</h1>

        <div className="flex flex-col">
          <BaseSalaryNumberInput
            variant="outlined"
            name="baseSalary"
            value={formik.values.baseSalary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.baseSalary}
            errorMessages={formik.errors.baseSalary}
          />
          <BonusNumberInput
            variant="outlined"
            value={formik.values.bonus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.bonus}
            errorMessages={formik.errors.bonus}
          />
          <StockOptionNumberInput
            variant="outlined"
            value={formik.values.stockOption}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.stockOption}
            errorMessages={formik.errors.stockOption}
          />
        </div>
        <LongQuestionsSection
          isTouched={true}
          errorMessages={"123"}
          title="123"
          minRows={3}
        />
      </form>
    </div>
  );
};

export default GradJobOfferFormPage;
