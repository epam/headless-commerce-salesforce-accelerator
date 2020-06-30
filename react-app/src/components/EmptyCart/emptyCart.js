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

/** Components */
import StyledTypography from "components/core/Typography";
import Button from "components/core/Button";
import CartIcon from "components/core/CartIcon";
import EmptyCartWrapper from "./emptyCartStyled";

const EmptyCart = () => {
  const history = useHistory();

  return (
    <EmptyCartWrapper container>
      <CartIcon />
      <StyledTypography fontSize={16} colortheme="mineShaft">
        Your Shopping Cart is Empty
      </StyledTypography>
      <StyledTypography
        margin="8px 0px 16px 0px"
        colortheme="mineShaft"
        fontWeight="regular"
        width="25%"
      >
        Add at least one product to a Shopping Cart to start Checkout
      </StyledTypography>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        <StyledTypography>Continue Shopping</StyledTypography>
      </Button>
    </EmptyCartWrapper>
  );
};

export default EmptyCart;
