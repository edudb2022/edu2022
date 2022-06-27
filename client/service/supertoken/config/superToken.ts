import SuperTokens from "supertokens-node"
import Session from "supertokens-node/recipe/session"
import { appInfo } from "./appInfo"

SuperTokens.init({
  supertokens: {
    connectionURI: "..."
  },
  appInfo: appInfo,
  recipeList: [
    Session.init({
      jwt: {
        enable: true
      }
    })
  ]
})
