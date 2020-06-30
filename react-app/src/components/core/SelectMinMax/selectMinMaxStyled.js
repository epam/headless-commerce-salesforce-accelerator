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
import { FormControl, Select } from "@material-ui/core";

export const StyledFormControl = styled(FormControl)`
  width: ${({ width = 120, fullWidth, theme }) =>
    fullWidth ? "100%" : theme.pxToRem(width)};
  height: ${({ height = 40, theme }) => theme.pxToRem(height)};
  margin: 0;

  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.punch};
  }
`;

export const StyledSelect = styled(Select)`
  .MuiInputBase-input {
    font: ${({ theme }) => theme.font("regular", 14)};
    color: ${({ theme }) => theme.colors.mineShaft};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .MuiSelect-icon {
    width: ${({ theme }) => theme.pxToRem(24)};
    height: ${({ theme }) => theme.pxToRem(24)};
    transform: ${({ iconisrotated }) =>
      iconisrotated === "true" ? "rotate(90deg)" : "none"};
  }

  option:disabled {
    color: ${({ theme }) => theme.colors.dimGray};
  }
`;

export const StyledSelectWrapper = styled.div`
  margin: ${({ margin }) => margin || "16px 0 0"};
`;

export const StyledErrorMsg = styled.div`
  font: ${({ theme }) => theme.font("regular", 12, 16)};
  color: ${({ theme }) => theme.colors.punch};
`;
