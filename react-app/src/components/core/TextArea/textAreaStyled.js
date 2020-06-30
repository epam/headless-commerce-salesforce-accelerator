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

export const StyledTextAreaWrapper = styled.div``;

export const StyledTextAreaLabel = styled.label`
  max-width: 280px;
  height: 24px;
  padding-left: 2px;
  font: ${(props) => props.theme.font("semiBold", 14, 24)};
  color: ${(props) => props.theme.colors.mineShaft};
`;

export const StyledTextarea = styled.textarea`
  border: 1px solid ${(props) => props.theme.colors.iron};
  width: 100%;
  height: 88px;
  font: ${(props) => props.theme.font("regular", 14, 24)};
  border-radius: 2px;
  padding: 8px 16px;
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.blue};
  }

  ::-webkit-scrollbar {
    width: 4px;
    background: none;
    margin: 0 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.iron};
    width: 2px;
    border-radius: 1px;

    &:hover {
      background: ${(props) => props.theme.colors.rollingStone};
    }
  }
`;
