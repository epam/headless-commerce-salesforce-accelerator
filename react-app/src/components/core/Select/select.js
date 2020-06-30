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

import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledTypography from "components/core/Typography";
import {
  StyledFormControl,
  StyledSelect,
  StyledSelectWrapper,
  StyledErrorMsg,
} from "./selectStyled";
import ArrowIcon from "../ArrowIcon";

const Select = ({
  IconComponent = ArrowIcon,
  defaultValue = "",
  handleChange = () => {},
  values,
  firstOptionContent,
  width,
  height,
  label,
  iconisrotated,
  error = false,
  errorMsg,
  fullWidth,
  margin,
  name = "",
  register,
  required,
}) => {
  const [state, setState] = useState(defaultValue || "");

  return (
    <StyledSelectWrapper margin={margin}>
      <StyledTypography margin="0 0 5px 0">{label}</StyledTypography>
      <StyledFormControl
        variant="outlined"
        margin="dense"
        width={width}
        height={height}
        focused={false}
        error={error}
        fullWidth={fullWidth}
        required={required}
      >
        <StyledSelect
          native
          IconComponent={IconComponent}
          value={state}
          iconisrotated={iconisrotated?.toString()}
          onChange={(e) => {
            setState(e.target.value);
            handleChange(e);
          }}
          inputRef={
            register &&
            register({
              required,
            })
          }
          name={name}
        >
          {firstOptionContent && <option value="">{firstOptionContent}</option>}
          {values.map((item) => (
            <option
              key={item.id || item.ID || item.value || item.label}
              value={item.value || item.ID || ""}
              disabled={"selectable" in item ? !item.selectable : false}
            >
              {item.label || item.displayValue || item.value}
            </option>
          ))}
        </StyledSelect>
      </StyledFormControl>
      {error && errorMsg ? <StyledErrorMsg>{errorMsg}</StyledErrorMsg> : null}
    </StyledSelectWrapper>
  );
};

Select.propTypes = {
  IconComponent: PropTypes.elementType,
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      selectable: PropTypes.bool,
      displayValue: PropTypes.string,
    })
  ),
  firstOptionContent: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  label: PropTypes.string,
  iconisrotated: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.string,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
};

export default Select;
