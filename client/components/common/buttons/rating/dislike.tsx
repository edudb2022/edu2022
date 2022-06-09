import React from "react";
import BaseButton from "..";
import { AiOutlineDislike } from "react-icons/ai";
const DisLikeButton: React.FunctionComponent = () => {
  return (
    <BaseButton className="">
      <AiOutlineDislike />
    </BaseButton>
  );
};

export default DisLikeButton;
