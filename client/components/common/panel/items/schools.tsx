import Link from 'next/link'
import React from 'react'
import BaseReviewCard, { IBaseReviewCardProps } from '../../cards/review'
import SchoolsReviewCards from '../../cards/review/schools'

export interface SchoolsPanelItemsProps {
  index: string
  currentIndex: string
  schools: IBaseReviewCardProps[]
  searchText: string
}

const SchoolsPanelItems: React.FunctionComponent<SchoolsPanelItemsProps> = ({
  index,
  currentIndex,
  schools,
}) => {
  return (
    <>
      {index === currentIndex &&
        schools.map((data) => {
          return (
            <Link key={data.id} href={`/school/tertiary/${data.id}`}>
              <a key={data.id}>
                <SchoolsReviewCards
                  key={data.id}
                  id={data.id}
                  schoolChineseName={data.schoolChineseName}
                  schoolEnglishName={data.schoolEnglishName}
                  totalReports={data.totalReports}
                  type={data.type}
                  schoolShortName={data.schoolShortName}
                />
              </a>
            </Link>
          )
        })}
    </>
  )
}

export default SchoolsPanelItems
