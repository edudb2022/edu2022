import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BaseButton from "../components/common/button/base";
import BaseInput from "../components/common/inputs/base";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <BaseInput />
      <h1>123</h1>
    </div>
  );
};

export default Home;
