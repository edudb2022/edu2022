import React, { PropsWithChildren } from "react"
import BaseNavDraweritem, { IBaseNavDrawerItemProps } from "."
import { useAppDispatch } from "../../../../../hooks/common/useAppDispatch"
import { STSignOut } from "../../../../../service/supertoken/Session"
import { IUserActionTypes } from "../../../../../state/user/actions"
import trackingEvent from "../../../../../utils/services/GoogleAnalytics/tracking"
import LogOutIcon from "../../../icons/logout"

interface INavDrawerSignOutitemProps extends Partial<IBaseNavDrawerItemProps> {}

const NavDrawerSignOutitem: React.FunctionComponent<
  INavDrawerSignOutitemProps
> = ({ ...props }) => {
  const dispatch = useAppDispatch()

  const handleSignOut = async () => {
    await STSignOut()
    dispatch({ type: IUserActionTypes.USER_SIGN_OUT })
    trackingEvent.customEvent("click_signout_nav_drawer")
  }
  return (
    <BaseNavDraweritem
      icon={<LogOutIcon />}
      title="登出"
      handleClick={handleSignOut}
      {...props}
    />
  )
}

export default NavDrawerSignOutitem
