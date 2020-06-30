import styled from "styled-components";

import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    max-width: 800px;
  }
`;

export const StyledDialogTitle = styled(DialogTitle)`
  height: 56px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${({ theme }) => theme.colors.mineShaft};
    width: ${({ theme }) => theme.pxToRem(24)};
    height: ${({ theme }) => theme.pxToRem(24)};
  }
`;

export const StyledDialogContent = styled(DialogContent)`
  padding: ${({ padding = "16px 24px 88px" }) => padding};
`;

export const StyledDialogActions = styled(DialogActions)`
  background-color: ${({ theme }) => theme.colors.athensGray};
  height: ${({ theme }) => theme.pxToRem(72)};
  padding: 0px 24px;

  button {
    width: ${({ theme }) => theme.pxToRem(120)};
    &:not(:first-child) {
      width: ${({ theme }) => theme.pxToRem(160)};
      margin-left: 16px !important;
    }
  }
`;
