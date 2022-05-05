import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BaseInput from "../components/common/inputs/base";
import SearchInput from "../components/common/inputs/base/search";

import rootActions from "../state/actions";

const Home: NextPage = () => {
  return (
    <div>
      <SearchInput />
      <h1>123</h1>
      <h2 className="good"> 123</h2>
    </div>
  );
};

export default Home;
