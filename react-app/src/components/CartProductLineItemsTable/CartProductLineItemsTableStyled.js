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

import Grid from "@material-ui/core/Grid";

export const ProductLineItems = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.iron};
  border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
  width: 100%;

  & > * + * {
    border-top: 1px solid ${({ theme }) => theme.colors.iron};
  }
`;

export const ProductLineTableLayout = styled(Grid)`
  height: ${({ theme, height }) => theme.pxToRem(height)};
  background: ${({ theme }) => theme.colors.athensGray};
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${({ header }) =>
    header === "true" ? "0px 75px 0 152px" : "0 16px"};
`;

export const StyledHeadingItem = styled.div`
  display: flex;
  flex: ${(props) => (props.quantity ? 0 : 1)};
  justify-content: flex-start;

  ${(props) => props.price && "margin-right: 35px;"}
  ${(props) => props.quantity && "margin-right: -8px;"}

  &:nth-child(even) {
    justify-content: flex-end;
  }
`;
