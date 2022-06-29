import SuperTokens from "supertokens-auth-react"
import EmailPassword from "supertokens-auth-react/recipe/emailpassword"
import Session from "supertokens-auth-react/recipe/session"
import { appInfo } from "./appInfo"

SuperTokens.init({
  appInfo: appInfo,
  recipeList: [
    EmailPassword.init({
      signInAndUpFeature: {
        signUpForm: {
          formFields: [
            {
              id: "name",
              label: "Full name",
              placeholder: "First name and last name"
            },
            {
              id: "name1",
              label: "Full nam1e",
              placeholder: "First name and 1last name"
            },
            {
              id: "name2",
              label: "Full name3",
              placeholder: "First name and last name4"
            }
          ],
          termsOfServiceLink: "https://example.com/terms-of-service",
          privacyPolicyLink: "https://example.com/privacy-policy"
        },
        signInForm: {
          formFields: [
            {
              id: "name",
              label: "Full name",
              placeholder: "First name and last name"
            },
            {
              id: "name1",
              label: "Full nam1e",
              placeholder: "First name and 1last name"
            },
            {
              id: "name2",
              label: "Full name3",
              placeholder: "First name and last name4"
            }
          ]
        }
      }
    }),
    Session.init()
  ]
})
