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

import actions from "./actions";
import types from "../../actionsTypes/productsActionsTypes";

describe("actions", () => {
  const store = configureStore([])({});

  afterEach(() => {
    store.clearActions();
  });

  describe("getProducts", () => {
    it("is expected to create GET_PRODUCTS action", () => {
      const id = "/tops";

      const expectedActions = [{ type: types.GET_PRODUCTS, id }];

      store.dispatch(actions.getProducts(id));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("getProductsSuccess", () => {
    it("is expected to create GET_PRODUCTS_SUCCESS action", () => {
      const products = {
        category: "tops",
        ids: ["45", "56", "67"],
      };

      const expectedActions = [{ type: types.GET_PRODUCTS_SUCCESS, products }];

      store.dispatch(actions.getProductsSuccess(products));
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("getProductsFail", () => {
    it("is expected to create GET_PRODUCTS_FAIL action", () => {
      const expectedActions = [{ type: types.GET_PRODUCTS_FAIL }];

      store.dispatch(actions.getProductsFail());
      return expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
