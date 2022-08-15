import Link from "next/link"
import React from "react"
import BaseDrawer, { IBaseDrawerProps } from "."
import { useAppSelector } from "../../../hooks/common/useAppSelector"
import NavDrawerDiscorditem from "./items/nav/discord"
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
      <div className="w-full p-4">
        <h2 className="mb-3">Icon</h2>
        <div className="w-60">
          {isLogin ? (
            <div>
              <NavDrawerProfileItem />
              <NavDrawerSignOutitem />
            </div>
          ) : (
            <div>
              <NavDrawerSignInitem />
              <NavDrawerSignUpitem />
              <NavDrawerDiscorditem />
            </div>
          )}
        </div>
      </div>
    </BaseDrawer>
  )
}

export default NavDrawer
