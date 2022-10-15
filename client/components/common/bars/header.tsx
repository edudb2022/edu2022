import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import { BsFillPencilFill } from "react-icons/bs"
import PencilIcon from "../icons/pencil"
// import PencilIcon from "../icons/Pencil"

const formRoutes = [
  {
    titleFormer: "學校",
    titleLatter: "評價",
    route: "schoolReview"
  },
  {
    titleFormer: "課程",
    titleLatter: "評價",
    route: "programmeReview"
  },
  {
    titleFormer: "面試",
    titleLatter: "情報",
    route: "interviewReview"
  },
  {
    titleFormer: "入學",
    titleLatter: "情報",
    route: "admissionOffer"
  },
  {
    titleFormer: "實習",
    titleLatter: "情報",
    route: "internshipOffer"
  },
  {
    titleFormer: "工作",
    titleLatter: "情報",
    route: "gradJobOffer"
  }
]

const HeaderBar: React.FunctionComponent = () => {
  const router = useRouter()

  return (
    <div className="flex flex-row gap-x-2 lg:gap-x-4">
      {formRoutes.map((data, key) => {
        return (
          <React.Fragment key={key}>
            <Link href={`/forms/tertiary/${data.route}`}>
              <a
                className={`flex flex-wrap items-center justify-center text-xs lg:text-base  lg:px-3  ${
                  router.pathname === "/forms/tertiary/" + data.route
                    ? "text-theme-one-500"
                    : "text-black"
                }`}
              >
                <PencilIcon />

                <span className="ml-1">{data.titleFormer}</span>
                <span className="hidden md:block">{data.titleLatter}</span>
              </a>
            </Link>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default HeaderBar
