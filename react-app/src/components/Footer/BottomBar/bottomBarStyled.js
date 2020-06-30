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

export const StyledBottomBar = styled.div`
  background: ${({ theme }) => theme.colors.mineShaft};
  padding: 24px 0px;
`;

export const StyledBottomBarContent = styled.div`
  max-width: ${({ theme }) => theme.pxToRem(theme.contentWidth)};
  margin: 0 auto;
  font: ${(props) => props.theme.font("regular", 12)};
  color: ${({ theme }) => theme.colors.white};
`;
