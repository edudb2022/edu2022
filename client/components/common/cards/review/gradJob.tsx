import React from 'react'
import BaseReviewCard, { IBaseReviewCardProps } from '.'
import CountUp from 'react-countup'
import ReviewRankingCircularBar from '../../circularBar/reviewRanking'
import { reviewColor } from '../../../../constants/reviewRanking'

const currentValue = 1
interface IGradJobOfferReviewCardProps extends Partial<IBaseReviewCardProps> {
  salary: number
  hope: number
}
const GradJobOfferReviewCard: React.FunctionComponent<
  IGradJobOfferReviewCardProps
> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  id,
  salary,
  hope,
}) => {
  return (
    <BaseReviewCard
      id={id!}
      schoolChineseName={schoolChineseName!}
      schoolEnglishName={schoolEnglishName!}
      schoolShortName={schoolShortName!}
      totalReports={totalReports!}
      type={'實習'}
    >
      <div className='relative'>
        <div className=' absolute w-full text-center'>
          <h6 className='text-gray-500'>平均年薪</h6>
          <h1>
            <CountUp
              start={0}
              end={salary}
              duration={1}
              separator=','
              suffix='HKD'
            />
          </h1>
          <div className='absolute  w-full  px-20 mt-2 md:px-16  '>
            <ReviewRankingCircularBar
              color={reviewColor[Math.round(hope) - 1]}
              currentValue={hope}
            />
          </div>
        </div>
      </div>
    </BaseReviewCard>
  )
}

export default GradJobOfferReviewCard
