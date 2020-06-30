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

import Link from "@material-ui/core/Link";

export const StyledFooter = styled.div`
  background: ${({ theme }) => theme.colors.athensGray};
`;

export const StyledFooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ theme }) => theme.pxToRem(theme.contentWidth)};
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.mineShaft};
  font: ${(props) => props.theme.font("regular", 14, 24)};
  padding: 40px 0px 98px 0px;
`;

export const StyledSubCategories = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.mineShaft};
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
