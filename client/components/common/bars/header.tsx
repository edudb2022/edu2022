import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import { BsFillPencilFill } from "react-icons/bs"

const formRoutes = [
  {
    title: "學校評價",
    route: "schoolReview"
  },
  {
    title: "課程評價",
    route: "programmeReview"
  },
  {
    title: "面試情報",
    route: "interviewReview"
  },
  {
    title: "入學情報",
    route: "admissionOffer"
  },
  {
    title: "實習情報",
    route: "internshipOffer"
  },
  {
    title: "工作情報",
    route: "gradJobOffer"
  }
]

const HeaderBar: React.FunctionComponent = () => {
  const router = useRouter()

  return (
    <div className="flex flex-row md:gap-x-2">
      {formRoutes.map((data, key) => {
        return (
          <React.Fragment key={key}>
            <Link href={`/forms/tertiary/${data.route}`}>
              <a
                className={`flex flex-wrap items-center justify-center gap-x-1 text-xs md:text-base py-1 md:px-3   ${
                  router.pathname === "/forms/tertiary/" + data.route
                    ? "text-theme-one-500"
                    : "text-black"
                }`}
              >
                <BsFillPencilFill /> {data.title}
              </a>
            </Link>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default HeaderBar
