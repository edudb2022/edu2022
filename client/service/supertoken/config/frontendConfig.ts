import EmailPasswordReact from "supertokens-auth-react/recipe/emailpassword"
import { appInfo } from "./appInfo"
import { signInAndUpConFig, STlanguageTranslations } from "./AuthUI"
import EmailVerification from "supertokens-auth-react/recipe/emailverification"
import SessionReact from "supertokens-auth-react/recipe/session"

export const frontendConfig = () => {
  return {
    languageTranslations: STlanguageTranslations,
    appInfo,
    recipeList: [
      EmailVerification.init({
        mode: "REQUIRED" // or "OPTIONAL"
      }),
      EmailPasswordReact.init({
        signInAndUpFeature: signInAndUpConFig,
        style: {
          superTokensBranding: {
            display: "none"
          }
        }
      }),
      SessionReact.init()
    ]
  }
}
