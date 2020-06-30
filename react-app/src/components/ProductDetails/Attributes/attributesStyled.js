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

export const StyledTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};
  font: ${({ theme }) => theme.font("semiBold", 24, 32)};

  .title {
    color: ${({ theme }) => theme.colors.mineShaft};
  }

  .product-name {
    color: ${({ theme }) => theme.colors.regentGrey};
  }
`;

export const StyledSections = styled.div`
  ${({ theme }) => {
    const { colors, pxToRem } = theme;
    return css`
      .section {
        margin-bottom: ${pxToRem(16)};
      }

      .MuiGrid-container {
        padding: ${pxToRem(8)} 0 ${pxToRem(8)} ${pxToRem(16)};
        &:nth-child(even) {
          background-color: ${colors.athensGray};
        }
      }
    `;
  }}
`;
