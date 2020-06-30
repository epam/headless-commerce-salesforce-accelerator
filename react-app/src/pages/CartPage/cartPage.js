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

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/** Selectors */
import { selectNumItems } from "store/selectors/cart/selectors";

/** Actions */
import actions from "store/actions/cart/actions";

/** UI Components */
import { StylesProvider } from "@material-ui/core/styles";

/** Components */
import CartHeader from "components/CartHeader";
import EmptyCart from "components/EmptyCart";
import CartProductsGrid from "components/CartProductsGrid";
import { CartPageMainWrapper } from "./cartPageStyled";

const CartPage = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector(selectNumItems);

  useEffect(() => {
    dispatch(actions.getCartData());
  }, [dispatch]);

  return (
    <StylesProvider injectFirst>
      <CartPageMainWrapper container>
        <CartHeader itemsInCart={itemsInCart} />
        {itemsInCart > 0 ? <CartProductsGrid /> : <EmptyCart />}
      </CartPageMainWrapper>
    </StylesProvider>
  );
};

export default CartPage;
