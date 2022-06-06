import React from "react";
import BaseReviewCard, { IBaseReviewCardProps } from ".";
import CountUp from "react-countup";
import BasePieChart from "../../charts/pie";
import InternshipPeiChart, {
  IInternshipPeiChartProps,
} from "../../charts/pie/internship";

interface IInternshipReviewCardProps
  extends Partial<IBaseReviewCardProps>,
    IInternshipPeiChartProps {
  salary: number;
}

const InternshipReviewCard: React.FunctionComponent<
  IInternshipReviewCardProps
> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  id,
  salary,
  labels,
  statistic,
}) => {
  return (
    <BaseReviewCard
      id={id!}
      schoolChineseName={schoolChineseName!}
      schoolEnglishName={schoolEnglishName!}
      schoolShortName={schoolShortName!}
      totalReports={totalReports!}
      type={"實習"}
    >
      <div className="relative">
        <div className=" absolute w-full text-center">
          <h6 className="text-gray-500">平均總月入</h6>

          <h1>
            <CountUp
              start={0}
              end={salary}
              duration={1}
              separator=","
              suffix="HKD"
            />
          </h1>
        </div>
        <div className="absolute  w-9/12 md:w-11/12 p-2  ">
          <InternshipPeiChart labels={labels} statistic={statistic} />
        </div>
      </div>
    </BaseReviewCard>
  );
};

export default InternshipReviewCard;
