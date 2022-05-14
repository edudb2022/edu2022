import React from "react";
import AuthButton from "../../buttons/auth";
import SignInButton from "../../buttons/auth/signIn";
import SignUpButton from "../../buttons/auth/signUp";

const AuthButtonGroup: React.FunctionComponent = () => {
  return (
    <>
      <SignInButton /> <SignUpButton />
    </>
  );
};

export default AuthButtonGroup;
