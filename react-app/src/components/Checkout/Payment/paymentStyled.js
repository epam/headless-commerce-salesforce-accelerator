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

export const PaymentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledPaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;
  padding: 14px 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.iron};
  border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
`;
export const PaymentMethodImg = styled.img`
  width: ${({ theme }) => theme.pxToRem(40)};
  height: ${({ theme }) => theme.pxToRem(24)};

  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const PaymentFields = styled.div`
  width: 100%;
`;
