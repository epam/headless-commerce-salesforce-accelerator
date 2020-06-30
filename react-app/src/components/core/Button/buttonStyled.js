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

export const StyledIcon = styled.div`
  display: inline-block;
  margin-right: 8px;
  height: 24px;
`;

export const StyledPrimaryButton = styled.button`
  background-color: ${(props) =>
    props.plain ? "transparent" : props.theme.colors.wattle};
  color: ${(props) => props.theme.colors.mineShaft};
  font: ${(props) =>
    props.theme.font(
      "semiBold",
      (props.size === "sm" && 14) || (props.size === "lg" && 16),
      24
    )};
  margin: ${({ margin = 0 }) => margin};
  padding: ${(props) =>
    (props.plain && "0px") ||
    (props.isIconOnly && "8px") ||
    (props.size === "sm" && "8px 16px") ||
    (props.size === "lg" && "12px 32px")};
  border: none;
  display: flex;
  justify-content: center;
  min-width: ${({ minWidth }) => minWidth};
  cursor: pointer;
  border-radius: 2px;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.semiWhite};
    outline-offset: -3px;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.turmeric};
  }

  &:hover {
    background-color: ${(props) =>
      props.plain ? "transparent" : props.theme.colors.yellowGreen};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.alabaster};
    border: 1px solid ${(props) => props.theme.colors.iron};
    color: ${(props) => props.theme.colors.dimGray};
    pointer-events: none;

    path {
      fill: ${(props) => props.theme.colors.dimGray};
    }
  }

  ${(props) =>
    props.isIconOnly &&
    `${StyledIcon} {
    margin-right: 0;
  }`}
`;

export const StyledLinkButton = styled.button`
  color: ${(props) => props.theme.colors.blue};
  font: ${(props) => props.theme.font("regular", 14, 24)};
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0 8px;
  height: 24px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.blue};
    outline: none;
    border-radius: 2px;
  }

  &:disabled {
    color: ${(props) => props.theme.colors.silverChalice};
    pointer-events: none;
  }
`;

export const StyledSecondaryButton = styled(StyledPrimaryButton)`
  max-height: 48px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.alabaster};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.wattle};
  }
`;
