import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

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
  const router = useRouter()

  return (
    <div className="flex flex-row gap-x-2 ">
      {formRoutes.map((data, key) => {
        return (
          <React.Fragment key={key}>
            <Link href={`/forms/tertiary/${data.route}`}>
              <a
                className={`flex flex-row  justify-center items-center text-xs md:text-base py-1 px-3 ${
                  router.pathname === "/forms/tertiary/" + data.route
                    ? "text-theme-one-500"
                    : "text-black"
                }`}
              >
                + {data.title}
              </a>
            </Link>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default HeaderBar
