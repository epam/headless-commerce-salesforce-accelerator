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

export const StyledOrderedProductItems = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.iron};
  border-bottom: 1px solid ${(props) => props.theme.colors.iron};

  & > * + * {
    border-top: 1px solid ${(props) => props.theme.colors.iron};
  }
`;

export const StyledOrderItemsHeading = styled.p`
  font: ${(props) => props.theme.font("semiBold", 16, 24)};
  color: ${(props) => props.theme.colors.mineShaft};
  margin: 16px 0 32px 0;
`;

export const StyledCheckoutSidePanel = styled.div`
  margin-left: 36px;
`;
