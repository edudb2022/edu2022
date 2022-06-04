import Link from "next/link";
import React from "react";
import { GrFormAdd } from "react-icons/gr";

const formRoutes = [
  {
    title: "學校評價",
    route: "schoolReview",
  },
  {
    title: "課程評價",
    route: "programmeReview",
  },
  {
    title: "入學offer",
    route: "admissionOffer",
  },
  {
    title: "實習offer",
    route: "internshipOffer",
  },
  {
    title: "工作offer",
    route: "gradJobOffer",
  },
];

const HeaderBar: React.FunctionComponent = () => {
  return (
    <div className="flex flex-row gap-x-2 ">
      {formRoutes.map((data) => {
        return (
          <>
            <Link href={`/forms/tertiary/${data.route}`}>
              <a className="flex flex-row  justify-center items-center text-xs md:text-base py-1 px-3  text-[#333333] ">
                <GrFormAdd /> {data.title}
              </a>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default HeaderBar;
