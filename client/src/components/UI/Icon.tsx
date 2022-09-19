import React, { FC } from "react";
import styled from "@emotion/styled";
import { IconButton, IconButtonProps } from "@mui/material";

interface IconProps extends IconButtonProps {
  Icon: FC;
}

const Icon = ({ Icon, onClick }: IconProps) => {
  return (
    <Container onClick={onClick}>
      <Icon />
    </Container>
  );
};

export default Icon;

const Container = styled(IconButton)`
  & .MuiSvgIcon-root {
    width: 1.2em;
    height: 1.2em;
  }
  color: black;
  padding: 8px;
`;
