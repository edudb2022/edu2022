import React, { PropsWithChildren } from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { FiLogOut } from "react-icons/fi"
import { STSignOut } from "../../../../../service/supertoken/Sesstion"
import { useDispatch } from "react-redux"
import { IUserActionTypes } from "../../../../../state/user/actions"

interface INavDrawerSignOutitemProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignOutitem: React.FunctionComponent<
  INavDrawerSignOutitemProps
> = ({ ...props }) => {
  const dispatch = useDispatch()
  return (
    <BaseNavDraweritem
      icon={<FiLogOut />}
      title="sign out"
      handleClick={async () => {
        await STSignOut()
        dispatch({ type: IUserActionTypes.USER_SIGN_OUT })
      }}
      {...props}
    >
      Sign Out
    </BaseNavDraweritem>
  )
}

export default NavDrawerSignOutitem
