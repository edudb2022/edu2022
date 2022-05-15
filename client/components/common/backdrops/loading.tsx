import { CircularProgress } from "@mui/material";
import React from "react";
import BaseBackDrop from ".";
import { useAppSelector } from "../../../hooks/common/useAppSelector";

interface ILoadingBackDropProps {}

const LoadingBackDrop: React.FunctionComponent<ILoadingBackDropProps> = ({
  ...props
}) => {
  const { isLoading } = useAppSelector((state) => state.system);

  return (
    <BaseBackDrop isOpen={isLoading} className="z-50" {...props}>
      <CircularProgress className="text-white" />
    </BaseBackDrop>
  );
};

export default LoadingBackDrop;
