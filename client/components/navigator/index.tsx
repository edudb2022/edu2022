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

const Navbar: React.FunctionComponent = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const { isLogin } = useAppSelector((state) => state.user)

  const handleClick = (e: any) => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={`flex flex-col  w-full   p-2 ${
        router.pathname === "/" ? "bg-[#FFF5EC]" : "bg-[#F1F2F2]"
      }`}
    >
      <div className="flex justify-between p-2">
        <Link href={"/"}>
          <a className="text-theme-one-500 stroke-black font-black text-4xl">
            Bauu4
          </a>
        </Link>

        <div className="flex-row gap-x-4 h-full hidden md:flex ">
          <DiscordButton />
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

      <div>
        <HeaderBar />
      </div>
    </nav>
  )
}

export default Navbar
