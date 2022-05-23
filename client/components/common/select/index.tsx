import { InputLabel, MenuItem, Select, SelectProps } from "@mui/material";
import React, { FormEvent } from "react";

interface ISelectMenuItems {
  value: string;
  title: string;
}

interface IBaseSelectProps extends SelectProps {
  inputLabel?: string;
  inputLabelClassName?: string;
  //   selectLabel: string;
  selecClassName?: string;
  selectValue: string;
  selectId?: string;
  itemsClassName?: string;
  items: ISelectMenuItems[];
}

const BaseSelect: React.FunctionComponent<IBaseSelectProps> = ({
  inputLabel,
  inputLabelClassName,
  //   selectLabel,
  selectValue,
  selecClassName,
  selectId,
  items,
  itemsClassName,
  ...props
}) => {
  return (
    <div className="flex flex-col  w-auto">
      {inputLabel && (
        <InputLabel className={`${inputLabelClassName}`}>
          {inputLabel}
        </InputLabel>
      )}
      <Select
        id={selectId}
        value={selectValue}
        className={`${selecClassName}`}
        variant="outlined"
      >
        {items.map((data) => {
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

export default BaseSelect;
