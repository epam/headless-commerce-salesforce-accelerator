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
import Chip from "@material-ui/core/Chip";

export const SelectedFiltersWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
`;

export const SelectedFiltersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectedFiltersDetails = styled.div`
  margin: 15px 0px;
  & > * {
    margin: 5px 5px 0px;
  }
`;

export const ChipStyled = styled(Chip)`
  font: ${(props) => props.theme.font("regular")};
  border: 1px solid ${({ theme }) => theme.colors.iron};
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  svg {
    width: 13px;
    color: ${({ theme }) => theme.colors.black};
    margin-right: 8px !important;
    margin-left: 0px;
  }
`;
