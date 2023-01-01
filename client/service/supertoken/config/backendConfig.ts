import EmailPasswordNode from "supertokens-node/recipe/emailpassword"
import SessionNode from "supertokens-node/recipe/session"
import { appInfo } from "./appInfo"
import { TypeInput } from "supertokens-node/types"
import EmailVerification from "supertokens-node/recipe/emailverification"
import Dashboard from "supertokens-node/recipe/dashboard"
import UserMetadata from "supertokens-node/recipe/usermetadata"

export const backendConfig = (): TypeInput => {
  return {
    framework: "express",
    supertokens: {
      // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: `${process.env.NEXT_PUBLIC_SUPERTOKEN_STAGING_URL}`,
      apiKey: `${process.env.NEXT_PUBLIC_SUPERTOKEN_STAGING_API_KEY}`
    },
    appInfo,
    recipeList: [
      EmailPasswordNode.init(),
      SessionNode.init(),
      EmailVerification.init({
        mode: "REQUIRED" // or "OPTIONAL"
      }),
      Dashboard.init({
        apiKey: "coZR7PY6D=FPB0NgaNh-MJ5ujgJZoC"
      }),
      UserMetadata.init()
    ],
    isInServerlessEnv: true
  }
}
