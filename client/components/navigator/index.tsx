import Link from "next/link";
import React, { useState } from "react";
import HeaderBar from "../common/bars/header";

import DiscordButton from "../common/buttons/discord";
import AuthButtonGroup from "../common/groups/button/auth";
import { FiAlignJustify } from "react-icons/fi";
import { Drawer, Popper } from "@mui/material";

const Navbar: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex flex-col  w-full bg-[#FFF5EC]  p-2 ">
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

        <Drawer anchor={"right"} open={isOpen} onClose={handleClick}>
          <div className="w-28">123</div>
        </Drawer>
      </div>

      <div>
        <HeaderBar />
      </div>
    </nav>
  );
};

export default Navbar;
