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
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

/** Components */
import ShippingMethods from "components/Cart/ShippingMethods";
import BasketSummary from "components/BasketSummary";
import {
  selectCartResources,
  selectTotals,
  selectCartValidation,
} from "store/selectors/cart/selectors";
import { selectUserStatus } from "store/selectors/user/selectors";
import StyledCartTotal from "./cartTotalStyled";

import Button from "../core/Button";

const CartTotal = () => {
  const userStatus = useSelector(selectUserStatus);
  const history = useHistory();
  const redirectToCheckout = () => {
    if (userStatus === "AUTHENTICATED" || userStatus === "IDENTIFIED") {
      history.push("/checkout");
    } else {
      history.push("/checkout-login");
    }
  };
  const resources = useSelector(selectCartResources);
  const totals = useSelector(selectTotals);
  const invalid = useSelector(selectCartValidation);

  return (
    <StyledCartTotal>
      <ShippingMethods />
      <BasketSummary resources={resources} totals={totals} />
      <Button
        onClick={redirectToCheckout}
        minWidth="100%"
        margin="24px 0 0 0"
        disabled={invalid}
      >
        Checkout
      </Button>
    </StyledCartTotal>
  );
};

export default CartTotal;
