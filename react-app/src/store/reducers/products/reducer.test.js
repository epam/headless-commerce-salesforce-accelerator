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

import { createStore } from "redux";

import reducer, { initialState } from "./reducer";
import actions from "../../actions/products/actions";

describe("productsReducer", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it("is expected to have initial state", () => {
    expect(store.getState()).toEqual(initialState);
  });

  it("is expected handle GET_PRODUCTS", () => {
    store.dispatch(actions.getProducts());

    const actualState = store.getState();
    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(actualState).toEqual(expectedState);
  });

  it("is expected handle GET_PRODUCTS_SUCCESS", () => {
    const expectedState = {
      ids: ["545", "768"],
      category: "television",
      isLoading: false,
      resultsCount: 2,
    };

    const response = {
      productSearch: {
        productIds: [{ productID: "545" }, { productID: "768" }],
        count: 2,
        category: {
          name: "television",
        },
      },
    };

    store.dispatch(actions.getProductsSuccess(response));

    const actualState = store.getState();
    expect(actualState).toEqual(expectedState);
  });

  it("is expected handle GET_PRODUCTS_FAIL", () => {
    store.dispatch(actions.getProductsFail());

    const actualState = store.getState();
    const expectedState = {
      ...initialState,
      isLoading: false,
    };

    expect(actualState).toEqual(expectedState);
  });
});
