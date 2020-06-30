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
import { useDispatch } from "react-redux";

import cartActions from "store/actions/cart/actions";
import ProductItem from "./productItem";

const ProductItemContainer = (props) => {
  const dispatch = useDispatch();

  const deleteProductFromCart = (id, uuid) => {
    dispatch(cartActions.deleteProductFromCart(id, uuid));
  };

  const updateProductQuantity = (id, uuid, quantity) => {
    dispatch(cartActions.updateProductQuantity(id, uuid, quantity));
  };

  const updateProductInCart = (id, uuid, quantity) => {
    dispatch(cartActions.updateProductInCart(id, uuid, quantity));
  };

  return (
    <ProductItem
      {...props}
      deleteProductFromCart={deleteProductFromCart}
      updateProductQuantity={updateProductQuantity}
      updateProductInCart={updateProductInCart}
    />
  );
};

export default ProductItemContainer;
