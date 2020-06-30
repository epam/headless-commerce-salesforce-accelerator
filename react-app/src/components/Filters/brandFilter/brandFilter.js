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

/** UI Components */
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

/** Components */
import CheckboxIcon from "components/core/CheckboxIcon";
import StyledTypography from "components/core/Typography";

const BrandFilter = ({
  displayValue = "",
  handleChange,
  selected = false,
  disabled,
}) => (
  <FormControlLabel
    key={displayValue}
    label={
      <StyledTypography fontSize={14} fontFamily="OpenSans" fontWeight="normal">
        {displayValue}
      </StyledTypography>
    }
    control={
      <Checkbox
        icon={<CheckboxIcon />}
        checked={selected}
        onChange={handleChange}
        checkedIcon={<CheckboxIcon checked />}
        disabled={disabled}
      />
    }
  />
);

BrandFilter.propTypes = {
  selected: PropTypes.bool,
  displayValue: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default BrandFilter;
