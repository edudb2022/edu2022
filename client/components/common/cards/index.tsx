import React, { PropsWithChildren } from "react";

export interface IBaseCardProps {
  className?: string;
}
const BaseCard: React.FunctionComponent<PropsWithChildren<IBaseCardProps>> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

export default BaseCard;
