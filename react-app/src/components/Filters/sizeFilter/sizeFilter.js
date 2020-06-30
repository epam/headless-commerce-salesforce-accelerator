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

/** Components */
import SizeStyled from "./sizeFilterStyled";
import WrapperStyled from "../commonStyles";

const SizeFilter = ({ selected, id, displayValue, handleChange, disabled }) => (
  <WrapperStyled
    id={id}
    key={displayValue}
    selected={selected}
    onClick={handleChange}
    disabled={disabled}
    width={48}
  >
    <SizeStyled selected={selected} disabled={disabled}>
      {displayValue.replace(" inches", "”")}
    </SizeStyled>
  </WrapperStyled>
);

SizeFilter.propTypes = {
  selected: PropTypes.bool,
  id: PropTypes.string,
  displayValue: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default SizeFilter;
