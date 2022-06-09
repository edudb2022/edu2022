import React from "react";
import BaseButton from "..";
import { AiOutlineLike } from "react-icons/ai";

const LikeButton: React.FunctionComponent = () => {
  return (
    <BaseButton className="">
      <AiOutlineLike />
    </BaseButton>
  );
};

export default LikeButton;
