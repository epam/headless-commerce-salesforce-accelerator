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

import styled, { css } from "styled-components";

export const StyledSearchBarMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme.contentWidth}px;
  height: ${(props) => props.theme.searchBarH}px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.mineShaft};
  font: ${(props) => props.theme.font("regular", 14, 24)};
`;

export const StyledLoginMenu = styled.div`
  ${({ theme }) => {
    const { colors, pxToRem } = theme;
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${pxToRem(70)};
      height: ${pxToRem(40)};

      &:hover {
        cursor: pointer;
        background: ${colors.white};
        box-shadow: 0px 2px 8px rgba(15, 31, 48, 0.15);
        border-radius: 2px;
      }
    `;
  }}
`;

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledDivider = styled.i`
  width: 1px;
  height: 20px;
  margin: 0 24px;
  background-color: ${(props) => props.theme.colors.iron};
`;
