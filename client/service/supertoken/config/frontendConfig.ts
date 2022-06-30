import { MdPassword } from "react-icons/md"
import EmailPasswordReact from "supertokens-auth-react/recipe/emailpassword"
import SessionReact from "supertokens-auth-react/recipe/session"
import { appInfo } from "./appInfo"
import SuperTokens from "supertokens-auth-react"
import { string } from "yup"

const translations = {
  translations: {
    can: {
      EMAIL_PASSWORD_SIGN_UP_HEADER_TITLE: "立即申請！永遠唔會遲!",
      EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_START: "已經有帳號？",
      EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_SIGN_IN_LINK: "撳呢到",
      EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_END: "去登入界面啦",
      EMAIL_PASSWORD_EMAIL_PLACEHOLDER: "帳號",
      EMAIL_PASSWORD_PASSWORD_PLACEHOLDER: "密碼",
      EMAIL_PASSWORD_SIGN_UP_SUBMIT_BTN: "確定申請",
      EMAIL_PASSWORD_SIGN_UP_FOOTER_START: "如果按下確定申請代表你同意",
      EMAIL_PASSWORD_SIGN_UP_FOOTER_TOS: "TNS",
      EMAIL_PASSWORD_SIGN_UP_FOOTER_AND: "並同意",
      EMAIL_PASSWORD_SIGN_UP_FOOTER_PP: "pravacy",
      EMAIL_PASSWORD_SIGN_UP_FOOTER_END: "123",
      BRANDING_POWERED_BY_START: "用咗Open Source Package —",
      BRANDING_POWERED_BY_END: "123",

      //sign in
      EMAIL_PASSWORD_SIGN_IN_HEADER_TITLE: "登入",
      EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_START: "未有帳號？",
      EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_SIGN_UP_LINK: "撳呢到",
      EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_END: "立即申請！永遠唔會遲!",
      EMAIL_PASSWORD_SIGN_IN_SUBMIT_BTN: "確定",
      EMAIL_PASSWORD_SIGN_IN_FOOTER_FORGOT_PW_LINK:
        "忘記密碼？哭𠹌左 ﹐撳呢到幫你"
      // This key is associated with an empty string by default, but you can override these as well.
      // BRANDING_POWERED_BY_END: "123"
    }
  },
  defaultLanguage: "can"
}

const abc = {
  signInAndUpFeature: {
    signUpForm: {
      formFields: [
        // {
        //   id: "email",
        //   label: "Email (如用大專學生Email會有學生Icon)",
        //   validate: async (value: string) => {
        //     // Your own validation returning a string or undefined if no errors.
        //     return "..."
        //   }
        // },
        // {
        //   id: "password",
        //   label: "...",
        //   validate: async (value: string) => {
        //     // Your own validation returning a string or undefined if no errors.
        //     return "..."
        //   }
        // },
        // {
        //   id: "username",
        //   label: "username",
        //   placeholder: "username"
        // }
      ],
      termsOfServiceLink: "https://example.com/terms-of-service",
      privacyPolicyLink: "https://example.com/privacy-policy"
    }
  }
}

export const frontendConfig = () => {
  return {
    languageTranslations: translations,
    appInfo,
    recipeList: [EmailPasswordReact.init(abc), SessionReact.init()]
  }
}
