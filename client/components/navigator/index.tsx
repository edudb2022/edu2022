import React from "react";
import BaseButton from "../common/buttons";

import DiscordButton from "../common/buttons/discord";
import AuthButtonGroup from "../common/groups/button/auth";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="flex justify-between w-full  p-4 ">
      <div>icon</div>
      <div className="flex flex-row gap-x-1 h-full ">
        <DiscordButton />
        <AuthButtonGroup />
      </div>
    </nav>
  );
};

export default Navbar;
