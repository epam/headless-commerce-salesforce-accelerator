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

export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme.contentWidth}px;
  height: ${(props) => props.theme.searchBarH}px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.mineShaft};
  font: ${(props) => props.theme.font("regular", 14, 24)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
`;

export const StyledHeader = styled.div`
  height: ${(props) => props.theme.searchBarH}px;
  color: ${(props) => props.theme.colors.white};
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.blue};
`;
