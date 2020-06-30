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

import types from "store/actionsTypes/cartActionsTypes";

const actions = {
  getCartData: () => ({
    type: types.GET_CART_DATA,
  }),
  getCartDataSuccess: (data) => ({
    type: types.GET_CART_DATA__SUCCESS,
    data,
  }),
  getCartDataFail: () => ({
    type: types.GET_CART_DATA__FAILURE,
  }),
  deleteProductFromCart: (pid, uuid) => ({
    type: types.DELETE_PRODUCT_FROM_CART,
    pid,
    uuid,
  }),
  deleteProductFromCartSuccess: (data) => ({
    type: types.DELETE_PRODUCT_FROM_CART__SUCCESS,
    data,
  }),
  deleteProductFromCartFail: () => ({
    type: types.DELETE_PRODUCT_FROM_CART__FAILURE,
  }),
  addProductToCart: (id, quantity, name, options) => ({
    type: types.ADD_PRODUCT_TO_CART,
    id,
    quantity,
    name,
    options,
  }),
  addProductToCartSuccess: (data, productName) => {
    return {
      type: types.ADD_PRODUCT_TO_CART_SUCCESS,
      productName,
      data,
    };
  },
  addProductToCartFail: (data) => ({
    type: types.ADD_PRODUCT_TO_CART_FAIL,
    data,
  }),
  selectShippingMethod: (methodId, shipmentUUID) => ({
    type: types.SELECT_SHIPPING_METHOD,
    methodId,
    shipmentUUID,
  }),
  updateProductQuantity: (id, uuid, quantity) => ({
    type: types.UPDATE_PRODUCT_QUANTITY,
    id,
    uuid,
    quantity,
  }),
  updateProductQuantitySuccess: (data) => ({
    type: types.UPDATE_PRODUCT_QUANTITY_SUCCESS,
    data,
  }),
  updateProductQuantityFail: () => ({
    type: types.UPDATE_PRODUCT_QUANTITY_FAIL,
  }),
  updateProductInCart: (pid, uuid, quantity) => ({
    type: types.UPDATE_PRODUCT,
    pid,
    uuid,
    quantity,
  }),
};

export default actions;
