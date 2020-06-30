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

import SuccessIcon from "../SuccessIcon";
import ErrorIcon from "../ErrorIcon";
import InfoIcon from "../InfoIcon";
import WarningIcon from "../WarningIcon";

import {
  StyledNotification,
  StyledContent,
  StyledMessage,
  StyledHeading,
  StyledCloseIcon,
} from "./notificationStyled";

const NOTIFICATION_TYPES = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
};

const Notification = ({ type, heading, onClose, children }) => {
  return (
    <StyledNotification>
      <StyledContent>
        {NOTIFICATION_TYPES[type]}
        <StyledMessage>
          <StyledHeading>{heading}</StyledHeading>
          {children}
        </StyledMessage>
      </StyledContent>
      <StyledCloseIcon onClick={onClose} />
    </StyledNotification>
  );
};

Notification.propTypes = {
  type: PropTypes.string,
  heading: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Notification;
