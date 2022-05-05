import "../styles/globals.css";
import type { AppProps } from "next/app";
import CommonLayout from "../components/layouts/common";
import { Provider } from "react-redux";
import { store } from "../state/store";

interface IMyAppProps extends AppProps {}

const MyApp: React.FunctionComponent<IMyAppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Provider store={store}>
      <CommonLayout>
        <Component {...pageProps} />;
      </CommonLayout>
    </Provider>
  );
};

export default MyApp;
