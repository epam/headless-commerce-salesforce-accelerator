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
import StyledTypography from "components/core/Typography";
import {
  StyledFormControl,
  StyledSelect,
  StyledSelectWrapper,
  StyledErrorMsg,
} from "./selectMinMaxStyled";
import ArrowIcon from "../ArrowIcon/index";

const SelectMinMax = ({
  IconComponent = ArrowIcon,
  handleChange = () => {},
  value,
  min,
  max,
  width,
  height,
  label,
  iconisrotated,
  error = false,
  errorMsg,
  fullWidth,
  margin,
  name = "",
  required,
}) => {
  const options = [];

  for (let i = min; i <= max; i += 1) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <StyledSelectWrapper margin={margin}>
      <StyledTypography margin="0 0 4px 0">{label}</StyledTypography>
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
          min={min.toString()}
          max={max.toString()}
          iconisrotated={iconisrotated?.toString()}
          onChange={handleChange}
          name={name}
          value={value}
        >
          {options}
        </StyledSelect>
      </StyledFormControl>
      {error && errorMsg ? <StyledErrorMsg>{errorMsg}</StyledErrorMsg> : null}
    </StyledSelectWrapper>
  );
};

SelectMinMax.propTypes = {
  IconComponent: PropTypes.elementType,
  handleChange: PropTypes.func,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  label: PropTypes.string,
  iconisrotated: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.string,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
};

export default SelectMinMax;
