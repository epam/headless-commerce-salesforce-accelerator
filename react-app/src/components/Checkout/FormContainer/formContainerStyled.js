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
import Typography from "components/core/Typography";

export const StyledFormContainer = styled.div`
  margin: ${({ margin = "0" }) => margin};
  background-color: ${({ theme }) => theme.colors.athensGray};
`;

export const StyledFormHead = styled.div`
  position: relative;
  padding: 28px 20px 28px 72px;
`;

export const StyledFormBody = styled.div`
  padding: 24px 72px;
  box-shadow: inset 0px 1px 0px ${({ theme }) => theme.colors.iron};
`;

export const StyledShippingSummary = styled.div`
  padding: 0 72px 24px 72px;
  display: flex;
`;

export const StyledFormSummaryHeading = styled.div`
  font: ${(props) => props.theme.font("semiBold", 14, 24)};
  margin-bottom: 4px;
`;

export const StyledShippingCost = styled.span`
  font: ${(props) => props.theme.font("semiBold", 14, 24)};
`;

export const StyledPhone = styled.div`
  margin-top: 8px;
`;

export const StyledSummarySection = styled.div`
  & + & {
    margin-top: 16px;
  }
`;

export const StyledSummaryColumn = styled.div`
  flex: 1;
  font: ${(props) => props.theme.font("regular", 14, 24)};
  word-break: break-all;
`;

export const StyledEditButton = styled(Button)`
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

export const StyledTypography = styled(Typography)`
  display: flex;
  justify-content: space-between;
`;
