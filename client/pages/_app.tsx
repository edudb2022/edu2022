import "../styles/globals.css"
import type { AppProps } from "next/app"
// import CommonLayout from "../components/layouts";
import { Provider } from "react-redux"
import { store } from "../state/store"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import { useState } from "react"
import { ReactQueryDevtools } from "react-query/devtools"
import CommonLayout from "../components/layouts"
import SuperTokensReact from "supertokens-auth-react"
// import { frontendConfig } from "../service/supertoken/config/frontendConfig"
import EmailPassword from "supertokens-auth-react/recipe/emailpassword"
// import ProtectedPage from "./protectedPage"
import React from "react"
import { frontendConfig } from "../service/supertoken/config/frontendConfig"
import dynamic from "next/dynamic"
import { EmailPasswordAuth } from "supertokens-auth-react/recipe/emailpassword"
// import { frontendConfig } from "../service/supertoken/config/frontendConfig"

if (typeof window !== "undefined") {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig())
}

interface IMyAppProps extends AppProps {}

const MyApp: React.FunctionComponent<IMyAppProps> = ({
  Component,
  pageProps
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 300000,
          }
        }
      })
  )
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
  )
}

export default MyApp
