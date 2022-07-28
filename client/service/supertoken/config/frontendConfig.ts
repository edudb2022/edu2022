import EmailPasswordReact from "supertokens-auth-react/recipe/emailpassword"
import SessionReact from "supertokens-auth-react/recipe/session"
import { appInfo } from "./appInfo"
import { signInAndUpConFig, STlanguageTranslations } from "./AuthUI"

export const frontendConfig = () => {
  return {
    languageTranslations: STlanguageTranslations,
    appInfo,
    recipeList: [
      EmailPasswordReact.init({
        signInAndUpFeature: signInAndUpConFig,
        emailVerificationFeature: {
          mode: "REQUIRED"
        },
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
