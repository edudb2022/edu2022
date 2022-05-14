import type { NextPage } from "next";
import HeaderBar from "../components/common/bars/header";

import SearchInput from "../components/common/inputs/base/search";
import SchoolsPanel from "../components/common/panel/schools";

const Home: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <div className="p-2">
        <div className="flex justify-center">
          <SearchInput />
        </div>
        <SchoolsPanel />
      </div>
    </>
  );
};

export default Home;
