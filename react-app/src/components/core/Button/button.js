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

import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import {
  StyledPrimaryButton,
  StyledLinkButton,
  StyledIcon,
  StyledSecondaryButton,
} from "./buttonStyled";

const BUTTON_VARIANTS = {
  primary: StyledPrimaryButton,
  link: StyledLinkButton,
  secondary: StyledSecondaryButton,
};

const Button = forwardRef(
  (
    {
      id,
      type = "text",
      disabled = false,
      icon = null,
      plain = false,
      onClick,
      onFocus,
      children,
      margin,
      size = "lg",
      link = "",
      variant = "primary",
      ...props
    },
    ref
  ) => {
    const StyledButton = BUTTON_VARIANTS[variant];

    return (
      <StyledButton
        id={id}
        type={type}
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        onFocus={onFocus}
        isIconOnly={!children}
        margin={margin}
        plain={plain}
        size={size}
        link={!!link}
        {...props}
      >
        {link && <Link to={link} />}
        {children}
        {icon && <StyledIcon>{icon}</StyledIcon>}
      </StyledButton>
    );
  }
);

Button.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  size: PropTypes.string,
  link: PropTypes.string,
  style: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  plain: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  icon: PropTypes.element,
  children: PropTypes.node,
  margin: PropTypes.string,
  minWidth: PropTypes.string,
};

export default Button;
