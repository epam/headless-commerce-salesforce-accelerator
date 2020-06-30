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
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

/** Components */
import Button from "components/core/Button";
import StyledTypography from "components/core/Typography";
import StyledGuestCheckout from "./guestCheckoutStyled";

const GuestCheckout = ({ resources }) => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/checkout");
  };

  return (
    <StyledGuestCheckout>
      <StyledTypography
        variant="h3"
        fontSize={24}
        lineheight={32}
        colortheme="mineShaft"
        margin="0 0 24px"
      >
        {resources?.guestCheckoutTitle}
      </StyledTypography>
      <StyledTypography
        fontSize={14}
        lineheight={24}
        colortheme="mineShaft"
        fontWeight="regular"
        margin="0 0 24px"
      >
        {resources?.guestCheckoutNotice}
      </StyledTypography>
      <Button margin="24px 0 0 0" minWidth="100%" onClick={handleSubmit}>
        {resources?.guestCheckoutCTA}
      </Button>
    </StyledGuestCheckout>
  );
};

GuestCheckout.propTypes = {
  resources: PropTypes.objectOf(PropTypes.any),
};

export default GuestCheckout;
