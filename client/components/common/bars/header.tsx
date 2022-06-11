import Link from "next/link"
import React from "react"
import { GrFormAdd } from "react-icons/gr"
// import { useRouter } from "next/router";

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
    title: "面試評價",
    route: "interviewReview",
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
]

const HeaderBar: React.FunctionComponent = () => {
  // const router = useRouter();
  // console.log(router.pathname);
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
        )
      })}
    </div>
  )
}

export default HeaderBar
