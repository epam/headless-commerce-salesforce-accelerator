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
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

/** Components */
import StyledTypography from "components/core/Typography";
import { StyledDialogTitle } from "./modalStyled";

const ModalTitle = ({ titleName, onClose, ...props }) => (
  <StyledDialogTitle disableTypography {...props}>
    <StyledTypography fontSize={16} colortheme="black">
      {titleName}
    </StyledTypography>
    {onClose && (
      <IconButton aria-label="close" onClick={onClose}>
        <CloseIcon />
      </IconButton>
    )}
  </StyledDialogTitle>
);

ModalTitle.propTypes = {
  titleName: PropTypes.string,
  onClose: PropTypes.func,
};

export default ModalTitle;
