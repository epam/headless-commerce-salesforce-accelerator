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

import productMocked from "components/ProductDetails/__mocks__/productMocked";
import actions from "./actions";
import types from "../../actionsTypes/productActionsTypes";

describe("actions", () => {
  const store = configureStore([])({});

  afterEach(() => {
    store.clearActions();
  });

  describe("getProductById", () => {
    it("is expected to create GET_PRODUCT_BY_ID action", () => {
      const id = "286164896";

      const expectedActions = [{ type: types.GET_PRODUCT_BY_ID, id }];

      store.dispatch(actions.getProductById(id));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("getProductByIdFail", () => {
    it("is expected to create GET_PRODUCT_BY_ID_FAIL action", () => {
      const expectedActions = [{ type: types.GET_PRODUCT_BY_ID_FAIL }];

      store.dispatch(actions.getProductByIdFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("getProductVariation", () => {
    it("is expected to create GET_PRODUCT_VARIATION action", () => {
      const url = "testingURL";
      const expectedActions = [{ type: types.GET_PRODUCT_VARIATION, url }];

      store.dispatch(actions.getProductVariation(url));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("updateProductQuantity", () => {
    it("is expected to create UPDATE_PRODUCT_QUANTITY action", () => {
      const url = "testingURL";
      const expectedActions = [{ type: types.UPDATE_PRODUCT_QUANTITY, url }];

      store.dispatch(actions.updateProductQuantity(url));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("updateProductQuantitySuccess", () => {
    it("is expected to create UPDATE_PRODUCT_QUANTITY_SUCCESS action", () => {
      const { product } = productMocked;
      const expectedActions = [
        { type: types.UPDATE_PRODUCT_QUANTITY_SUCCESS, product },
      ];

      store.dispatch(actions.updateProductQuantitySuccess(product));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("updateProductQuantityFail", () => {
    it("is expected to create UPDATE_PRODUCT_QUANTITY_FAIL action", () => {
      const expectedActions = [{ type: types.UPDATE_PRODUCT_QUANTITY_FAIL }];

      store.dispatch(actions.updateProductQuantityFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
