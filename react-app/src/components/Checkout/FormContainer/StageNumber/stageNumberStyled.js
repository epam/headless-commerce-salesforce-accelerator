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

const StyledStageNumber = styled.div`
  position: absolute;
  left: 28px;
  width: 24px;
  height: 24px;
  text-align: center;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.wattle : theme.colors.dimGray};
`;
export default StyledStageNumber;
