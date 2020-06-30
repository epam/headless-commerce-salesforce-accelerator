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

export const StyledCartValidationError = styled.div`
  font: ${(props) => props.theme.font("regular", 12, 16)};
  display: flex;
  justify-content: center;
  margin: ${({ margin = 0 }) => margin};
  background-color: ${({ theme }) => theme.colors.pale};
  padding: 16px 16px 16px 0;
`;

export const StyledIcon = styled.div`
  margin: 0 11px 15px 15px;
`;
