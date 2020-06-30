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
import { ErrorMessage } from "react-hook-form";

/** Components */
import StyledTypography from "components/core/Typography";
import Tooltips from "../../Tooltip/tooltip";

import {
  TextInputStyled,
  TextInputLabelStyled,
  TextInputWrapper,
} from "./textInputStyled";

const TextInput = ({
  labelName,
  width,
  id = "",
  exampleDescription,
  required,
  info,
  register,
  minLength = 0,
  maxLength = 10000,
  pattern,
  name,
  errors = {},
  fullWidth = false,
  handleChange,
  ...props
}) => {
  return (
    <TextInputWrapper width={width} fullWidth={fullWidth}>
      <TextInputLabelStyled htmlFor={id}>
        <StyledTypography colortheme="mineShaft">
          {`${labelName} ${required ? "*" : ""}`}
        </StyledTypography>
        {info && <Tooltips title={info} />}
      </TextInputLabelStyled>
      <TextInputStyled
        id={id}
        type="text"
        name={name}
        errors={errors}
        maxLength={maxLength}
        minLength={minLength}
        ref={register}
        onChange={handleChange}
        {...props}
      />
      {errors && (
        <ErrorMessage
          className="error-message"
          errors={errors}
          name={name}
          as="p"
        />
      )}
      {exampleDescription && (
        <StyledTypography
          fontWeight="regular"
          fontSize="12"
          lineheight="16"
          colortheme="rollingStone"
        >
          Example: {exampleDescription}
        </StyledTypography>
      )}
    </TextInputWrapper>
  );
};

TextInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  width: PropTypes.string,
  id: PropTypes.string.isRequired,
  exampleDescription: PropTypes.string,
  required: PropTypes.bool,
  info: PropTypes.string,
  register: PropTypes.func,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.any),
  fullWidth: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default TextInput;
