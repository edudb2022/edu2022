import { Button, Menu, MenuItem } from "@mui/material"
import React from "react"
import { MdArrowDropDown } from "react-icons/md"
import { UserName } from "../../../../types/common"
// import UserIcon from "../../icons/user"
import Session from "supertokens-auth-react/recipe/session"
import { STSignOut } from "../../../../service/supertoken/Sesstion"
import { useDispatch } from "react-redux"
import { type } from "os"
import { IUserActionTypes } from "../../../../state/user/actions"
import UserIcon from "../../icons/User"

interface ILoginGroupProps {
  username: UserName
}
const LoginGroup: React.FunctionComponent<ILoginGroupProps> = ({
  username
}) => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSignOut = async () => {
    await STSignOut()
    dispatch({ type: IUserActionTypes.USER_SIGN_OUT })
  }
  return (
    <div className="flex flex-row justify-content items-center  border-2">
      <UserIcon />
      <h6>{username}</h6>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MdArrowDropDown />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default LoginGroup
