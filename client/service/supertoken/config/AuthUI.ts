const signInAndUpConFig = {
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
      //   id: "pa1ssword",
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
    termsOfServiceLink: "/TNC",
    privacyPolicyLink: "/PP"
  }
}

const STlanguageTranslations = {
  translations: {
    can: {
      //errors
      EMAIL_PASSWORD_SIGN_IN_WRONG_CREDENTIALS_ERROR: "電郵或密碼錯誤",

      //sign in
      EMAIL_PASSWORD_SIGN_UP_HEADER_TITLE: "立即申請！永遠唔會遲!",
      EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_START: "已經有帳號？",
      EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_SIGN_IN_LINK: "撳呢到",
      EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_END: "去登入界面啦",
      EMAIL_PASSWORD_EMAIL_PLACEHOLDER: "Email",
      EMAIL_PASSWORD_PASSWORD_PLACEHOLDER: "密碼",
      EMAIL_PASSWORD_SIGN_UP_SUBMIT_BTN: "確定申請",
      EMAIL_PASSWORD_SIGN_UP_FOOTER_START: "如果按下確定申請代表你同意",
      EMAIL_PASSWORD_SIGN_UP_FOOTER_TOS: "TNS",
      EMAIL_PASSWORD_SIGN_UP_FOOTER_AND: "並同意",
      EMAIL_PASSWORD_SIGN_UP_FOOTER_PP: "pravacy",
      EMAIL_PASSWORD_SIGN_UP_FOOTER_END: "123",
      BRANDING_POWERED_BY_START: "用咗Open Source —",
      BRANDING_POWERED_BY_END: "123",
      EMAIL_PASSWORD_EMAIL_ALREADY_EXISTS: "此Email已經存在",

      //sign in
      EMAIL_PASSWORD_SIGN_IN_HEADER_TITLE: "登入",
      EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_START: "未有帳號？",
      EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_SIGN_UP_LINK: "撳呢到",
      EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_END: "立即申請！永遠唔會遲!",
      EMAIL_PASSWORD_SIGN_IN_SUBMIT_BTN: "確定",
      EMAIL_PASSWORD_SIGN_IN_FOOTER_FORGOT_PW_LINK:
        "忘記密碼？哭𠹌左 ﹐撳呢到幫你",
      // This key is associated with an empty string by default, but you can override these as well.
      // BRANDING_POWERED_BY_END: "123"

      //forget email
      EMAIL_PASSWORD_RESET_HEADER_TITLE: "忘記密碼",
      EMAIL_PASSWORD_RESET_HEADER_SUBTITLE: "輸入電郵地址重置密碼",
      EMAIL_PASSWORD_EMAIL_LABEL: "Email電郵地址",
      EMAIL_PASSWORD_RESET_SEND_BTN: "確定",
      EMAIL_PASSWORD_RESET_SEND_SUCCESS: "請檢查郵箱(或者垃圾郵箱)",
      EMAIL_PASSWORD_RESET_RESEND_LINK: "未收到",
      //verification email
      EMAIL_VERIFICATION_SEND_TITLE: "驗證電郵已經送出！",
      EMAIL_VERIFICATION_SEND_DESC_START: "如果未收到請查看",
      EMAIL_VERIFICATION_SEND_DESC_STRONG: "垃圾郵箱",
      EMAIL_VERIFICATION_SEND_DESC_END: "",
      EMAIL_VERIFICATION_RESEND_BTN: "重新送出驗證電郵",
      EMAIL_VERIFICATION_LOGOUT: "登出",
      EMAIL_VERIFICATION_RESEND_SUCCESS: "已經送出！！請Check Check",

      //verification success
      EMAIL_VERIFICATION_SUCCESS: "驗證成功！多謝支持！",
      EMAIL_VERIFICATION_CONTINUE_BTN: "繼續"
    }
  },
  defaultLanguage: "can"
}

export { signInAndUpConFig, STlanguageTranslations }
