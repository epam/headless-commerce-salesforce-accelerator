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
import Input from "rc-input-number";
import CheckMarkIcon from "../CheckMarkIcon";
import InfoIcon from "../InfoIcon";

import "rc-input-number/assets/index.css";
import ArrowIcon from "../ArrowIcon";

export const StyledNumericInput = styled(Input)`
  width: 80px;
  box-sizing: border-box;

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &.rc-input-number {
    border: 1px solid ${(props) =>
      props.disabled ? props.theme.colors.dimGray : props.theme.colors.iron};
    border-radius: 2px;
    height: auto;
    display: flex;
    align-items: center;
    padding: 7px;
    line-height: 24px;

    &-focused {
      box-shadow: none;
    }

    &-input-wrap:focus {
        outline: none;
      }
    }
  }

  .rc-input-number-input {
      text-align: left;
      font: ${(props) => props.theme.font("regular", 14, 24)};
      color: ${(props) => props.theme.colors.mineShaft};
  }

  .rc-input-number-handler {
      cursor: pointer;
      padding: 0;
      height: 12px;
      width: 24px;
      display: flex;
      align-items: center;

      &-wrap {
        width: 24px;
        order: 1;
      }

      &-wrap,
      &-up {
          border: none;
      }
  }

  &.rc-input-number:hover .rc-input-number-handler-up,
  &.rc-input-number:hover .rc-input-number-handler-wrap {
    border-color: ${(props) => props.theme.colors.iron};
  }

  &.rc-input-number:hover {
    border-color: ${(props) => props.theme.colors.iron};
  }
`;

const StyledArrow = styled(ArrowIcon)`
  width: 24px;
  height: 24px;
`;

export const StyledArrowUp = styled(StyledArrow)`
  transform: rotate(-90deg);
`;

export const StyledArrowDown = styled(StyledArrow)`
  transform: rotate(90deg);
`;

export const StyledField = styled.div`
  .rc-input-number {
    ${(props) =>
      props.error &&
      `
        border: 1px solid ${props.theme.colors.punch};
        margin-bottom: 4px;

        &:hover {
          border: 1px solid ${props.theme.colors.punch}
        }
    `}

    ${(props) =>
      props.disabled &&
      `background-color: ${props.theme.colors.alabaster};
    `}
  }

  .rc-input-number-disabled .rc-input-number-input {
    background-color: ${(props) => props.theme.colors.alabaster};
  }

  font: ${(props) => props.theme.font("regular", 12, 16)};
  color: ${(props) => props.theme.colors.punch};
`;

export const StyledTextFieldWrapper = styled.div`
  width: 280px;
  height: 88px;
  position: relative;
`;

export const StyledCheckMarkIcon = styled(CheckMarkIcon)`
  display: block;
  position: absolute;
  right: 10px;
  top: 36px;

  path {
    fill: ${(props) => props.theme.colors.dimGray};
  }
`;

export const StyledInfoIcon = styled(InfoIcon)`
  float: right;
  path {
    fill: ${(props) => props.theme.colors.dimGray};
  }
`;

export const StyledTextFieldLabel = styled.div`
  display: flex;
  justify-content: space-between;

  .label {
    font-size: 10px;
    max-width: 280px;
    height: 24px;
    padding-left: 2px;
    font: ${(props) => props.theme.font("semiBold", 14, 24)};
    color: ${(props) => props.theme.colors.mineShaft};
  }
`;

export const StyledTextFieldInput = styled.input`
  width: 280px;
  height: 40px;
  margin: 4px 0;
  padding: 0 16px;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.mineShaft};
  border: 1px solid ${(props) => props.theme.colors.iron};
  box-sizing: border-box;
  border-radius: 2px;
  font: ${(props) => props.theme.font("regular", 14, 24)};
  outline: none;
  transition: 0.5s;

  &::placeholder {
    height: 24px;
    color: ${(props) => props.theme.colors.rollingStone};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.alabaster};
    color: ${(props) => props.theme.colors.rollingStone};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.blue};
  }

  ${(props) =>
    props.error &&
    `border-color: ${props.theme.colors.punch};
  `}
`;

export const StyledTextFieldParagraph = styled.p`
  max-width: 280px;
  margin: 0px;
  padding-left: 2px;
  height: 16px;
  left: 144px;
  top: 305px;
  font: ${(props) => props.theme.font("regular", 12, 16)};
  color: ${(props) => props.theme.colors.rollingStone};
  ${(props) =>
    props.error &&
    `color: ${props.theme.colors.punch};
  `}
`;
