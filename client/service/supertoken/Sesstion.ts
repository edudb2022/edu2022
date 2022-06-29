import Session from "supertokens-auth-react/recipe/session"

const STCheckExist = () => {
  return Session.doesSessionExist()
}

const STSignOut = () => {
  return Session.signOut()
}

const STGetPayload = () => {
  return Session.getAccessTokenPayloadSecurely()
}

const STGetUserId = () => {
  return Session.getUserId()
}

export { STCheckExist, STSignOut, STGetPayload, STGetUserId }
