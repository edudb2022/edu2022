import { Backdrop, CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import LoadingBackDrop from "../components/common/backdrops/loading";
import SearchInput from "../components/common/inputs/base/search";
import SchoolsPanel from "../components/common/panel/schools";

const Home: NextPage = () => {
  return (
    <div className="p-2">
      <div className="flex justify-center">
        <SearchInput />
      </div>

      <SchoolsPanel />
    </div>
  );
};

export default Home;
