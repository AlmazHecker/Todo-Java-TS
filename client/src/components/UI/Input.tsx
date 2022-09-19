import React, { ChangeEvent } from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { StrOrNum } from "../../utils/general";

interface InputProps {
  placeholder?: string;
  value?: StrOrNum;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const Input = ({ placeholder, value, onChange, ...props }: InputProps) => {
  return (
    <CustomInput
      {...props}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      size="small"
      fullWidth
    />
  );
};

export default Input;

const CustomInput = styled(TextField)`
  &.MuiFormControl-root.MuiTextField-root {
    background-color: white;
    border-radius: 5px;
  }
`;
