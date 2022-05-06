import React from "react";
import BaseButton from "../common/button/base";
import AuthButtonGroup from "../common/groups/button/auth";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="flex justify-between w-full border-2 p-4 ">
      <div>icon</div>
      <div>
        <BaseButton className="mr-2">Discord</BaseButton>
        <AuthButtonGroup />
      </div>
    </nav>
  );
};

export default Navbar;
