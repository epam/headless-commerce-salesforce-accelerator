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

import Typography from "@material-ui/core/Typography";

const StyledTypography = styled(Typography)`
  font: ${(props) =>
    props.theme.font(
      props?.fontWeight || "semiBold",
      props?.fontSize || 14,
      props?.lineheight || props?.lineheight || 24
    )};
  ${(props) => props?.display && `display: props?.display`};
  font-style: normal;
  color: ${({ colortheme = "black", theme }) => theme.colors[colortheme]};
  margin: ${({ margin }) => margin};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}em` : "normal"};
  text-transform: ${({ texttransform = "none" }) => texttransform};
  width: ${({ width }) => width};
  text-align: ${({ textalign }) => textalign};

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `};
`;

export default StyledTypography;
