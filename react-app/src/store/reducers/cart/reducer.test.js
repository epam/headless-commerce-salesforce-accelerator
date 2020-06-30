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
import actions from "../../actions/cart/actions";

describe("cart reducer", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it("is expected to have initial state", () => {
    expect(store.getState()).toEqual(initialState);
  });

  it("is expected handle GET_CART_DATA__SUCCESS", () => {
    const expectedState = {
      totals: { grandTotal: "750$" },
      shipments: { method: "Post" },
      items: [{ id: "354657657M" }],
      numOfShipments: 1,
      numItems: 1,
      hasBonusProduct: false,
      approachingDiscounts: null,
      variation: null,
      isLoading: false,
      resources: { cancel: "Cancel" },
    };

    const response = {
      totals: { grandTotal: "750$" },
      shipments: [{ method: "Post" }],
      items: [{ id: "354657657M" }],
      numOfShipments: 1,
      numItems: 1,
      hasBonusProduct: false,
      approachingDiscounts: null,
      variationAttributes: null,
      resources: { cancel: "Cancel" },
    };

    store.dispatch(actions.getCartDataSuccess(response));

    const actualState = store.getState();
    expect(actualState).toEqual(expectedState);
  });

  it("is expected handle GET_CART_DATA__FAILURE", () => {
    store.dispatch(actions.getCartDataFail());

    const actualState = store.getState();
    const expectedState = {
      ...initialState,
    };

    expect(actualState).toEqual(expectedState);
  });

  it("is expected handle ADD_PRODUCT_TO_CART_SUCCESS", () => {
    const expectedState = {
      totals: { grandTotal: "750$" },
      shipments: { method: "Post" },
      items: [{ id: "354657657M" }],
      numOfShipments: 1,
      numItems: 1,
      hasBonusProduct: false,
      approachingDiscounts: null,
      variation: null,
      isLoading: false,
      resources: { cancel: "Cancel" },
    };

    const response = {
      totals: { grandTotal: "750$" },
      shipments: [{ method: "Post" }],
      items: [{ id: "354657657M" }],
      numOfShipments: 1,
      numItems: 1,
      hasBonusProduct: false,
      approachingDiscounts: null,
      variationAttributes: null,
      resources: { cancel: "Cancel" },
    };

    store.dispatch(actions.addProductToCartSuccess(response));

    const actualState = store.getState();
    expect(actualState).toEqual(expectedState);
  });

  it("is expected handle ADD_PRODUCT_TO_CART_FAIL", () => {
    const response = {
      valid: {
        error: true,
        message:
          "Your shopping cart cannot be ordered since one or more of the products in your cart are not available in the requested quantity. Please check availability for each product.",
      },
    };

    store.dispatch(actions.addProductToCartFail(response));

    const actualState = store.getState();
    const expectedState = {
      ...initialState,
    };

    expect(actualState).toEqual(expectedState);
  });

  it("is expected handle SELECT_SHIPPING_METHOD", () => {
    store.dispatch(actions.selectShippingMethod("001", "erger5345vwt34"));

    const actualState = store.getState();
    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(actualState).toEqual(expectedState);
  });
});
