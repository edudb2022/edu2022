import Link from "next/link";
import React from "react";

const formRoutes = [
  {
    title: "填學校評價",
    route: "schoolReview",
  },
  {
    title: "填課程評價",
    route: "programmeReview",
  },
  {
    title: "填入學offer",
    route: "admissionOffer",
  },
  {
    title: "填實習offer",
    route: "internshipOffer",
  },
  {
    title: "填工作offer",
    route: "gradJobOffer",
  },
];

const HeaderBar: React.FunctionComponent = () => {
  return (
    <div className="flex flex-row gap-x-2 bg-[#59712B]">
      {formRoutes.map((data) => {
        return (
          <Link href={`/forms/tertiary/${data.route}`}>
            <a className="p-3 text-white hover:bg-[#81B224]">{data.title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderBar;
