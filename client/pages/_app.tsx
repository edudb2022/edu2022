import "../styles/globals.css";
import type { AppProps } from "next/app";
import CommonLayout from "../components/layouts/common";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
interface IMyAppProps extends AppProps {}

const MyApp: React.FunctionComponent<IMyAppProps> = ({
  Component,
  pageProps,
}) => {
  const [queryClient] = useState(
    () => new QueryClient()
    // ({
    //   defaultOptions: {
    //     queries: {
    //       staleTime: Infinity,
    //     },
    //   },
    // })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <CommonLayout>
            <Component {...pageProps} />
          </CommonLayout>
        </Provider>

        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
