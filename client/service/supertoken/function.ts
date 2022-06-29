import { redirectToAuth } from "supertokens-auth-react/recipe/emailpassword"

const STRedirectToSignIn = () => {
  return redirectToAuth({ show: "signin" })
}

const STRedirectToSignUp = () => {
  return redirectToAuth({ show: "signup" })
}

export { STRedirectToSignIn, STRedirectToSignUp }
