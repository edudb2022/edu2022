import { redirectToAuth } from "supertokens-auth-react"

const STRedirectToSignIn = () => {
  return redirectToAuth({ show: "signin" })
}

const STRedirectToSignUp = () => {
  return redirectToAuth({ show: "signup" })
}

export { STRedirectToSignIn, STRedirectToSignUp }
