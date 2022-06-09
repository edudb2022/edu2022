import React, { PropsWithChildren } from "react";
import ReviewHeaderContainer, {
  IReviewHeaderContainerProps,
} from "./reviewHeader";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import BaseButton from "../common/buttons";
import LikeAndDisLikeButtonGroup from "../common/buttonGroups/likeAndDisLike";
import LikeRating, { ILikeRatingProps } from "../common/specical/likeRating";

interface IDetailReviewHeader
  extends IReviewHeaderContainerProps,
    ILikeRatingProps {
  ContainerClassName?: string;
}

const DetailReviewHeader: React.FunctionComponent<
  PropsWithChildren<IDetailReviewHeader>
> = ({ children, score, ContainerClassName, ...props }) => {
  return (
    <ReviewHeaderContainer {...props}>
      {children}
      <div
        className={`flex flex-row items-center justify-around text-l ${ContainerClassName}`}
      >
        <BaseButton className=" bg-red-500 text-white gap-x-1">
          <MdOutlineReportGmailerrorred />
          {"舉報"}
        </BaseButton>

        <LikeRating score={score} />
        <div>
          <LikeAndDisLikeButtonGroup />
        </div>
      </div>
    </ReviewHeaderContainer>
  );
};

export default DetailReviewHeader;
