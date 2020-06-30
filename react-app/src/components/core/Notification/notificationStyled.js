/*
 * Copyright 2020 EPAM Systems, Inc. (https://www.epam.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import CloseIcon from "../CloseIcon";
import "react-toastify/dist/ReactToastify.css";

export const StyledNotification = styled.div`
  max-width: 344px;
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(15, 31, 48, 0.1);
  font: ${(props) => props.theme.font("regular", 12, 16)};
  background-color: ${(props) => props.theme.colors.white};

  svg {
    flex-shrink: 0;
  }
`;

export const StyledHeading = styled.span`
  font: ${(props) => props.theme.font("semiBold", 14, 24)};
  margin-bottom: 4px;
`;

export const StyledContent = styled.div`
  display: flex;
`;

export const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const StyledToasts = styled(ToastContainer)`
  position: absolute;
  top: ${(props) => props.theme.pxToRem(-121)};
  right: 0;

  .Toastify__toast {
    padding: 0;

    &--default {
      color: ${(props) => props.theme.colors.mineShaft};
    }
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
