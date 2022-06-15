import { Rating } from '@mui/material'
import React from 'react'
import BaseReviewDetailCard, { IBaseReviewDetailCardProps } from '.'

interface IProgrammeReviewDetailCardProps extends IBaseReviewDetailCardProps {
  value: number
  label: string
}

const ProgrammeReviewDetailCard: React.FunctionComponent<
  IProgrammeReviewDetailCardProps
> = ({ value, label, ...props }) => {
  return (
    <BaseReviewDetailCard {...props}>
      <div className='flex flex-col-reverse md:flex-row h-full items-center justify-center gap-x-4'>
        <Rating name='read-only' value={value} readOnly className='text-5xl' />
        <h1>{label}</h1>
      </div>
    </BaseReviewDetailCard>
  )
}

export default ProgrammeReviewDetailCard
