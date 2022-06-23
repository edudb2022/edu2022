import EmailPasswordNode from "supertokens-node/recipe/emailpassword"
import SessionNode from "supertokens-node/recipe/session"
import { appInfo } from "./appInfo.js"
import { TypeInput } from "supertokens-node/types"

export const backendConfig = (): TypeInput => {
  return {
    framework: "express",
    supertokens: {
      // These are the connection details of the app you created on supertokens.com
      connectionURI:
        "https://f17751b1f2f911ecb5393b0698d1fe2c-ap-southeast-1.aws.supertokens.io:3567",
      apiKey: "VFvTQ2bm0xkJhJPpv5fzlDaBfPB=ua"
    },
    appInfo,
    recipeList: [EmailPasswordNode.init(), SessionNode.init()],
    isInServerlessEnv: true
  }
}
