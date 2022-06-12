import Link from "next/link"
import React, { useState } from "react"
import HeaderBar from "../common/bars/header"

import DiscordButton from "../common/buttons/discord"
import AuthButtonGroup from "../common/groups/button/auth"
import { FiAlignJustify } from "react-icons/fi"
import { useRouter } from "next/router"
import NavDrawer from "../common/drawers/nav"

const Navbar: React.FunctionComponent = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

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
          <a>icon</a>
        </Link>

        <div className="flex-row gap-x-1 h-full hidden md:flex ">
          <DiscordButton />
          <AuthButtonGroup />
        </div>
        <button onClick={handleClick} className="flex  md:hidden">
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
