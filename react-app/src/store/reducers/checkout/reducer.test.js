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
import checkoutMocked from "components/Checkout/__mocks__/checkoutMocked";
import reducer, { initialState } from "./reducer";
import actions from "../../actions/checkout/actions";
import { formatCheckoutData } from "./helpers";

describe("productsReducer", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it("is expected to have initial state", () => {
    expect(store.getState()).toEqual(initialState);
  });

  it("is expected to handle CHECKOUT_BEGIN", () => {
    store.dispatch(actions.checkoutBegin());

    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle CHECKOUT_BEGIN__SUCCESS", () => {
    store.dispatch(actions.checkoutBeginSuccess(checkoutMocked));

    const expectedState = {
      ...formatCheckoutData(checkoutMocked),
      billingData: {
        email: null,
      },
      error: [],
      forms: null,
      shippingData: {
        giftMessage: {},
      },
      isLoading: false,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle CHECKOUT_BEGIN__FAIL", () => {
    store.dispatch(actions.checkoutBeginFail());

    const expectedState = {
      ...initialState,
      isLoading: false,
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("is expected to handle GO_TO_STAGE", () => {
    store.dispatch(actions.goToStage("PAYMENT"));

    const expectedState = {
      ...initialState,
      currentStage: "PAYMENT",
    };

    expect(store.getState()).toEqual(expectedState);
  });
});
