import { Tab } from "@mui/material";
import {
  DefaultComponentProps,
  OverridableTypeMap,
} from "@mui/material/OverridableComponent";
import React from "react";

interface IBaseTapProps extends DefaultComponentProps<OverridableTypeMap> {}

const BaseTap: React.FunctionComponent<IBaseTapProps> = ({ ...props }) => {
  return <Tab {...props} />;
};

export default BaseTap;
