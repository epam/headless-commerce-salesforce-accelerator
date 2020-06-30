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
import Radio from "@material-ui/core/Checkbox";

/** Components */
import RadioButtonIcon from "components/core/RadioButtonIcon";
import StyledTypography from "components/core/Typography";

const RadioButton = ({ displayValue, selected, handleChange, disabled }) => (
  <FormControlLabel
    key={displayValue}
    label={
      <StyledTypography
        colortheme={disabled ? "iron" : "mineShaft"}
        fontSize={14}
        fontWeight="regular"
      >
        {displayValue}
      </StyledTypography>
    }
    value={displayValue}
    id="price"
    control={
      <Radio
        checked={selected}
        onChange={handleChange}
        icon={<RadioButtonIcon />}
        checkedIcon={<RadioButtonIcon disabled={disabled} checked />}
        disabled={disabled}
      />
    }
  />
);

RadioButton.propTypes = {
  selected: PropTypes.bool,
  displayValue: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default RadioButton;
