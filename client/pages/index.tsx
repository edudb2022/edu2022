import type { NextPage } from "next";

import BaseInput from "../components/common/inputs/base";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <BaseInput />
      <h1>123</h1>
      <h2 className="good"> 123</h2>
    </div>
  );
};

export default Home;
