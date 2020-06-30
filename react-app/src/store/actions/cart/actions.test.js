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

import configureStore from "redux-mock-store";

// import productMocked from "components/ProductDetails/__mocks__/productMocked";
import actions from "./actions";
import types from "../../actionsTypes/cartActionsTypes";

describe("cart actions", () => {
  const store = configureStore([])({});

  afterEach(() => {
    store.clearActions();
  });

  describe("getCartData", () => {
    it("is expected to create GET_CART_DATA action", () => {
      const id = "286164896";

      const expectedActions = [{ type: types.GET_CART_DATA }];

      store.dispatch(actions.getCartData(id));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("getCartDataFail", () => {
    it("is expected to create GET_CART_DATA__FAILURE action", () => {
      const expectedActions = [{ type: types.GET_CART_DATA__FAILURE }];

      store.dispatch(actions.getCartDataFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("deleteProductFromCart", () => {
    it("is expected to create DELETE_PRODUCT_FROM_CART action", () => {
      const pid = "25687464";
      const uuid = "4588728f8878fd581tr89";
      const expectedActions = [
        { type: types.DELETE_PRODUCT_FROM_CART, pid, uuid },
      ];

      store.dispatch(actions.deleteProductFromCart(pid, uuid));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("deleteProductFromCartFail", () => {
    it("is expected to create DELETE_PRODUCT_FROM_CART__FAILURE action", () => {
      const expectedActions = [
        { type: types.DELETE_PRODUCT_FROM_CART__FAILURE },
      ];

      store.dispatch(actions.deleteProductFromCartFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("deleteProductFromCartSuccess", () => {
    it("is expected to create DELETE_PRODUCT_FROM_CART__SUCCESS action", () => {
      const data = {};
      const expectedActions = [
        { type: types.DELETE_PRODUCT_FROM_CART__SUCCESS, data },
      ];

      store.dispatch(actions.deleteProductFromCartSuccess(data));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("addProductToCart", () => {
    it("is expected to create ADD_PRODUCT_TO_CART action", () => {
      const [id, quantity, name] = ["4681687184m", 2, "Cool TV"];
      const expectedActions = [
        { type: types.ADD_PRODUCT_TO_CART, id, quantity, name },
      ];

      store.dispatch(actions.addProductToCart(id, quantity, name));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("addProductToCartFail", () => {
    it("is expected to create ADD_PRODUCT_TO_CART_FAIL action", () => {
      const expectedActions = [{ type: types.ADD_PRODUCT_TO_CART_FAIL }];

      store.dispatch(actions.addProductToCartFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("addProductToCartSuccess", () => {
    it("is expected to create ADD_PRODUCT_TO_CART_SUCCESS action", () => {
      const data = {};
      const productName = "Fancy dress";
      const expectedActions = [
        { type: types.ADD_PRODUCT_TO_CART_SUCCESS, productName, data },
      ];

      store.dispatch(actions.addProductToCartSuccess(data, productName));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
