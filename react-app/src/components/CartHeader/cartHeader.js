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
import Link from "@material-ui/core/Link";

/** Components */
import StyledTypography from "components/core/Typography";
import HeadsetMicIcon from "components/core/HeadsetMicIcon";
import {
  CartHeaderBlockWrapper,
  CartHeaderMainWrapper,
} from "./cartHeaderStyled";

const CartHeader = ({ itemsInCart = 0 }) => (
  <CartHeaderMainWrapper container>
    <CartHeaderBlockWrapper item xs={9}>
      <StyledTypography fontSize={32} lineheight={48} colortheme="mineShaft">
        Your Cart
      </StyledTypography>
      {!!itemsInCart && (
        <StyledTypography
          margin="0px 0px 0px 15px"
          fontSize={32}
          lineheight={48}
          colortheme="rollingStone"
        >
          {itemsInCart} {itemsInCart > 1 ? "items" : "item"}
        </StyledTypography>
      )}
    </CartHeaderBlockWrapper>
    <CartHeaderBlockWrapper item xs={3}>
      <HeadsetMicIcon />
      <StyledTypography fontWeight="regular" colortheme="mineShaft">
        Need Help? Call <Link href="tel: 1-800-555-019">1-800-555-0199</Link>
      </StyledTypography>
    </CartHeaderBlockWrapper>
  </CartHeaderMainWrapper>
);

CartHeader.propTypes = {
  itemsInCart: PropTypes.number,
};

export default CartHeader;
