import Link from "next/link"
import React, { useState } from "react"
import HeaderBar from "../common/bars/header"

import DiscordButton from "../common/buttons/discord"
import AuthButtonGroup from "../common/groups/button/auth"
import { FiAlignJustify } from "react-icons/fi"
import { useRouter } from "next/router"
import NavDrawer from "../common/drawers/nav"
import { signOut } from "supertokens-auth-react/recipe/emailpassword"
import LoginGroup from "../common/groups/login.tsx"
import { useAppSelector } from "../../hooks/common/useAppSelector"
import GoodTurtleIcon from "../common/icons/logo"
import trackingEvent from "../../utils/services/GoogleAnalytics/tracking"
import BaseButton from "../common/buttons"
import InstagramIcon from "../common/icons/instagram"

const Navbar: React.FunctionComponent = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const { isLogin } = useAppSelector((state) => state.user)

  const handleClick = (e: any) => {
    setIsOpen(!isOpen)
  }

  const handleDiscordClick = () => {
    trackingEvent.customEvent("click_discord_nav")
  }
  return (
    <nav
      className={`flex flex-col  w-full  p-2 ${
        router.pathname === "/" ? "bg-theme-one-50" : "bg-[#F1F2F2]"
      }`}
    >
      <div className="flex justify-between p-2">
        <Link href={"/"}>
          <a className="text-theme-one-500 stroke-black font-black text-lg md:text-3xl">
            <GoodTurtleIcon />
          </a>
        </Link>

        <div className="flex-row gap-x-4 h-full hidden md:flex ">
          <BaseButton
            className={`gap-x-1 text-base bg-gradient-to-r from-[#4c68d7] via-[#bc2a8d]  to-[#fbad50]  text-white rounded-3xl `}
          >
            {/* <BaseButton
            className={`gap-x-1 text-sm bg-gradient-to-br bg-[#bc2a8d] ]  text-white rounded-3xl `}
          > */}

            <InstagramIcon className="text-2xl" />

            <span className="text-mono">@goodtutle.fyi</span>
          </BaseButton>
          {isLogin ? (
            <>
              <LoginGroup username="213" />
            </>
          ) : (
            <AuthButtonGroup />
          )}
        </div>
        <button onClick={handleClick} className="flex md:hidden">
          <FiAlignJustify />
        </button>

        <NavDrawer isOpen={isOpen} onClose={handleClick} />
      </div>

      <HeaderBar />
    </nav>
  )
}

export default Navbar
