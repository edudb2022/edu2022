import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BaseBackDrop, { IBaseBackDropProps } from ".";

interface ILoadingBackDropProps {}

const LoadingBackDrop: React.FunctionComponent<ILoadingBackDropProps> = ({
  ...props
}) => {
  const { isLoading } = useSelector((state) => state.system);

  return (
    <BaseBackDrop isOpen={isLoading} className="z-50" {...props}>
      <CircularProgress className="text-white" />
    </BaseBackDrop>
  );
};

export default LoadingBackDrop;
