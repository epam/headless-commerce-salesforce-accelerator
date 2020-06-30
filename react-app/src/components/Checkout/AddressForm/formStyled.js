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
import Button from "components/core/Button";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FullWidthWrapper = styled.div`
  width: 100%;
`;

export const StyledEditAddressButton = styled(Button)`
  color: ${(props) => props.theme.colors.blue};
  font: ${(props) => props.theme.font("regular", 12, 16)};
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  svg {
    margin-left: 4px;
  }

  path {
    fill: ${(props) => props.theme.colors.blue};
  }
`;
