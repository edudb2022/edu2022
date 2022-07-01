import EmailPasswordNode from "supertokens-node/recipe/emailpassword"
import SessionNode from "supertokens-node/recipe/session"
import { appInfo } from "./appInfo"
import { TypeInput } from "supertokens-node/types"

export const backendConfig = (): TypeInput => {
  return {
    framework: "express",
    supertokens: {
      // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: `${process.env.NEXT_PUBLIC_SUPERTOKEN_STAGING_URL}`,
      apiKey: `${process.env.NEXT_PUBLIC_SUPERTOKEN_STAGING_API_KEY}`
    },
    appInfo,
    recipeList: [EmailPasswordNode.init(), SessionNode.init()],
    isInServerlessEnv: true
  }
}
