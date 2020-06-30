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

import React from "react";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip/tooltip";

import {
  StyledNumericInput,
  StyledField,
  StyledArrowUp,
  StyledArrowDown,
  StyledTextFieldWrapper,
  StyledTextFieldLabel,
  StyledTextFieldInput,
  StyledTextFieldParagraph,
  StyledCheckMarkIcon,
} from "./inputStyled";

export const NumericInput = ({
  min,
  max,
  placeholder,
  value,
  disabled,
  error,
  upHandler = <StyledArrowUp />,
  downHandler = <StyledArrowDown />,
  readOnly,
  onChange,
  defaultValue,
  ...props
}) => {
  return (
    <StyledField error={error} disabled={disabled}>
      <StyledNumericInput
        min={min}
        max={max}
        type="number"
        defaultValue={defaultValue}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        disabled={disabled}
        upHandler={upHandler}
        downHandler={downHandler}
        precision={0}
        {...props}
      />
      {error}
    </StyledField>
  );
};

NumericInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  upHandler: PropTypes.node,
  downHandler: PropTypes.node,
  onChange: PropTypes.func,
};

export const TextInput = ({
  type = "text",
  placeholder = "text",
  helperText = "helper text",
  label,
  valid,
  disabled,
  required,
  error = "",
  title,
}) => {
  return (
    <StyledTextFieldWrapper>
      <StyledTextFieldLabel>
        <div className="label">
          {label} {required && "*"}
        </div>
        {valid && <Tooltip title={title} />}
      </StyledTextFieldLabel>
      <StyledTextFieldInput
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        required={required}
      />
      {valid && <StyledCheckMarkIcon />}
      <StyledTextFieldParagraph error={error}>
        {error || helperText}
      </StyledTextFieldParagraph>
    </StyledTextFieldWrapper>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  valid: PropTypes.bool,
  title: PropTypes.string,
};
