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
import { selectCartValidation } from "store/selectors/cart/selectors";

import Grid from "@material-ui/core/Grid";
import CartProductLineItemsTable from "components/CartProductLineItemsTable";
import CartValidationMsg from "components/Cart/CartValidationMsg";

/** UI Components */
import CartTotal from "../CartTotal";

/** Components */
import CartProductGridWrapper from "./cartProductGridStyled";

const CartProductsGrid = () => {
  const cartValidation = useSelector(selectCartValidation);

  return (
    <CartProductGridWrapper container>
      <Grid item xs={8}>
        {cartValidation ? <CartValidationMsg margin="0 0 16px 0" /> : ""}
        <CartProductLineItemsTable />
      </Grid>
      <Grid item xs={4}>
        <CartTotal />
      </Grid>
    </CartProductGridWrapper>
  );
};

export default CartProductsGrid;
