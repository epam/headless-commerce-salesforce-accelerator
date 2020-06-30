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

export const TextInputStyled = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(40)};
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid
    ${({ theme, errors, name }) =>
      errors[name] ? theme.colors.punch : theme.colors.iron};
  border-radius: 2px;
  padding: 8px 16px;
  margin: 5px 0px;

  font: ${({ theme }) => theme.font("regular", 14, 24)};
  color: ${({ theme }) => theme.colors.mineShaft};

  &:focus {
    outline: none !important;
    border: 1px solid ${({ theme }) => theme.colors.mineShaft};
  }
`;

export const TextInputLabelStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  svg {
    color: ${({ theme }) => theme.colors.dimGray};
  }
`;

export const TextInputWrapper = styled.div`
  width: ${({ width = 240, fullWidth, theme }) =>
    fullWidth ? "100%" : theme.pxToRem(width)};

  .error-message {
    color: ${({ theme }) => theme.colors.punch};
    margin: 0px;
    font: ${({ theme }) => theme.font("regular", 12, 24)};
  }
`;
