import styled from "@emotion/styled";
import { Checkbox as MuiCheckbox } from "@mui/material";

const Checkbox = styled(MuiCheckbox)`
  & .MuiSvgIcon-root {
    width: 1.2em;
    height: 1.2em;
  }
  &.MuiButtonBase-root.MuiCheckbox-root {
    padding: 8px;
  }
`;

export default Checkbox;
