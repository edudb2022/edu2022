import Image from "next/image";
import React, { PropsWithChildren } from "react";
import BaseCard, { IBaseCardProps } from "..";
import { HiOutlineDocumentText } from "react-icons/hi";
import { ID, SchoolName } from "../../../../types/common";

export interface IBaseReviewCardProps extends IBaseCardProps {
  id: ID;
  schoolChineseName: SchoolName;
  schoolEnglishName: SchoolName;
  schoolShortName: SchoolName;
  schoolTypes: string;
  totalReports: number;
}

const BaseReviewCard: React.FunctionComponent<
  PropsWithChildren<IBaseReviewCardProps>
> = ({
  schoolChineseName,
  schoolEnglishName,
  schoolShortName,
  totalReports,
  children,
  schoolTypes,
  id,
}) => {
  return (
    <BaseCard className="flex flex-row w-96 h-60 md:h-72 shadow-lg rounded-2xl ">
      <div className="flex flex-col py-4 justify-between items-center w-1/4 bg-schoolsColor-cuhk rounded-l-2xl">
        <div className="bg-white border-2 rounded-full p-2 m-2 ">
          <Image
            src="/icons/schools/universities/hku.jpg"
            width={50}
            height={50}
            style={{ borderRadius: "40rem" }}
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full  ">
          <div className="border-black  w-4/5 text-center py-2 m-2 bg-white rounded-2xl">
            {schoolShortName.toUpperCase()}
          </div>
          <div className="border-black  w-4/5 text-center py-2 bg-white rounded-2xl">
            {schoolTypes}
          </div>
        </div>
      </div>

      <div className=" relative p-2 w-full">
        <h4>{schoolChineseName}</h4>
        <h6 className="text-gray-500">{schoolEnglishName}</h6>

        {children}
        <p className="absolute bottom-2   right-2  flex flex-row items-center">
          {totalReports} <HiOutlineDocumentText />
        </p>
      </div>
    </BaseCard>
  );
};

export default BaseReviewCard;
