import Image from "next/image";
import React, { PropsWithChildren } from "react";

export interface IReviewHeaderContainerProps {
  ChineseTitle: string;
  EnglishTitle: string;
  ShortTitle?: string;
  schoolShortName: string;
  layoutClassName?: string;
}

const ReviewHeaderContainer: React.FunctionComponent<
  PropsWithChildren<IReviewHeaderContainerProps>
> = ({
  ShortTitle,
  ChineseTitle,
  EnglishTitle,
  schoolShortName,
  children,
  layoutClassName,
}) => {
  return (
    <div>
      <div className={`flex justify-center items-center ${layoutClassName}`}>
        <div className="flex flex-row">
          <div>
            <Image
              src={`/icons/schools/universities/${schoolShortName}.jpg`}
              width={"100rem"}
              height={"100rem"}
              alt={`${ShortTitle}`}
            />
          </div>
          <div className="flex  flex-col  items-center justify-center ">
            <h1>
              {ChineseTitle} {ShortTitle && `|${ShortTitle}`}
            </h1>

            <h1 className="text-gray-400">{EnglishTitle} </h1>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ReviewHeaderContainer;
