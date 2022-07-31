export const appInfo = {
  // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
  appName: "OpenEduDB",
  apiDomain: "http://localhost:3000",
  // websiteDomain:
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000"
  //     : `${process.env.NEXT_PUBLIC_BASE_URL}`,
  websiteDomain:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `${process.env.NEXT_PUBLIC_BASE_URL}`,
  apiBasePath: "/api/auth",
  websiteBasePath: "/auth"
}
