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
    <div className="flex flex-row gap-x-2  shadow-lg ">
      {formRoutes.map((data) => {
        return (
          <>
            <Link href={`/forms/tertiary/${data.route}`}>
              <a className="flex flex-row  justify-center items-center text-xs md:text-base px-1 py-3 md:p-3 text-black hover:bg-[#87cefa]">
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
