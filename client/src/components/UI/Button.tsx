import React from "react";
import styled from "@emotion/styled";
import MuiButton, { ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  children: JSX.Element | string;
}

const Button = ({ children, ...props }: CustomButtonProps) => {
  return (
    <CustomButton variant="contained" {...props}>
      {children}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled(MuiButton)``;
