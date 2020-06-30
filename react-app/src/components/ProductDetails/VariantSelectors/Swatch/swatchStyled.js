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

const StyledSwatch = styled.div`
  ${({ theme, bgImage, disabled, selected }) => {
    const { colors, pxToRem } = theme;

    return css`
      display: inline-block;
      width: ${pxToRem(40)};
      height: ${pxToRem(32)};
      padding: ${pxToRem(4)};
      margin-right: ${pxToRem(4)};
      border: ${pxToRem(1)} solid ${selected ? colors.mineShaft : colors.iron};
      border-radius: ${pxToRem(2)};
      box-sizing: border-box;
      cursor: ${disabled ? "not-allowed" : "pointer"};

      .swatch {
        height: 100%;
        background-image: url(${bgImage});
        border: ${pxToRem(1)} solid;
        border-image: url(${bgImage});
        border-radius: ${pxToRem(2)};
        box-sizing: border-box;
      }
    `;
  }}
`;
export default StyledSwatch;
