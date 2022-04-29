import "../styles/globals.css";
import type { AppProps } from "next/app";
import CommonLayout from "../components/layouts/common";

interface IMyAppProps extends AppProps {
  children: any;
}

const MyApp: React.FunctionComponent<IMyAppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <CommonLayout>
      <Component {...pageProps} />;
    </CommonLayout>
  );
};

export default MyApp;
