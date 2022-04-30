import Link from "next/link";
import React from "react";

interface INavLinkProps {
  route: string;
  title: string;
}

const NavLink: React.FunctionComponent<INavLinkProps> = ({ route, title }) => {
  return (
    <Link href={`/${route}`}>
      <a>{title}</a>
    </Link>
  );
};

export default NavLink;
