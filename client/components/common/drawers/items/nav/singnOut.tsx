import React, { PropsWithChildren } from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { useAppDispatch } from "../../../../../hooks/common/useAppDispatch"
import { STSignOut } from "../../../../../service/supertoken/Sesstion"
import { IUserActionTypes } from "../../../../../state/user/actions"
import LogOutIcon from "../../../icons/logout"

interface INavDrawerSignOutitemProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignOutitem: React.FunctionComponent<
  INavDrawerSignOutitemProps
> = ({ ...props }) => {
  const dispatch = useAppDispatch()
  return (
    <BaseNavDraweritem
      icon={<LogOutIcon />}
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
