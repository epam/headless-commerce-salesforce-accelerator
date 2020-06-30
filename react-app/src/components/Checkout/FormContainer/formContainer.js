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
import EditIcon from "components/core/EditIcon";
import StageNumber from "./StageNumber";
import {
  StyledFormContainer,
  StyledFormHead,
  StyledFormBody,
  StyledEditButton,
  StyledTypography,
} from "./formContainerStyled";

const FormContainer = ({
  title,
  margin,
  children,
  isActive,
  onEditForm,
  number,
  summary,
  submitted = true,
}) => {
  return (
    <StyledFormContainer margin={margin}>
      <StyledFormHead>
        <StageNumber number={number} active={isActive} submitted={submitted} />
        <StyledTypography variant="h3" fontSize={16} colortheme="mineShaft">
          {title}
          {!isActive && submitted && (
            <StyledEditButton icon={<EditIcon />} plain onClick={onEditForm}>
              Edit
            </StyledEditButton>
          )}
        </StyledTypography>
      </StyledFormHead>
      {isActive ? (
        <StyledFormBody>{children}</StyledFormBody>
      ) : (
        submitted && summary
      )}
    </StyledFormContainer>
  );
};

FormContainer.propTypes = {
  title: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.shape({}),
  number: PropTypes.string,
  isActive: PropTypes.bool,
  submitted: PropTypes.bool,
  onEditForm: PropTypes.func,
  summary: PropTypes.element,
};

export default FormContainer;
