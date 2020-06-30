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

const StyledVariantSelectors = styled.div`
  ${({ theme }) => {
    const { colors, font, pxToRem } = theme;

    return css`
      .price {
        margin: ${pxToRem(16)} 0;
        font: ${font("semiBold", 24, 32)};
        color: ${colors.mineShaft};

        .list {
          margin-left: ${pxToRem(8)};
          color: ${colors.rollingStone};
          text-decoration: line-through;
        }
      }

      .size-chart-link {
        display: inline-block;
        margin-top: ${pxToRem(8)};
        font: ${font("regular", 14, 24)};
        color: ${colors.blue};
        text-decoration: none;
      }
    `;
  }}
`;

export default StyledVariantSelectors;
