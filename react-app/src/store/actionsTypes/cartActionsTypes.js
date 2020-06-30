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

const cartActionTypes = {
  GET_CART_DATA: "GET_CART_DATA",
  GET_CART_DATA__SUCCESS: "GET_CART_DATA__SUCCESS",
  GET_CART_DATA__FAILURE: "GET_CART_DATA__FAILURE",

  DELETE_PRODUCT_FROM_CART: "DELETE_PRODUCT_FROM_CART",
  DELETE_PRODUCT_FROM_CART__SUCCESS: "DELETE_PRODUCT_FROM_CART__SUCCESS",
  DELETE_PRODUCT_FROM_CART__FAILURE: "DELETE_PRODUCT_FROM_CART__FAILURE",

  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  ADD_PRODUCT_TO_CART_SUCCESS: "ADD_PRODUCT_TO_CART_SUCCESS",
  ADD_PRODUCT_TO_CART_FAIL: "ADD_PRODUCT_TO_CART_FAIL",

  SELECT_SHIPPING_METHOD: "SELECT_SHIPPING_METHOD",

  UPDATE_PRODUCT_QUANTITY: "UPDATE_PRODUCT_QUANTITY_FROM_CART",
  UPDATE_PRODUCT_QUANTITY_SUCCESS: "UPDATE_PRODUCT_QUANTITY_FROM_CART_SUCCESS",
  UPDATE_PRODUCT_QUANTITY_FROM_FAIL: "UPDATE_PRODUCT_QUANTITY_FROM_CART_FAIL",

  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  UPDATE_PRODUCT_SUCCESS: "UPDATE_PRODUCT_SUCCESS",
  UPDATE_PRODUCT_FAIL: "UPDATE_PRODUCT_FAIL",
};

export default cartActionTypes;
