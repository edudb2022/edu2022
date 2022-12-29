import React from "react"
import { IDseScoresRes } from "../../../types/api"
import { CommonCopyRight } from "../../../utils/copyRight/common"
import TextTag from "../tags/text"

interface IDseScoreListProps {
  dseScores?: IDseScoresRes[] | null
  className?: string
}

const DseScoreList: React.FunctionComponent<IDseScoreListProps> = ({
  dseScores,
  className
}) => {
  return (
    <div className={`flex flex-col w-full items-center ${className}`}>
      <p className="text-center text-gray-400">DSE成績</p>
      {dseScores && (
        <div className="grid grid-cols-2 place-items-center gap-y-4  md:flex md:flex-row md:justify-center md:gap-x-8 w-full mt-4">
          {dseScores.map((data) => {
            return (
              <TextTag
                header={data.subject.displayText}
                title={data.grade.displayText}
                type="themeOne"
              />
            )
          })}
        </div>
      )}

      {!dseScores && (
        <div className="text-sx font-medium text-gray-400 mt-4">
          {`${CommonCopyRight.NOT_APPLICABLE} / ${CommonCopyRight.NOT_WILLING_TO_RESPONSE}`}
        </div>
      )}
    </div>
  )
}

export default DseScoreList
