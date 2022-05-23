import {
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import React from "react";
import { CategoryA, CategoryB, CategoryC } from "../../../constants/admission";

interface IDseSubjectsSelectProps extends SelectProps {
  //   inputLabel?: string;
  //   inputLabelClassName?: string;
  //   selectLabel: string;
  selecClassName?: string;
  selectValue: string;
  selectId?: string;
  itemsClassName?: string;
  // items: ISelectMenuItems[];
}

const DseSubjectsSelect: React.FunctionComponent<IDseSubjectsSelectProps> = ({
  //   inputLabel,
  //   inputLabelClassName,
  //   selectLabel,
  selectValue,
  selecClassName,
  selectId,
  //   items,
  itemsClassName,
  ...props
}) => {
  return (
    <div className="flex flex-col  w-auto">
      {/* {inputLabel && ( */}
      {/* <InputLabel className={`${inputLabelClassName}`}>科目</InputLabel> */}
      {/* //)} */}
      <Select
        id={selectId}
        value={selectValue}
        className={`${selecClassName}`}
        variant="outlined"
        {...props}
      >
        <ListSubheader>甲類：高中科目</ListSubheader>
        {CategoryA.map((data) => {
          return (
            <MenuItem className={`${itemsClassName}`} value={data.value}>
              {data.title}
            </MenuItem>
          );
        })}
        <ListSubheader>乙類：應用學習科目</ListSubheader>
        {CategoryB.map((data) => {
          return (
            <MenuItem className={`${itemsClassName}`} value={data.value}>
              {data.title}
            </MenuItem>
          );
        })}
        <ListSubheader>丙類：其他語言科目</ListSubheader>
        {CategoryC.map((data) => {
          return (
            <MenuItem className={`${itemsClassName}`} value={data.value}>
              {data.title}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default DseSubjectsSelect;
