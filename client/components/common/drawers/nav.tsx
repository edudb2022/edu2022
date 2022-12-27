import Link from "next/link"
import React from "react"
import BaseDrawer, { IBaseDrawerProps } from "."
import { useAppSelector } from "../../../hooks/common/useAppSelector"
import GoodTurtleIcon from "../icons/logo"
import NavDrawerDiscorditem from "./items/nav/discord"
import NavDrawerInstagramItem from "./items/nav/Instagram"
import NavDrawerProfileItem from "./items/nav/profile"

import NavDrawerSignInitem from "./items/nav/signIn"
import NavDrawerSignUpitem from "./items/nav/signUp"
import NavDrawerSignOutitem from "./items/nav/singnOut"

interface INavDrawer extends IBaseDrawerProps {
  isOpen: boolean
}

const NavDrawer: React.FunctionComponent<INavDrawer> = ({
  onClose,
  isOpen
}) => {
  const { isLogin } = useAppSelector((state) => state.user)

  return (
    <BaseDrawer anchor="right" open={isOpen} onClose={onClose}>
      <div className="w-full p-4 bg-theme-one-50 h-full ">
        <h2 className="mb-3">
          <GoodTurtleIcon className="text-theme-one-500" />
        </h2>
        <div className="w-36 ">
          {isLogin && (
            <div>
              <NavDrawerProfileItem />
              <NavDrawerSignOutitem />
            </div>
          )}

          {!isLogin && (
            <div>
              <NavDrawerSignInitem />
              <NavDrawerSignUpitem />
              {/* <NavDrawerDiscorditem /> */}
              <NavDrawerInstagramItem />
            </div>
          )}
        </div>
      </div>
    </BaseDrawer>
  )
}

export default NavDrawer
