import { NextSeo, NextSeoProps } from "next-seo"
import React from "react"

interface ISEOProps extends NextSeoProps {}

const SEO: React.FunctionComponent<ISEOProps> = ({ ...props }) => {
  return <NextSeo {...props} />
}

export default SEO
