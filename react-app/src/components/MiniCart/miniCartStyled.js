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

import styled, { css } from "styled-components";

import Button from "../core/Button";

export const StyledMiniCart = styled.div``;

export const StyledMiniCartTrigger = styled.div`
  ${({ theme }) => {
    const { colors, pxToRem } = theme;
    return css`
      position: relative;
      width: ${pxToRem(40)};
      height: ${pxToRem(40)};
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
        background: ${colors.white};
        box-shadow: 0px 2px 8px rgba(15, 31, 48, 0.15);
        border-radius: 2px;
      }
    `;
  }}
`;

export const StyledProductsQuantity = styled.div`
  ${({ theme }) => {
    const { colors, pxToRem, font } = theme;
    return css`
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    background: ${colors.wattle} };
    border-radius: 2px;
    position: absolute;
    top: 2px;
    left: 20px;
    text-align: center;
    font: ${font("regular", 10, 16)};
    font-style: normal;
    font-weight: bold;
    color: ${colors.black};
    `;
  }}
`;

export const StyledPopupContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTotal = styled.div`
  font: ${(props) => props.theme.font("semiBold", 16, 24)};
  color: ${(props) => props.theme.colors.mineShaft};
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

export const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px 16px 16px;
  font: ${(props) => props.theme.font("semiBold", 16, 24)};
`;

export const StyledCount = styled.span`
  color: ${(props) => props.theme.colors.rollingStone};
  margin-left: 8px;
`;

export const StyledButton = styled(Button)`
  margin: 0 16px;
`;

export const StyledProductItems = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.iron};
  border-bottom: 1px solid ${(props) => props.theme.colors.iron};
  max-height: calc(
    96px * 5 + 5px
  ); // scroll appears if more than 5 productItems in cart
  overflow-y: auto;

  & > * + * {
    border-top: 1px solid ${(props) => props.theme.colors.iron};
  }
`;
