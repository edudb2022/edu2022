import React from "react";
import AuthButtonGroup from "../common/buttongroup/auth";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="w-full border-2 p-4">
      <div>icon</div>
      <AuthButtonGroup />
    </nav>
  );
};

export default Navbar;
