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
import { Link } from "react-router-dom";

export const StyledProductControls = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledProductName = styled(Link)`
  font: ${(props) => props.theme.font("semiBold", 14, 24)};
  text-decoration: none;
  color: ${({ available, theme }) =>
    available === "true" ? theme.colors.mineShaft : theme.colors.rollingStone};
`;

export const StyledProductItem = styled.div`
  display: flex;
  padding: ${(props) =>
    (props.isInOrder && "0") || (props.isPreview && "8px 16px") || "16px"};

  ${(props) => props.available && `opacity: 0.7`};

  ${StyledProductName} {
    margin-bottom: ${(props) => (props.isPreview ? 4 : 8)}px;
  }
`;

export const StyledProductBanner = styled.img`
  width: ${(props) => (props.isPreview ? 80 : 120)}px;
  height: ${(props) => (props.isPreview ? 80 : 120)}px;
  margin-right: 16px;
`;

export const StyledProductItemVariation = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const StyledProductQuantity = styled.span`
  flex: 1;
  color: ${(props) =>
    props.available
      ? props.theme.colors.mineShaft
      : props.theme.colors.rollingStone};
`;

export const StyledTotal = styled.span`
  flex: 1;
  font: ${(props) => props.theme.font("semiBold", 14, 24)};
  text-align: center;
  color: ${(props) =>
    props.available
      ? props.theme.colors.mineShaft
      : props.theme.colors.rollingStone};
`;

export const StyledProductPrice = styled.div`
  flex: 1;
  color: ${(props) =>
    props.available
      ? props.theme.colors.mineShaft
      : props.theme.colors.rollingStone};
  font: ${(props) => props.theme.font("semiBold", 14, 24)};

  .list {
    font: ${({ theme }) => theme.font("regular", 12, 16)};
    text-decoration-line: line-through;
    color: ${({ theme }) => theme.colors.rollingStone};
    margin-left: 4px;
  }

  ${(props) =>
    props.isPreview &&
    `
        display: flex;
        font: ${props.theme.font("regular", 12, 16)};
    `}

  ${(props) =>
    !props.isPreview &&
    `
    .price {
        display: flex;
        flex-direction: column;
        text-align: center;
      }
    `}
`;

export const StyledQuantity = styled.span`
  margin-right: 5px;
  color: ${(props) => props.theme.colors.rollingStone};
`;

export const StyledValue = styled.span`
  color: ${(props) => props.theme.colors.mineShaft};
`;

export const StyledProductProperty = styled.div`
  width: 90%;
  font: ${(props) => props.theme.font("regular", 12, 16)};
  color: ${(props) => props.theme.colors.rollingStone};
`;

export const StyledProductItemDetails = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledNotAvailableLabel = styled.span`
  color: ${(props) => props.theme.colors.punch};
`;
