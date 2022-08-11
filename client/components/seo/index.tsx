import Head from "next/head"
import React, { PropsWithChildren } from "react"

interface ISEOProps {}

const SEO: React.FunctionComponent<PropsWithChildren<ISEOProps>> = ({
  children
}) => {
  return <Head>{children}</Head>
}

export default SEO
